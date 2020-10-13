const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src", "index.tsx")
  },
  output: {
    // filename: "[name].[hash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  hack: `true; @import "${path.resolve(
                    __dirname,
                    "../",
                    "src",
                    "theme.less"
                  )}";`
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../public", "index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};