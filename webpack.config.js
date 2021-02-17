'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	// watch: true,
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000
		// historyApiFallback: true,
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	}
};
