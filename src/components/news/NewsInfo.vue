<template>
	<div>
		<div class="newsinfo-container">
			<h3 class="title">{{newslist.title}}</h3>
			<p class="subtitle">
				<span>作者：{{newslist.author}}</span>
			</p>
			<div class="content">{{newslist.description}}</div>
		</div>
		
		<hr>
		<comment-box @func="loadComments"></comment-box>
		<ul class="list-group">
			<li class="list-group-item" v-for="item in info" :key="item.id">
				<span class="badge">{{item.user}} :</span>
				{{item.content}}
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from 'jquery'
	import {Toast} from 'mint-ui'
	import Comment from	'../subcomponents/Comment.vue'
	export default{
		data(){
			return{
				info:[
				],
				newslist:[]
			}
		},
		components:{
			'comment-box':Comment
		},
		methods:{
			loadComments(){
				var info=JSON.parse(localStorage.getItem('cmts')||'[]');
				this.info=info;
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
					_that.newslist=data.list[0];
				},
				error: function (e) {
					Toast('内容加载失败')
				}
			});
			this.loadComments();
		}
	};
</script>

<style lang="less" scoped>
	.newsinfo-container{
		height: 100%;
		.title{
			font-size: 16px;
			text-align:center;
			margin: 15px 0;
			color: red;
		}
		.subtitle{
			display: flex;
			justify-content: flex-end;
		}
	}
	li{
		list-style: none;
	}
</style>
