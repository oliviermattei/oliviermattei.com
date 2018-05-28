const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            }]
    },
    mode: 'production',
    plugins: [
        new CopyWebpackPlugin([{ from: path.join(__dirname, "./src/views"), to: path.join(__dirname, "./dist") }]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
};
