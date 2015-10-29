var path = require('path');
var webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: "material.[name].js",
    library: ["material", "[name]"],
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel"}
    ]
  },
  externals: {
    'jquery': 'var jQuery',
    'react': 'var React',
    'react-dom': 'var ReactDOM'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    // new webpack.optimize.DedupePlugin()
  ]
};
