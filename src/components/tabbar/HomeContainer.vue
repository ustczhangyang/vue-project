<template>
	<div>
		<mt-swipe>
		  <mt-swipe-item auto:300 v-for="item in pictureList" :key="item.url">
			  <img :src="item.url" alt=""/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
				<img src="../../lib/images/menu1.png"/>
				<div class="mui-media-body">程序猿内参</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<img src="../../lib/images/menu2.png" />
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
					<img src="../../lib/images/menu3.png" />
					<div class="mui-media-body">商品购买</div>
					</a>
				</router-link>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../lib/images/menu4.png" />
				<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../lib/images/menu5.png" />
				<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../lib/images/menu6.png" />
				<div class="mui-media-body">联系我们</div></a></li>
		</ul> 
	</div>
</template>

<script>
	import $ from 'jquery'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				pictureList:[],//保存轮播图的数组
			};
		},
		created(){
			var _that=this;
			$.ajax({
				type:"GET",
				url:"https://api.asilu.com/bg/", //访问的链接
				dataType:"jsonp",  //数据格式设置为jsonp
				jsonp:"callback",  //Jquery生成验证参数的名称
				success:function(data){  //成功的回调函数
					_that.pictureList=data.images.slice(0,6);
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

<style lang="less" scoped>
	.mint-swipe{
		height: 200px;
		.mint-swipe-item{
			img{
				height: 100%;
				width: 100%;
			}
			background-color: blue;
		}
	}
	
	
	.mui-grid-view.mui-grid-9{
		background-color: white;
		border:none;
		img{
			height: 60px;
			width: 60px;
		}
		.mui-media-body{
			font-size: 13px;
		}
	}
	.mui-grid-view.mui-grid-9.mui-table-view-cell{
		border:none;
	}
</style>
