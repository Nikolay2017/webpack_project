var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path');
module.exports = {
  entry: {
    'index':path.join(__dirname, '/src/index.js')//,
    //'logo':path.join(__dirname, '/src/includes/logo/logo.js')
  },
  output: {
    filename:"assets/js/[name].js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    overlay: true
  },
  module: {
            rules: [
                {
                  test: /\.js$/,
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

  plugins: [
    new ExtractTextPlugin({
      filename: "assets/css/style.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: './src/index.pug'
    }),
    //new HtmlWebpackPlugin({
    //  filename: 'logo.html',
    //  chunks: ['logo'],
    //  template: './src/includes/logo/logo.pug'
    //}),
    new CleanWebpackPlugin(['dist'])
  ]
};