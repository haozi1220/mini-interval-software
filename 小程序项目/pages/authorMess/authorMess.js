// pages/authorMess/authorMess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorImage:[
      {
        authorMold: '身份证影像',
        imageSrc:[
          '../../images/idCardRev.png',
          '../../images/idCardFace.png'
        ]
      },
      {
        authorMold: '授权书影像',
        imageSrc:[
          '../../images/auhorBook1.png',
          '../../images/auhorBook2.png'
        ]
      }
    ]
  },
  handleClick() {
    // wx.switchTab({
    //   url: '../waitTask/waitTask',
    // })
    wx.navigateBack({
      delta: 1
    })
  },
  // 预览图片
  previewImage(e){
    var currentSrc = e.target.dataset.src;
    wx.previewImage({
      current: currentSrc,
      urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532614474&di=f71e0da39f399cde6b818af3ede43121&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0142135541fe180000019ae9b8cf86.jpg%401280w_1l_2o_100sh.png'],
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