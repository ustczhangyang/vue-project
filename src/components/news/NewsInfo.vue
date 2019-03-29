<template>
	<div>
		<div style="height: 200px;"><h1>新闻详情</h1></div>
		
		<hr>
		<comment-box @func="loadComments"></comment-box>
		<ul class="list-group">
			<li class="list-group-item" v-for="item in list" :key="item.id">
				<span class="badge">评论人-{{item.user}} :</span>
				{{item.content}}
			</li>
		</ul>
	</div>
</template>

<script>
	import Comment from	'../subcomponents/Comment.vue'
	export default{
		data(){
			return{
				list:[
					{id:Date.now(),user:'James',content:'詹姆斯'},
					{id:Date.now(),user:'Harden',content:'哈登'},
					{id:Date.now(),user:'Kury',content:'库里'}
				]
			}
		},
		components:{
			'comment-box':Comment
		},
		methods:{
			loadComments(){
				var list=JSON.parse(localStorage.getItem('cmts')||'[]');
				this.list=list;
			}
		},
		created(){
			this.loadComments();
		}
	};
</script>

<style>
</style>
