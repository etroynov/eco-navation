const withSass = require('@zeit/next-sass');
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
  [withSvgr],
  [withSass, {
    cssModules: true
  }]
]);
