const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = (env) => {
    const isDev = !(env && env.prod);

    let config = {
        entry: {
            app: './src/main.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },
        devServer: {
             contentBase: './dist'
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ["es2015"]
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ExtractTextPlugin.extract([
                        isDev ? 'css-loader' : 'css-loader?minimize',
                        'postcss-loader'
                    ])
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('bundle.css')
        ]
    }

    if (isDev) {
    }
    else {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin())
        config.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }))
    }

    return config;
}