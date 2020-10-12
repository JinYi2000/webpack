const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    entry:{
       app: './src/index.js',
       print:'./src/print.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')//因为mac、windows下目录不一样   绝对路径
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
};
