module.exports = {
  apps: [
    {
      name: "ucavtor-api",
      script: "npm",
      args: 'start --prefix packages/api',
      watch: true,
      env: {
        PORT: 8082,
        NODE_ENV: "production"
      },
    },

    {
      name: "ucavtor-site",
      script: "npm",
      args: 'start --prefix packages/site',
      watch: true,
      env: {
        PORT: 8083,
        NODE_ENV: "production"
      },
    }
  ]
};
