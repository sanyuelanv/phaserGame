var path = require('path');
var node_module_dir = path.resolve(__dirname, 'node_module')
var webpack = require('webpack')
// process.traceDeprecation = true
module.exports = {
  entry: {
    app:"./dev/main.js",
  },
  output: {
    filename: 'app.js'
  },
  devServer:{
    contentBase: path.join(__dirname, "static"),
    compress: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))}),
  ],
  module:{
    rules:[
      {
        loader: "babel-loader",
        include: [path.resolve(__dirname, 'dev')],
        exclude: [node_module_dir],
        test: /\.js?$/,
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
}
