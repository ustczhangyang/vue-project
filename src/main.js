/* js入口文件*/
import app from './App.vue'
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//Vue.http.options.emulateHTTP = true;
//请求根路径
//Vue.http.options.root=''
//头部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//轮播图
import { Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
	
//图标	
import './lib/mui/css/mui.min.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

new Vue({
	el:'#app',
	render:c=>c(app),
	router,
	components:{
		
	}
})