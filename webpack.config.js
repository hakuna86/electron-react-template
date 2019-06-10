const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: './',
		filename: 'bundle.js'
	},
    module : {
        rules:[
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            },
            {
                test : /\.html$/,
                use : [
                    {
                        loader : "html-loader",
                        options : { minimize : true }
                    }
                ]
            },
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader, " css-loader"]
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
				    'file-loader'
		        ]
			}
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename : "[name].css",
            chunkFilename : "[id].css"
        })
    ]
}