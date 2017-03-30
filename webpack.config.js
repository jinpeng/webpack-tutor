var path = require('path');
var webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
	? ['./src/index.js']
	: [
		'./src/index.js',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080'
	];

var plugins = PRODUCTION
	? []
	: [
		new webpack.HotModuleReplacementPlugin()
	];

module.exports = {
	devtool: 'source-map',
	entry: entry,
	plugins: plugins,
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: '/node_modules/'
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['url-loader?limit=20000&name=/images/[hash:12].[ext]'],
				exclude: '/node_modules/'
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				exclude: '/node_modules/',
				enforce: "pre"
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/dist',
		filename: 'bundle.js'
	}
};