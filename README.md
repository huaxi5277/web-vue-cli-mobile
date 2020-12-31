# vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### knowledge 
移动端适配知识点

像素 一个小方块 它具有特定的位置和颜色

PPI 每英寸包含的像素数 

DPI 每英寸包含点数

设备独立像素
界面上显示元素的大小是多少 px

设备像素比

物理像素/设备独立像素


视口 

布局视口    document.documentElement.clientWidth/clientHeight    网页的实际大小


视觉视口   window.innerWidth/innerHeight   用户通过屏幕真实看到的区域


为了适应各个手机终端 采用rem 作为单位 
视觉视口 = 布局视口 = 理想视口   获取更好的效果 

页面缩放系数 = css像素 / 设备独立像素 
页面缩放系数 = 理想视口 / 视觉视口 


width=device-width 布局视口 = 理想视口

initial-scale      视觉视口 = 理想视口 


       100px 
1rem * font-size = 100px


给定设计图 750px （设备独立像素 ）  

font-size = 100px 


所以 7.5 就是一个标准  在项目中 

750px  / 100 = 7.5rem  
375   /  (?50px)   = 7.5rem