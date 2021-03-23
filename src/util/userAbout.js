/*
 * @Author: your name
 * @Date: 2021-03-22 18:05:26
 * @LastEditTime: 2021-03-23 09:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\util\userAbout.js
 */
import {
  v4 as uuidv4
} from 'uuid'
export function getUserTempId () {
  let userTempId = localStorage.getItem('USERTEMPID_KEY')
  if (!userTempId) {
    userTempId = uuidv4()
    localStorage.setItem('USERTEMPID_KEY', userTempId)
  }
  return userTempId
}