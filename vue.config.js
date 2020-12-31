const path = require('path')
module.exports = {
    css: {     // 配置sass
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                prependData: `@import "./src/assets/css/variables.scss";`
            }
        }
    },
  devServer: {     // 设置代理跨域
    proxy: {
      "/api": {
        //代理api
        target: "http://localhost:3000/", //服务器api地址
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          //重写路径
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...

      // 只修改开发环境配置，打包会出现找不到定义的别名的错误
      // return {
      //     resolve: {
      //         alias: {
      //             '@c': path.resolve(__dirname, './src/components/'),
      //             '@css': path.resolve(__dirname, './src/assets/css'),
      //             '@img': path.resolve(__dirname, './src/assets/img'),
      //             '@js': path.resolve(__dirname, './src/assets/js'),
      //         }
      //     }
      // }
    }

    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@css': path.resolve(__dirname, './src/assets/css'),
                '@img': path.resolve(__dirname, './src/assets/img'),
                '@js': path.resolve(__dirname, './src/assets/js'),
            }
        }
    }
  }
};