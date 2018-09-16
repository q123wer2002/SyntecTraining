const path = require('path');
const webpack = require('webpack');

//for minify file
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode : "none",
	devtool: 'cheap-eval-source-map',
	entry: {
		"Main" : "../WebData/JsFile/Internal/Main/SystemInitial.js"
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*' //for CORS
		}
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, '../WebData/BundleResult/'),
		publicPath: "http://localhost:8080/"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{  //this will add jquery to window object
				test: require.resolve('./node_modules/jquery/dist/jquery.js'),
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				}, {
					loader: 'expose-loader',
					options: '$'
				}]
			},
			{   // use plugin to compose all css file
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, './node_modules')],
		alias: {
			'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js'),
			'jquery': path.resolve(__dirname, './node_modules/jquery/dist/jquery.js'),
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.ProvidePlugin({// only work in webpack module
			$: "jquery",
			jQuery: "jquery",
			'window.jQuery': 'jquery',
			'root.jQuery': 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),
		new VueLoaderPlugin(),
		new UglifyJsPlugin(),
	],
};
