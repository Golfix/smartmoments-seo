module.exports = {
  apps: [
    {
      name: "smartmoments",
      script: "node_modules/.bin/next",
      args: "start -p 3005",
      cwd: "/var/www/smartmoments-seo",
      env: {
        NODE_ENV: "production",
        PORT: 3005,
      },
    },
  ],
};
