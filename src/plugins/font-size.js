var designWidth = 750    // 设计稿高度
var remPx = 100          // 默认100 便于计算 
             
var scale = window.innerWidth / designWidth    // 当前屏幕的宽度与设计稿的比例   window.innerWidth 视觉视口 

document.addEventListener('DOMContentLoaded' , ()=>{
    const html = document.querySelector('html');



    html.style.fontSize =  scale *  remPx   + 'px'
})


// designWidth           实际的宽度
//------------     =     -------------
// font-size = 100       font-size 

//                  window.innerWidth *  font-size = 100 
//  font-size  =    ---------------------------            =    scale *  font-size = 100 
//                       designWidth
