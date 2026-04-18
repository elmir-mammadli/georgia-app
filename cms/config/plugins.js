module.exports = ({ env }) => {
  const apiToken = env('STRAPI_CLOUD_API_TOKEN');
  const apiUrl = env('STRAPI_CLOUD_API_URL');
  const isCloudRunnerEnabled = Boolean(apiToken && apiUrl);

  return {
    'cloud-cronjob-runner': {
      enabled: isCloudRunnerEnabled,
      config: isCloudRunnerEnabled
        ? {
            apiToken,
            apiUrl,
            firstRunWindow: env.int('STRAPI_CLOUD_FIRST_RUN_WINDOW', 60),
          }
        : {},
    },
  };
};
