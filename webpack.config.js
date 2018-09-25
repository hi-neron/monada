const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: { main: "./src/app.js" }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "public"), // string
    filename: "bundle.js", // string
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
        {
            loader : "style-loader"
        }, {
            loader : "css-loader"
        }, {
            loader : "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: {
            //   minimize: true
            // }
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: ".img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      }
    ]
  },
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/css/style.scss",
      chunkFilename: "style.scss"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
  // list of additional plugins
  /* Advanced configuration (click to show) */
}