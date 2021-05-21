/*eslint-disable no-var */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');


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
        /*  new webpack.optimize.UglifyJsPlugin({
         minimize: true,
         comments: false,
         sourceMap: false,
         mangle:true,
         compress: {
         sequences: true,
         properties: true,
         dead_code: true,
         drop_debugger: true,
         unsafe: false,
         conditionals: true,
         comparisons: true,
         evaluate: true,
         booleans: true,
         loops: true,
         unused: true,
         hoist_funs: true,
         hoist_vars: false,
         if_return: true,
         join_vars: true,
         cascade: true,
         side_effects: true,
         warnings: true
         }
         }),*/
        /*new CleanWebpackPlugin(['../../dtDist'], {
         root: process.cwd(),
         verbose: true
         }),*/
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        })
    ]

};
