// pages/login/login.js
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    password: '',
    loadingHidden: true
  },
  mobileInput: function(e) {
    this.setData({
      mobile: e.detail.value
    });
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  handleText: function () {
    let mobile = this.data.mobile;
    let password = this.data.password;
    let myreg = /^[1][0-9]{10}$/;
    if (mobile == '') {
      $Toast({
        content: '请输入手机号!',
        duration: 1
      });
      return false;
    } else if (!myreg.test(mobile)) {
      $Toast({
        content: '手机号有误!',
        duration: 1
      });
      return false;
    } else if (password == '') {
      $Toast({
        content: '请输入密码!',
        duration: 1
      });
      return false;
    }
    this.setData({
      loadingHidden: false
    });
    let that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      });
      wx.switchTab({
        url: '../taskShare/taskShare',
      });
    }, 2000);
    // $Toast({
    //   content: '您的信息输入有误!',
    //   duration: 0
    // });
    // setTimeout(() => {
    //   $Toast.hide();
    //   wx.switchTab({
    //     url: '../taskShare/taskShare',
    //   })
    // },1000);
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