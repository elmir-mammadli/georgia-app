const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const cwd = process.cwd();
const tsconfigPath = path.join(cwd, 'tsconfig.json');
const backupPath = path.join(cwd, 'tsconfig.json.local-backup');
const localTsconfigPath = path.join(cwd, 'tsconfig.local.json');
const jsonManifestPath = path.join(cwd, 'scripts', '.strapi-json-manifest.ts');

let tsconfigSwapped = false;

const collectJsonFiles = (dir) => {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectJsonFiles(entryPath);
    }

    return entry.name.endsWith('.json') ? [entryPath] : [];
  });
};

const writeJsonManifest = () => {
  const jsonFiles = collectJsonFiles(path.join(cwd, 'src'));
  const importLines = jsonFiles
    .sort()
    .map((filePath) => path.relative(path.dirname(jsonManifestPath), filePath).replace(/\\/g, '/'))
    .map((relativePath) => `import './${relativePath.replace(/^\.\//, '')}';`);

  const manifestContent = `${importLines.join('\n')}\n\nexport {};\n`;
  fs.writeFileSync(jsonManifestPath, manifestContent);
};

const restoreTsconfig = () => {
  if (!tsconfigSwapped) {
    return;
  }

  if (fs.existsSync(jsonManifestPath)) {
    fs.rmSync(jsonManifestPath);
  }

  if (fs.existsSync(tsconfigPath)) {
    fs.rmSync(tsconfigPath);
  }

  if (fs.existsSync(backupPath)) {
    fs.renameSync(backupPath, tsconfigPath);
  }

  tsconfigSwapped = false;
};

if (fs.existsSync(backupPath) && !fs.existsSync(tsconfigPath)) {
  fs.renameSync(backupPath, tsconfigPath);
}

if (fs.existsSync(localTsconfigPath) && fs.existsSync(tsconfigPath)) {
  fs.renameSync(tsconfigPath, backupPath);
  fs.copyFileSync(localTsconfigPath, tsconfigPath);
  tsconfigSwapped = true;
}

writeJsonManifest();

process.on('exit', restoreTsconfig);

const strapiPackageJson = require.resolve('@strapi/strapi/package.json', { paths: [cwd] });
const strapiBin = path.join(path.dirname(strapiPackageJson), 'bin', 'strapi.js');
const child = spawn(process.execPath, [strapiBin, 'develop'], {
  cwd,
  env: process.env,
  stdio: 'inherit',
});

const shutdown = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

child.on('close', (code, signal) => {
  restoreTsconfig();

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

child.on('error', (error) => {
  restoreTsconfig();
  throw error;
});
