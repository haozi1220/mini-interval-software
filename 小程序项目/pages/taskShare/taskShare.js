// pages/taskShare/taskShare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartArr: [
      { name: 'wg', value: '王刚' },
      { name: 'lll', value: '李丽丽'},
      { name: 'wg', value: '王刚'},
      { name: 'lll', value: '李丽丽' }
    ],
    loadingHidden: true,
    visible3: false,
    actions3: [
      {
        name: '查看我的任务',
        color: '#309afc',
      },
      {
        name: '返回继续申请',
        color: '#309afc'
      }
    ],
    checked: false
  },
  checkClick: function(e) {
    let _this = this;
    // console.log(e.target.dataset.index);
    let index = e.target.dataset.index;
    console.log(e.target.dataset);
    console.log(_this.data.cartArr[0].checked = !_this.data.checked);

    this.setData({
      checked: !_this.data.checked,
      cartArr: _this.data.cartArr
    })
  },
  handleOpen3: function(e) {
    this.setData({
      loadingHidden: false
    });
    let that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true,
        visible3: true
      });
      
    }, 1000);
  },
  // 弹框
  handleClick3({ detail }) {
    const index = detail.index;
    let that = this;
    if (index === 0) {
      wx.switchTab({
        url: '../waitTask/waitTask',
      })
    } else if (index === 1) {
      that.setData({
        loadingHidden: true,
        visible3: false
      })
    }

    this.setData({
      visible3: false
    });
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