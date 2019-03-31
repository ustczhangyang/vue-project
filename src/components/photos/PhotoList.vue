<template>
	<div>
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							体育
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
		</div>
			<ul>
				<li v-for="item in photolist" :key="item.url">
					<img :src="item.url" alt="" />
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
			photolist:[]
		}
	},
	created(){
		var _that=this;
		$.ajax({
			type:"GET",
			url:"https://api.asilu.com/bg/", //访问的链接
			dataType:"jsonp",  //数据格式设置为jsonp
			jsonp:"callback",  //Jquery生成验证参数的名称
			success:function(data){  //成功的回调函数
				_that.photolist=data.images;
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

<style scoped>
	ul{
		list-style: none;
	}
	li{
		text-align: center;
		padding: 0;
		margin: 0;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.mui-slider{
	}
</style>
