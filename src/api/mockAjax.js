/*
 * @Author: your name
 * @Date: 2021-03-16 17:06:15
 * @LastEditTime: 2021-03-23 19:32:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\api\mockAjax.js
 */
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const Ajax = new axios.create({
  baseURL: '/mock',
  timeout: 5000,
})
//请求拦截器
Ajax.interceptors.request.use(config => {
  NProgress.start()
  return config
})

//响应拦截器
Ajax.interceptors.response.use((response) => {
  NProgress.done()
  // alert('请求成功')
  return response.data;
}, (error) => {
  NProgress.done()
  alert('请求失败', error.message)
  return new Promise(() => { })//中断promise链
})
export default Ajax