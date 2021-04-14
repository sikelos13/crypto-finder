const webpack = require('webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const TerserPlugin = require("terser-webpack-plugin");
// const WorkboxPlugin = require('workbox-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = merge(commonConfig, {
    //devtool: 'source-map',
    mode: 'production',
    externals: {
        //'react': 'React',
        //'react-dom': 'ReactDOM',
        'google-libphonenumber': 'google-libphonenumber'
    },

    performance: {
        hints: "warning"
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },

    // plugins: [
    //     //new BundleAnalyzerPlugin({ analyzerMode: 'static' })
    //     new WorkboxPlugin.GenerateSW({
    //         // these options encourage the ServiceWorkers to get in there fast
    //         // and not allow any straggling "old" SWs to hang around
    //         clientsClaim: true,
    //         skipWaiting: true,
    //     }),
    // ]
});
