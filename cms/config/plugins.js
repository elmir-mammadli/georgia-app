module.exports = ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: true,
    config: {
      apiToken: env('STRAPI_CLOUD_API_TOKEN', 'placeholder-token'),
      apiUrl: env('STRAPI_CLOUD_API_URL', 'https://cloud.strapi.io'),
      firstRunWindow: env.int('STRAPI_CLOUD_FIRST_RUN_WINDOW', 60),
    },
  },
});
