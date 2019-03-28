/* js入口文件*/
import app from './App.vue'
import Vue from 'vue'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/mui/css/mui.min.css'

new Vue({
	el:'#app',
	render:c=>c(app),
	components:{
		
	}
})