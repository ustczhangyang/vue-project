<template>
	<div>
		<mt-swipe :show-indicators="false">
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
				<img src="../../lib/images/menu1.png"/>
				<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../lib/images/menu2.png" />
				<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<img src="../../lib/images/menu3.png" />
				<div class="mui-media-body">商品购买</div></a></li>
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
	//import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				//pictureList:[]//保存轮播图的数组
			}
		},
		created(){
			//this.getPicture();
		},
		methods:{
			/* getPicture(){
				this.$http.get("ftp://localhost/pictures").then(result=>{
					if(result.body.status===0){
						this.pictureList==result.body.message;
						cosole.log(this.pictureList);
					}else{
						Toast('轮播图加载失败')
					}
				})
				
			} */
		}	
	}
</script>

<style lang="less" scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
		background:url(../../lib/images/1.jpg);
	}
	.mint-swipe-item:nth-child(2){
		background:url(../../lib/images/2.jpg);
	}
	.mint-swipe-item:nth-child(3){
		background:url(../../lib/images/3.jpg);
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
