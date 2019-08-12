const plugins = require("next-compose-plugins");
const sass = require('@zeit/next-sass');
const svg = require("next-svgr");
const optimizedImages = require('next-optimized-images');


module.exports = plugins([
  [svg],
  [sass, { cssModules: true }],
  [optimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false
  }],
]);
