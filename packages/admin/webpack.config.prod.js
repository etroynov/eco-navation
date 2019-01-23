/**
 * Vendor
 */

const path = require('path');

/**
 * Plugins
 */

const Zip = require('zip-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Expo
 */

module.exports = {
  entry: [path.resolve(__dirname, 'src/index.tsx')],

  output: {
    path: path.resolve(__dirname, 'dist'),

    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'async',
          priority: 1
        }
      }
    },
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash:8].[ext]',
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
            name: '[hash:8].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist', 'zip']),
    new Dotenv(),

    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[name].[hash:8].css',
    }),

    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      mobile: true,
      inject: false,
      headHtmlSnippet: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.12.3/antd.min.css"/>`,
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
