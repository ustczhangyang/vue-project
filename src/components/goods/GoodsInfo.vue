<template>
   <div class="goodsinfo-container">
					<div class="mui-card-content-inner">
						<img src="../../lib/images/phone.jpg" />
					</div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
				<div class="mui-card-header">小米 note3</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：
              <span style="margin-right: 10px;"><del>￥999</del></span>
              销售价：
              <span style="font-size: 16px; color: red; font-weight: bold;">￥899</span>
            </p>
            <p>
              购买数量：
            </p>
            <div>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" >加入购物车</mt-button>
            </div>
					</div>
				</div>
			</div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：1</p>
						<p>库存情况：60件</p>
						<p>上架时间：2019.4.1</p>
					</div>
				</div>
				<div class="mui-card-footer btnarea">
          <!-- <router-link :to="'/home/goodsdesc/' + goodsinfo.id">
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          </router-link> -->

          <!-- 使用编程式导航，来实现路由页面的跳转 -->
          <!-- 编程式导航：就是使用JS的代码的方式，来实现路由的跳转 -->
          <!-- 元素导航：使用 router-link 元素实现的导航 -->
          <mt-button type="primary" size="large" plain >图文介绍</mt-button>
          <mt-button type="danger" size="large" plain >商品评论</mt-button>
        </div>
			</div>

  </div>
</template>

<script>

</script>

<style lang="less" scoped>

</style>


// 分析小球动画有Bug的原因：
// 原因：就是因为 小球 入场动画的终点坐标，已经固定写死了！
// 解决问题的突破点：把小球 translate 时候的  横纵坐标，动态写活即可；
// 如何实现： 如何把 横纵坐标 动态获取呢？
//  + 先动态获取小球的横纵坐标
//  + 再动态获取徽标的横纵坐标
//  + 让 徽标的横纵坐标 - 小球的横纵坐标 等到的结果，就是小球要动态位移的距离；