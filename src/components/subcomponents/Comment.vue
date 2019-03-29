<template>
	<div>
		<h3>发表评论</h3>
		<label>评论人：</label>
		<input type="text" class="form-control" v-model="user"/>
		<textarea placeholder="请输入评论" v-model="content"></textarea>
		<mt-button type="primary" size="large" @click="postComment">评论</mt-button>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user:'',
				content:''
				
			}
		},
		methods:{
			postComment(){
				var comment={id:Date.now(),user:this.user,content:this.content};
				//用localStorage.getItem('cmts')||'[]'获取目前所有评论
				//字符串-->数组(JSON.parse)||数组-->字符串(JSON.stringify)
				var list=JSON.parse(localStorage.getItem('cmts')||'[]');
				list.unshift(comment);
				localStorage.setItem('cmts',JSON.stringify(list));
				this.user=this.content='';
				this.$emit('func');
			}
		}
	}
</script>

<style scoped>
</style>

