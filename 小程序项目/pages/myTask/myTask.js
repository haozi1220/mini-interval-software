// pages/myTask/myTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 头部标签页
    tabActive: 'tab1',
    date: '2018-3-3'
  },
  TabChange({detail}){
    this.setData({
      tabActive: detail.key,
    })
    if(detail.key == "tab1"){
      url: 'pages/waitTask/waitTask'
    }else if(detail.key == "tab2") {
      url: 'pages/alreadyTask/alreadyTask'
    }
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