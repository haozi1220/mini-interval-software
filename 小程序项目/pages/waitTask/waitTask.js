// pages/waitTask/waitTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-3-3',
    tabActive: 'tab1',
    animationData:{}, //底部动画数据
    animationDataNor:{}, //底部回复原来数据
    pcikerShow: false,
    // 待排查信息
    waitTaskData:[
     
    ]
  },
  TabChange({detail}){
    this.setData({
      tabActive: detail.key
    })
    if (detail.key == "tab2"){
      // wx.reLaunch({
      //   url: '../alreadyTask/alreadyTask',
      // })
    }
  },
  handleClick() {
    wx.navigateTo({
      url: '../authorMess/authorMess',
    })
  },
  handleText() {
    wx.navigateTo({
      url: '../replyResearch/replyResearch',
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
    // 执行循环前先清除定时器
    clearInterval(timer1);
    // 放大动画
    let animation = wx.createAnimation({
      timingFunction: 'ease'
    });
    this.animation = animation;
    animation.scale(2, 2).step();
    this.setData({
      animationData: animation.export()
    });
    // 缩小动画
    let animationNor = wx.createAnimation({
      timingFunction: 'ease'
    });
    this.animation2 = animationNor;
    animationNor.scale(1,1).step();
    this.setData({
      animationDataNor: animationNor.export()
    })
    var num = 0;
    let timer1 = setInterval(function(){
      num++;
      if (num > 3){
        num = 0;
      }
      this.setData({
        _num:num
      })
    }.bind(this),500);
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