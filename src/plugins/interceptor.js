import Vue from 'vue'
import axios from 'axios'
import {Indicator} from 'mint-ui'

Vue.prototype.$axios = axios



function  startLoading(params) {
    Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });
}

function  endLoading(params) {
    Indicator.close();
}

//showFullScreenLoading() tryHideFullScreenLoading() 用于将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1   needLoadingRequestCount为 0 时，结束 loading

let needLoadingRequestCount = 0;
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}


// 请求拦截器 
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.common['Authorization'] = 'Bearer ' + token
        }
        showFullScreenLoading()
        return config
    },
    error =>{
      console.log(error.response)
        return Promise.reject(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
    tryHideFullScreenLoading()
    return response
    },
    error =>{
      if(error.response.status == 401) {
        tryHideFullScreenLoading()
          location.href = '#/login'
      }
        return Promise.reject(error)
    }
)

export default axios