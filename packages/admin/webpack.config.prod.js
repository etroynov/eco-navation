/**
 * Vendor
 */

const path = require('path');

/**
 * Plugins
 */

const Zip = require('zip-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Expo
 */

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.tsx'),
    path.resolve(__dirname, 'src/legacy.js'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),

    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    publicPath: './',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  module: {
    rules: [
      // Typescript
      {
        test: /\.tsx?$/,
        use: ['thread-loader', 'babel-loader'],
      },

      // Styles user
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },

      // Styles lib
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },

      // Images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './',
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-mozjpeg')({
                  progressive: true,
                  arithmetic: false,
                }),
                require('imagemin-pngquant')({
                  floyd: 0.5,
                  speed: 2,
                }),
              ],
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff2?)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:5].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'zip']),
    new Dotenv(),

    new CopyWebpackPlugin([
      { from: 'src/config/fb/*', to: './', flatten: true },
    ]),

    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[name].[hash:8].css',
    }),

    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      mobile: true,
      inject: false,
      headHtmlSnippet: ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.12.3/antd.min.css"/>`,
      appMountId: 'root',
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
      },
    }),

    new Zip({
      path: path.resolve(__dirname, 'zip'),
      filename: String(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .replace(/T/, '-')
          .replace(/\..+/, '')
          .replace(/-/g, '_')
      ),
    }),
  ],
};
