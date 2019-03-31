<template>
	<div>
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo" v-for="item in newslist" :key="item.link">
						<div class="mui-media-body">
							<p class='mui-ellipsis'>{{item.title}}</p>
						</div>
					</router-link>
				</li>
		</ul>
	</div>
</template>

<script>
import $ from 'jquery'
import {Toast} from 'mint-ui'
export default{
	data(){
		return{
			newslist:[]
		}
	},
	created(){
		var _that=this;
		$.ajax({
			type:"GET",
			url:"https://api.asilu.com/rss/", //访问的链接
			dataType:"jsonp",  //数据格式设置为jsonp
			jsonp:"callback",  //Jquery生成验证参数的名称
			success:function(data){  //成功的回调函数
				_that.newslist=data.list;
			},
			error: function (e) {
				Toast('轮播图加载失败')
			}
		});
	},
	methods:{
	}	
}
</script>

<style>
</style>
