const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	// メインとなるJavaScriptファイル（エントリーポイント）
	entry: "./src/app.tsx",
	// ファイルの出力設定
	output: {
		//  出力ファイルのディレクトリ名
		path: `${__dirname}/dist`,
		// 出力ファイル名
		filename: "app.js"
	},
	module: {
		rules: [{
			// 拡張子 .ts もしくは .tsx の場合
			test: /\.tsx?$/,
			// TypeScript をコンパイルする
			use: "ts-loader"
		}]
	},
	// import 文で .ts や .tsx ファイルを解決するため
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	plugins: [
		new webpack.ProvidePlugin({
			Promise: 'es6-promise'
		})
		// , new BundleAnalyzerPlugin()
	]
};
