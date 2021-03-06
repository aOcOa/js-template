const path = require("path");

var nodeExternals = require("webpack-node-externals");

module.exports = {
	mode: "development",
	output: {
		// use absolute paths in sourcemaps (important for debugging via IDE)
		devtoolModuleFilenameTemplate: "[absolute-resource-path]",
		devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
	},
	target: "node", // webpack should compile node compatible code
	externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
	devtool: "#inline-cheap-module-source-map",
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
				test: /\.scss$/,
				use: [
					{
						loader: "null-loader" // Adds CSS to the DOM by injecting a <style> tag
					}
				]
			}
		]
	}
};