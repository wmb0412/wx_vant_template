import {baseUrl} from './config'
/**
 * 接口请求基类方法
 * @param method 请求方法 必填
 * @param url 请求路径 必填
 * @param data 请求参数
 * @param header 请求头 选填
 * @returns {Promise}
 */
export function request(config){
 if(!config.header){
  config.header={};
 }
 config.header['X-Token'] = wx.getStorageSync('token')||111;
 config.method=config.method||'POST'
 config.url= baseUrl+config.url
  return new Promise((resolve, reject) => {
    wx.request({...config,...{
      success(res){
        resolve(res.data)
      },
      fail(res){
        reject(res)
      }
    }})
  } )
}