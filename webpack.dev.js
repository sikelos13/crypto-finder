const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
    devtool: 'eval-source-map', //'source-map',
    mode: 'development',
    target: 'web',
    devServer: {
        publicPath: '/',
        contentBase: path.resolve('dist'),
        inline: true,
        hot: true,
        hotOnly: true,
        liveReload: false,
        compress: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        watchOptions: {
            poll: true 
          },
        port: 80,
        host: '0.0.0.0',
        historyApiFallback: true,
    }
});
