const webpack = require('webpack');

module.exports = {
  watchOptions: {
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/, 
        exclude: /node_modules/,
        use:{
          loader: 'css-loader'           
        }             
      }  
    ] 
  },
  devServer: {
      hot: true
  } ,
    plugins: [    
     new webpack.HotModuleReplacementPlugin()
    ]
};
