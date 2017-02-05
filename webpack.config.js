var webpack = require('webpack');
module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './course-app.start.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.png$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.jpg$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
};
