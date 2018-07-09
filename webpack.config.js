const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const vendors = require('./vendors');

module.exports = {
  entry: {
    vendor: [...vendors],
    app: ['babel-polyfill', './src/client.js'],
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          },
        ],
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
          },
        ],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader?limit=8192',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    alias: {
      node_modules: path.resolve(__dirname, 'node_modules'),
      components: path.resolve(__dirname, 'src', 'components'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
      store: path.resolve(__dirname, 'src', 'store'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      sagas: path.resolve(__dirname, 'src', 'sagas'),
      images: path.resolve(__dirname, 'src', 'images'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      api: path.resolve(__dirname, 'src', 'api'),
      config: path.resolve(__dirname, 'src', 'config'),
    },
    extensions: ['.js', '.json'],
  },
  devtool: 'eval-source-map',
};
