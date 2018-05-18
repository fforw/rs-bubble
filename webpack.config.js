const path = require("path");
const webpack = require("webpack");

const PRODUCTION = (process.env.NODE_ENV === "production");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: "./src/main.js"
    },
    
    devtool: "sourcemap",

    output: {
        path: path.join(__dirname, "dist/"),
        filename: "bundle-[name].js",
        chunkFilename: "bundle-[id].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "__PROD": PRODUCTION,
            "__DEV": !PRODUCTION,
            "process.env.NODE_ENV": JSON.stringify(PRODUCTION ? "production" : "development")
        }),
    ],

    module: {
        rules: [                                                                                                                                   
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
