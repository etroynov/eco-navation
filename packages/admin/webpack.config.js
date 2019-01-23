/**
 * Vendor
 */

const path = require('path');

/**
 * Plugins
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

/**
 * ENV
 */


/**
 * Expo
 */

module.exports = {
  // devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index.tsx'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),

    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
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
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[folder]__[local]-[hash:5]',
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
          'style-loader',
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
        test: /\.(png|jpg|gif|svg)$/,
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
    new Dotenv({
      path: './.env.development'
    }),

    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      mobile: true,
      inject: false,
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
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'stage'),
    compress: true,
    stats: 'minimal',
    watchContentBase: true,
    watchOptions: {
      poll: true,
      aggregateTimeout: 3000,
    },
    hot: false,
  },
};