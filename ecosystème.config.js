module.exports = {
  apps: [
    {
      name: "web",
      script: "__sapper__/build/index.js",
      watch: false,
    },
  ],
};
