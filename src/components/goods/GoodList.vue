<template>
	<div class="goods-list">
		<router-link to="/home/goodsinfo" class="goods-item">
			<img src="../../lib/images/phone.jpg" />
			<h1 class="title">小米 note3</h1>
			<div>
				<p class="price">
					<span class="now">899</span>
					<span class="old">999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link to="/home/goodsinfo" class="goods-item">
			<img src="../../lib/images/phone.jpg" />
			<h1 class="title">小米 note3</h1>
			<div class="info">
				<p class="price">
					<span class="now">899</span>
					<span class="old">999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link to="/home/goodsinfo" class="goods-item">
			<img src="../../lib/images/phone.jpg" />
			<h1 class="title">小米 note3</h1>
			<div>
				<p class="price">
					<span class="now">899</span>
					<span class="old">999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link to="/home/goodsinfo" class="goods-item">
			<img src="../../lib/images/phone.jpg" />
			<h1 class="title">小米 note3</h1>
			<div>
				<p class="price">
					<span class="now">899</span>
					<span class="old">999</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	
	export default{
		created(){
			Toast("没有接口，静态页面");
		}
	}
</script>

<style lang="less" scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding: 6px;
		justify-content: space-between;
	}
	.goods-item{
		width: 49%;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 4px 0;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 293;
	}
	
	.img{
		width: 98%;
		display: inline-block;
	}
	.title{
		font-size: 14px;
	} 
	.info{
		background-color: #eee;
	}
	.info p{
			margin: 0;
			padding: 5px;
	}
	.now{
		color: red;
		font-weight: bold;
		font-size: 16px;
	}
	.old{
		text-decoration:line-through;
	}
	.sell{
		display: flex;
		justify-content:space-between;
	}
</style>
