var path = require('path');
var webpack = require('webpack')
module.exports = {
    //入口文件
    entry: './app/index.js',
    //出口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/'
    },
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 1717
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }]
    }
}