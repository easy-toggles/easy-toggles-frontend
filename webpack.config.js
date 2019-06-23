const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const stubHost = `http://localhost:${process.env.STUB_PORT || 8882}`

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import')(),
                require('postcss-url')(),
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          },
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    stats: 'normal',
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: [
      { path: '/api', target: stubHost }
    ]
  }
}