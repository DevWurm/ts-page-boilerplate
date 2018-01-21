const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.less', '.html', '.hbs', '.scss']
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader'],
                include: resolve(__dirname, 'src')
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
    ],
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
    }
};