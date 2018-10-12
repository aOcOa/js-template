const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	mode: "production",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.pug",
			inject: false
		}),
		new OptimizeCssAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: "bundle.css"
		})
	],
	entry: ["babel-polyfill", path.resolve(__dirname, "src/script.js")],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: "html-loader"
					},
					{
						loader: "pug-html-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "images/[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader" //  interprets @import and url() like import/require() and will resolve them.
					},
					{
						loader: "postcss-loader", // postcss loader so we can use autoprefixer
						options: {
							config: {
								path: path.resolve(__dirname, "./postcss.config.js")
							}
						}
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			}
		]
	}
};
