const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const package = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

// const gitRevisionPlugin = new GitRevisionPlugin({
//     versionCommand: 'describe --always --tags'
// });

const build = (() => {
    const timestamp = new Date().getTime();
    return {
        name: package.name,
        version: package.version,
        timestamp: timestamp,
        author: package.author,
        //git_version: gitRevisionPlugin.version(),
        //git_hash: gitRevisionPlugin.commithash()
    };
})();

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config().parsed;
const envKeys = fileEnv && Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
}, {});

const entry = {
    app: [
        './index.tsx'
    ]
};

const rules = [
    {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
        }
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },
    {
        test: /\.svgi$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                dimensions: false,
                svgoConfig: {
                    plugins: {
                        removeViewBox: false
                    }
                }
            }
        }]
    },
    {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|xml)$/,
        loader: 'file-loader',
        options: {
            outputPath: 'assets',
        }
    }
];

const output = {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[id].[contenthash].chunk.js'
};

const WEBPACK_PLUGINS = [
    //gitRevisionPlugin,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({banner: `${build.name} v.${build.version} (${build.timestamp}) © ${build.author}`}),
    new webpack.DefinePlugin({
        'process.env.BUILD': JSON.stringify(build)
    }),
    new webpack.DefinePlugin(envKeys),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer(),
            ],
            htmlLoader: {
                minimize: true
            }
        }
    })
];

module.exports = {
    context: path.resolve('./src'),
    entry,
    output,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.html', '.svgi'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        fallback: {
            //"path": require.resolve("path-browserify"),
            //"vm": require.resolve("vm-browserify"),
            //"https": require.resolve("https-browserify"), // needed by json-schema-ref-parser
            //"http": require.resolve("http-browserify"), // needed by json-schema-ref-parser
            // "stream": require.resolve("stream-browserify"),
            // "crypto": require.resolve("crypto-browserify"),
        },
        alias: {
            buffer: 'buffer',
            util: 'util',
            crypto: 'crypto-browserify',
            process: 'process/browser.js',
            'react-dom': '@hot-loader/react-dom',
            '@images': path.resolve(__dirname, 'public/assets/images/')
        }
    },
    module: {
        rules,
    },
    optimization: {
        moduleIds: 'named',
        splitChunks: {
            chunks: 'async',
            minSize: 100000,
            maxSize: 2000000,
            minChunks: 1,
            maxAsyncRequests: 60,
            maxInitialRequests: 10,
            automaticNameDelimiter: '~',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        ...WEBPACK_PLUGINS,
        //new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            title: 'crypto-finder',
            filename: 'index.html',
            template: '../public/index.html',
            chunks: ['app', 'vendor', 'polyfills']
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: '../public/assets',
                to: 'assets',
            },
                {
                    from: '../public/favicon.ico',
                    to: 'public',
                },
                {
                    from: '../public/manifest.json',
                    to: 'public',
                }]
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
            Buffer: ['buffer', 'Buffer'],
        })
    ]
};