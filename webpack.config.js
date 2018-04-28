//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/pages/header_block/index.js'),//'./src/index',
  //entry: {
  //  'index': './src/pages/index/index.js',
  //  'blog': './src/pages/blog/blog.js'
  //},
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
    //path: path.build,
    //filename: './js/bundle.js'
  },
  module: {
            rules: [
                {
                  test: /\.js$/,
                  include: path.resolve(__dirname, './src/js'),
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: 'env'
                    }
                  }
                },
                {
                    test: /\.styl$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader','stylus-loader'],
                    }),
                },
                
                {
                  test: /\.pug$/,
                  loader: 'pug-loader',
                  options: {
                      pretty: true
                  }
                }
            ],
        },
  /*plugins: [
    
    
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug'
    }),
    new ExtractTextPlugin({
      filename: "assets/css/style.css",
      allChunks: true
    })
  ]*/
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: './src/pages/header_block/index.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog'],
        template: './src/pages/blog/blog.pug'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};