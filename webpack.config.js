var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname,
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/assets',
        publicPath: "/assets/",
        filename: './[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "es2015", "stage-2"]
                    }
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap!resolve-url-loader!postcss-loader!sass-loader?sourceMap'
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg|otf|ttf|eot|woff|woff2)$/,
                include: /\/node_modules\//,
                use: 'file-loader?name=[1].[ext]&regExp=node_modules/(.*)'
            },
            {
                test: /\.(svg|otf|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                use: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                exclude: /\/node_modules\//,
                use: 'url-loader?name=img/[name].[ext]&limit=10000'
            },
            {
                test: /\.handlebars$/,
                use: "handlebars-loader?helperDirs[]=${clientHelpersPath}"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".scss"],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new webpack.ProvidePlugin({
            "React": "react",
            'ReactDOM': 'react-dom'
        }),
        new webpack.optimize.UglifyJsPlugin(),
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