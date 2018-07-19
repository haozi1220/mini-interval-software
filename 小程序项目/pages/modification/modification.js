const { $Toast } = require('../../dist/base/index');

// pages/modification/modification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: '',
    new_password: '',
    visible: false,
    showCancel: false
  },
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value  
    }); 
  },
  new_passwordInput: function (e) {
    this.setData({
      new_password: e.detail.value
    });
  },
  handleOpen1: function() {
    let password = this.data.password;
    let new_password = this.data.new_password;
    if (password == '') {
      $Toast({
        content: '请输入新密码!',
        duration: 1
      });
      return false;
    } else if (new_password == '') {
      $Toast({
        content: '请再次输入新密码!',
        duration: 1
      });
      return false;
    };
    this.setData({
      visible: true
    });
  },
  // ‘确认’
  handleClose1() {
    this.setData({
      visible: false
    });
    wx.switchTab({
      url: '../settings/settings',
    })
  },
  // ‘取消’
  handleClick: function () {
    wx.switchTab({
      url: '../settings/settings',
    })
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
  
  }
})