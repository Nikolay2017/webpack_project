var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path');
module.exports = {
  entry: {
    'index':path.join(__dirname, '/src/pages/index/index.js')//,
    //'blog': path.join(__dirname, '/src/pages/blog/blog.js')
  },
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist')
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
        template: './src/pages/index/index.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog'],
        template: './src/pages/blog/blog.pug'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};