// pages/replyResearch/replyResearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {name: 'yes', value: '有记录'},
      {name: 'no', value: '无记录'}
    ],
    visible1: false,
    showCancel: false
  },
  handleOpen1: function() {
    this.setData({
      visible1: true
    });
  },
  handleClose1() {
    this.setData({
      visible1: false
    });
    wx.switchTab({
      url: '../myTask/myTask',
    })
  },
  handleClick: function() {
    wx.switchTab({
      url: '../myTask/myTask',
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