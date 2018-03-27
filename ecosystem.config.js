module.exports = {
  apps: [
    {
      name: "ucavtor-api",
      script: "./api",
      watch: true,
      env: {
        PORT: 8082,
        NODE_ENV: "production"
      },
    },

    {
      name: "ucavtor-site",
      script: "npm",
      args: 'start --prefix site',
      watch: true,
      env: {
        PORT: 8083,
        NODE_ENV: "production"
      },
    }
  ]
};
