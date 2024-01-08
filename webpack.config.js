const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'scripts', 'index.ts'),
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
            new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new EslingPlugin({ extensions: 'ts' }) 
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i, loader: "ts-loader"
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/styles/index.scss'
                            ]
                        }
                    }
                ],
            }
        ]
    },
}