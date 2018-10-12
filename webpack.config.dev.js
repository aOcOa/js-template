const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: ["babel-polyfill", path.resolve(__dirname, "src/script.js")],
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./public",
		port: 7080,
		watchContentBase: true
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.pug",
			inject: false
		})
	],
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
				test: /\.(css|scss)$/,
				use: [
					{
						loader: "style-loader" // Adds CSS to the DOM by injecting a <style> tag
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
