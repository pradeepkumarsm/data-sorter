/*eslint-disable no-var */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const WorkerPlugin = require('worker-plugin');


console.log(__dirname);
console.log(process.env.NODE_ENV);


module.exports = {

    devtool: 'cheap-module-source-map',

    entry: {
        app: './sorter.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'data-sorter.js',
        libraryTarget: 'umd',
        library: 'dataSorter'
    },

    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    },

    resolve: {},
    plugins: [
        new WorkerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "copyFiles.js"),
                to: '/dist',
              },
            ],
        }),
    ]

};
