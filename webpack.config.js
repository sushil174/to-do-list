/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// import path from 'path'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'To-do',
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
