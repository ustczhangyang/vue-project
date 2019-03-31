#这是一个vue开发的网站
## 首页的九宫格布局
+ 使用mui中的 grid-default.html
+ 添加图标并设置宽高
+ 将背景色设置为白色
+ 去掉了九宫格的边框
+ 修改了字体大小为 13px

## 实现路由切换的动画效果
1. 分析如何实现路由切换动效：
 + 要使用 vue 提供的 transition 元素把 `<router-view></router-view>` 包裹起来
 + 使用自定义的动画类名实现动画效果
2. 当实现基本的动画效果之后，需要解决一些问题：
 + 设置即将离开的页面的运动方向为 `-100%`
 + 为了防止 页面跳动的问题，需要为 离开的 页面，设置绝对定位；
 + 当有组件切换动效的时候，一瞬间，页面的宽度会变成 正常宽度的 2 倍，此时，需要隐藏超出屏幕宽度的区域
## 实现图片分享列表中顶部的滑动区域
 1. 借助于 MUI 的 `tab-top-webview-main.html` 控件来实现
 2. 当拿到 UI 代码片段之后，需要把 `mui-fullscreen` 去掉
 3. 当页面布局没有大问题之后，发现无法实现滑动效果，此时，需要使用官方推荐的形式，去初始化一下
## 当在项目中引入了MUI的JS文件报错的问题：
> 报错信息：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
1. 分析问题的原因：
 + webpack 打包出来的  bundle.js 中，默认启用了严格模式
 + 在项目中，import 导入的 mui.js 中，使用了 callee caller 这些特性， 但是这些特性在严格模式中不支持，会报错；
 + 经过分析：发现，关闭webpack的严格模式，更容易一些，因为不再需要修改mui.js的源代码了；
 + 如何关闭webpack的严格模式呢？使用一个webpack的插件：`https://github.com/genify/babel-plugin-transform-remove-strict-mode`


## 实现商品列表的经典两列布局
  1. 外层有一个 `goods-list`， 里面的每个商品都是`goods-item`;
  2. 给外层的`goods-list`设置 `display:flex;`布局，同时为了让一行只显示两个商品，我们为每个`goods-item`添加了宽度为`49%`;同时，设置了`goods-list`的`flex-wrap: wrap`;
  3. 通过 为父盒子添加`padding: 7px;` 来挤出左右的边距；
  4. 为了保留出中间的间隙，为父盒子`goods-list`添加了`justify-content: space-between;`