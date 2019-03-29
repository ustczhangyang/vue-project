import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router=new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeContainer},
		{path:'/member',component:MemberContainer},
		{path:'/search',component:SearchContainer},
		{path:'/shopcar',component:ShopcarContainer},
		{path:'/home/newslist',component:NewsList},
		{path:'/home/newsinfo1',component:NewsInfo},
		{path:'/home/newsinfo2',component:NewsInfo},
		{path:'/home/newsinfo3',component:NewsInfo}
	],
	linkActiveClass:'mui-active'//覆盖原来的activeClass类
})

export default router
