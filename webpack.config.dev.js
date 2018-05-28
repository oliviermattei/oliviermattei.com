const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/main.js'],
    devtool: "cheap-eval-source-map",
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
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            }]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "./src"),
        watchContentBase: true,
        open: true
    },
    plugins: [
        new CopyWebpackPlugin([{ from: path.join(__dirname, "./src/views"), to: path.join(__dirname, "./dist") }])
    ]
};
