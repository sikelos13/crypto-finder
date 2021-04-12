const fs = require('fs');
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
        /*https: {
            key: fs.readFileSync('./certs/server.key'),
            cert: fs.readFileSync('./certs/server.crt'),
            cacert: fs.readFileSync('./certs/ca.crt')
        },*/
        compress: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        port: 443,
        host: '0.0.0.0',
        historyApiFallback: true,
        /*
        setup(app) {
            app.post('*', (req, res) => {
                res.redirect(req.originalUrl);
            });
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },*/
        //public: 'lala.com'
    },
    plugins: [
    ]
});
