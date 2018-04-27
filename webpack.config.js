//var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
//var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),//'./src/index',
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
            rules: [
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
  plugins: [
    
    
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug'
    }),
    new ExtractTextPlugin({
      filename: "assets/css/style.css"//,
      //allChunks: true
    })
  ]
};