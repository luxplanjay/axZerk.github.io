var webpack = require('webpack'),
    path = require('path'),
    SRC_DIR = path.resolve(__dirname, 'src'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'app/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                include: SRC_DIR,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!resolve-url-loader!postcss-loader!sass-loader?sourceMap'
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|otf|ttf|eot|woff|woff2)$/,
                include: /\/node_modules\//,
                loader: 'file-loader?name=[1].[ext]&regExp=node_modules/(.*)'
            },
            {
                test: /\.(svg|otf|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                exclude: /\/node_modules\//,
                loader: 'file-loader?name=[path][name].[ext]'
                // loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader?helperDirs[]=${clientHelpersPath}"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new webpack.ProvidePlugin({
            "React": "react",
            'ReactDOM': 'react-dom'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({filename: 'css/style.css', allChunks: true}),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        inline: true,
        port: 3000
    },
    watchOptions: {
        aggregateTimeout: 100
    }
};

module.exports = config;