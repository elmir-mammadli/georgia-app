const fs = require('fs');
const path = require('path');

const appRoot = path.resolve(__dirname, '..');
const distRoot = path.join(appRoot, 'dist');

const syncDir = (name) => {
  const source = path.join(appRoot, name);
  const target = path.join(distRoot, name);

  if (!fs.existsSync(source)) {
    return;
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, { recursive: true });
};

fs.mkdirSync(distRoot, { recursive: true });
syncDir('config');
syncDir('src');
