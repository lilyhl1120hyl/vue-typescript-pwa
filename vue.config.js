const path= require("path");
const fs= require("fs");
const PrerenderSPAPlugin= require("prerender-spa-plugin"); // 预渲染
const PurgecssPlugin= require("purgecss-webpack-plugin"); // 删除不使用的css
const glob= require("glob-all"); // 全局引用

module.exports = {
 lintOnSave:false,
 pwa:{
  name:"vue-pwa",
  themeColor:"#4DBA87",
  msTileColor:"#000000",
  appleMobileWebAppCapable:"yes",
  appleMobileWebAppStatusBarStyle:"black",
  workboxPluginMode:"InjectManifest", //injectManifest: 将资源注入到你的项目precache中。
  workboxOptions:{
    swSrc:"src/sw.js",
  }

 },
 devServer: {  // 好像没有生效
  proxy: {
    '/api': {
      target: 'http://xiaomuzhu.top/api/',
      changeOrigin: true,
      pathRewrite: { }
    }
  }
},
 configureWebpack(config){
  if(process.env.NODE_ENV === "production"){
   return{
    plugins:[
     new PrerenderSPAPlugin({
      staticDir:path.join(__dirname,"dist"), // 代码打包目录
      routes:["/","/habit","/setting"], // 要预渲染的页面路由
     }),
    ]
   }
  }
 },
chainWebpack: config=>{
 config.optimization
  .clear('splitChunks')
  .splitChunks({
   cacheGroups:{
    vue:{
     name:'vue',
     test:/[\\/]node_modules[\\/]vue[\\/]/,
     priority:0,
     chunks:'initial'
    },
    vendors:{
     name:'chunk-vendors',
     test:/[\\/]node_modules[\\/]/,
     priority:-10,
     chunks:'initial'
    },
    common:{
     name:'chunk-common',
     minChunks:2,
     priority:-20,
     chunks:'initial',
     reuseExistingChunk:true
    }
   }
  })
}


}