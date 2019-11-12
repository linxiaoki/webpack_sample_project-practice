//webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: "eval-source-mpa",
    devServer: {
        contentBase: './public',
        historyApiFallback: true,  //所有的跳转将指向 index.html，对于开发单页面应用时非常有用
        inline: true,
        port: 8235
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
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
                ],
                exclude:/(node_modules|\.vscode)/
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"  //可以传参数
        }),
        new webpack.HotModuleReplacementPlugin() //webpack 自带的热加载插件
    ]
}
