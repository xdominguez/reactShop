const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');
const { pathToFileURL } = require('url');

module.exports = {
    //inicio del proyecto
    entry:'./src/index.js',
    //salida del proyecto
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    //modo es obligatorio para evitar errores al ejecutar
    mode: 'development',
    //extensiones
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            '@components':path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname,'src/containers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname,'src/assets/icons'),
            '@logos': path.resolve(__dirname, 'src/assets/logos')
        }
    },
    module:{
        rules: [
            {
                //elementos con los que trabaja el proyecto
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type:'asset'
            }
        ]
    },
    plugins:[
new htmlWebPackPlugin({
    template:'./public/index.html',
    filename: './index.html'
}),
new miniCss({
    filename:'[name].css'
})
    ],
    devServer:{
        historyApiFallback: true,
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:3005,
    }
   
}
