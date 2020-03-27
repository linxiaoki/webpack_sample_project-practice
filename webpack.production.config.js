//webpack.production.config.js
const webpack =require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/docs",
        filename: "bundle-[hash].js"
    },
    devtool: 'none',
    devServer: {
        contentBase: './docs',
        historyApiFallback: true,
        inline: true,
        port: 8235,
        hot: true
    },
    module:{
        rules:[
            {
                test: /(\.js|\.jsx)$/,
                use: {
                    loader: "babel-loader" //options 在 .babelrc 文件
                },
                exclude: /node-modules/
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true
                        }    
                    },{
                        loader: "postcss-loader"
                    }]
                }),
                /*[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options:{
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]' //指定css的类名格式
                            }
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ],*/
                exclude:/(node_modules|\.vscode)/
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权非所有，翻版不究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(), //为组件分配ID？
        new ExtractTextPlugin("style.css"),  //分离JS和CSS文件
        new CleanWebpackPlugin()
    ],
    // 没啥用啊，都是 136kb  >> config.minimizer?
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
}

