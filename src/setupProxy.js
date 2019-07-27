const proxy = require("http-proxy-middleware");
//跨域配置
module.exports = (app)=>{
    app.use(proxy("/api",{
        target:"http://www.baidu.com",
        changeOrigin:true
    }))
}