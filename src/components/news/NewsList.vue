d<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo1">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/20190329150004684.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwOTA5MDM1,size_16,color_FFFFFF,t_70">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo2">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/20190329150004684.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwOTA5MDM1,size_16,color_FFFFFF,t_70">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo3">
						<img class="mui-media-object mui-pull-left" src="https://img-blog.csdnimg.cn/20190329150004684.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwOTA5MDM1,size_16,color_FFFFFF,t_70">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</router-link>
				</li>

			</ul>
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
	data(){
		return{
			newslist:[]
		}
	},
	created(){
		this.getNewsList();
	},
	methods:{
		getNewsList(){
			this.$http.get("http://v.juhe.cn/toutiao/index").then(result=>{
				if(result.body.stat===1){
					this.newslist==result.body.message;
					cosole.log(this.newslist);
				}else{
					Toast('新闻api获取失败');
				}
			},result=>{Toast('新闻api获取失败');});
		}
	}
}
</script>

<style>
</style>
