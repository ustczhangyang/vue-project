//webpack基于Node
const path=require('path');
const webpack=require('webpack');
//导入在内存中生成HTML页面的插件
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
 
 
//通过node中的模块操作，向外暴露一个配置对象
module.exports={	
	entry:path.join( __dirname,'./src/main.js'),//入口，表示要使用webpack打包哪个文件
	output:{
		path:path.join( __dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer: {//配置dev-server命令参数
		open:true,
		contentBase:'src',//本地服务器所加载的页面所在的目录
		port:3000,
		hot:true//热启动第一步
		/* historyApiFallback: true,//不跳转
		inline: true//实时刷新 */
	  },
	  plugins:[//配置插件的节点
		new webpack.HotModuleReplacementPlugin(),//热启动第二步 
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			//指定页面模板，将来会根据指定的页面路径，去生成内存中的页面
			filename:'index.html',
			//生成的内存中的页面的名称
		}),
		new VueLoaderPlugin()
	  ],
	  module:{//配置所有的第三方模块加载器
		rules:[//匹配规则
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=2302'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			{test: /\.vue$/,loader: 'vue-loader'}
		]
		  
	  }
        


}
