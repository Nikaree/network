const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//const { resolve } = require('path')
const jquery = require("jquery");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    firstlink: "./src/firstLink.js",
    secondlink: "./src/secondLink.js",
    thirdLink: "./src/thirdLink.js",
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./dist/main.css", // название выходного файла
    }),

    new HtmlWebpackPlugin({
      title: "template.html",
      template: path.resolve(__dirname, "./src/template.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),

    new HtmlWebpackPlugin({
      title: "firstLink.html",
      template: path.resolve(__dirname, "./src/firstLink.html"), // шаблон
      filename: "firstLink.html", // название выходного файла
    }),

    new HtmlWebpackPlugin({
      title: "secondLink.html",
      template: path.resolve(__dirname, "./src/secondLink.html"), // шаблон
      filename: "secondLink.html", // название выходного файла
    }),

    new HtmlWebpackPlugin({
      title: "thirdLink.html",
      template: path.resolve(__dirname, "./src/thirdLink.html"), // шаблон
      filename: "thirdLink.html", // название выходного файла
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,

        // CSS-погрузчик используется для анализа файлов CSS
        // Стиль-погрузчик используется для уменьшения CSS-кода в HTML с использованием динамики JS, уменьшая вторичные запросы.
        // USE использует последовательность Loader быть фиксированной справа налево.
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.js$/, // для всех javascript-файлов
        exclude: /node_modules/, // за исключением папки с загружаемыми пакетами
        use: {
          loader: "babel-loader", // используем транспайлер Babel
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
/*
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
      /*
            {
                test: /jquery.+\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }*/
    ],
  },
};
