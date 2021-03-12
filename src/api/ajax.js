import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const Ajax = new axios.create({
        baseURL: '/api',
        timeout: 5000,
})
//请求拦截器
Ajax.interceptors.request.use(config => {
    NProgress.start()
   return config
})

//响应拦截器
Ajax.interceptors.response.use((response)=> {
    NProgress.done()
    // alert('请求成功')
    return response.data;
  },(error)=> {
    NProgress.done()
    alert('请求失败',error.message)
    return new Promise(()=>{})//中断promise链
})
export default Ajax