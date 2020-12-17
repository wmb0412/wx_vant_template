// pages/login/login.js
import {
  login
} from '../../api/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: "15561000002",
    password: "123456"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChangeMobile(event){
    this.setData({
      mobile:event.detail
    })
  },
  onChangePassword(event){
    this.setData({
      password:event.detail
    })
  },
  async login() {
    let res=  await login({
      mobile: this.data.mobile,
      password: this.data.password
    })
    if(res.code==0){
      wx.setStorage({
        key:"token",
        data:res.data.token
      })
      wx.navigateTo({
        url: '../index/index'
      })
    }
   
  }
})