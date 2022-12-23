// import a package
const path = require('path');
// Import html plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
// Import html plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// All configuration information in webpack should be written in module.exports
module.exports = {

    // Specify the entry file
    entry: "./src/index.ts",

    // Specify the directory where the package file is located
    output: {
        // Specify the directory of the package file
        path: path.resolve(__dirname, 'dist'),
        //  Files
        filename: "bundle.js",

        // Tell webpack not to use arrowFunction
        environment: {
            arrowFunction: false
        }
    },

    // Specify the module to be used when webpack is packaged
    module: {
        // Specifies the rules to load
        rules: [{
                // Specifies the rules to load
                test: /\.ts$/,
                // Use loader
                use: [
                    // Configue babel
                    {
                        // specified loader
                        loader: "babel-loader",
                        // Set up babel
                        options: {
                            // Set up a predefined environment
                            presets: [
                                [
                                    // Plugins for specific environments
                                    "@babel/preset-env",
                                    // configuration information
                                    {
                                        // Target browsers to be compatible
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        // Specify the version of corejs
                                        "corejs": "3",
                                        // The way to use corejs "usage" means loading on demand
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // files to exclude
                exclude: /node-modules/
            },
            //Set the processing of less files
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //Import postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // Configure the webpack plugin
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "This is a custom title"
            template: "./src/index.html"
        }),
    ],

    // Used to set the reference module
    resolve: {
        extensions: ['.ts', '.js']
    }

};