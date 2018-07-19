// pages/myTask/myTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 头部标签页
    tabActive: 'tab1',
    date: '2018-3-3',
    windowHeight:'', //系统高度


    myTask:{
      pagetype:3,//0：空;1：带排查;2：已排查
      waitTasklist:[
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
          isBack: false, //false:显示回退 ; true: 不显示回退
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
          isBack: true,
          backData: {
            backText: '复合回退',
            backReason: '身份证影像不清晰',
            backTime: '2018.3.6 14:00'
          }
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
          isBack: false,
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
          isBack: true,
          backData: {
            backText: '复合回退',
            backReason: '身份证影像不清晰',
            backTime: '2018.3.6 14:00'
          }
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
          isBack: false,
        }
      ],
      alreadyTasklist: [
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        },
        {
          personName: '李丽丽',
          taskTime: '2018.3.4 13:50',
          idCard: '46000**********2013',
          dateRange: '2018.2.10-2018.3.4',
          taskQuestion: '这种病是否可以报销，有病历表，报销流程是什么',
        }
      ]
    },
  },
  TabChange({detail}){
    this.setData({
      tabActive: detail.key,
    })
    if(detail.key == "tab1"){
      this.setData({
        'myTask.pagetype': 1,
        waitTasklist: []
      })
    } else if (detail.key == "tab2"){
      this.setData({
        'myTask.pagetype': 2,
        waitTasklist: []
      })
    }
  },
  // '回复调查'按钮
  handleClick: function() {
    wx.navigateTo({
      url: '../replyResearch/replyResearch',
    })
  },
  // '授权信息'按钮
  handleText: function () {
    wx.navigateTo({
      url: '../authorMess/authorMess',
    })
  },
  // '排查结果'
  handleResult: function () {
    wx.navigateTo({
      url: '../checkResult/checkResult',
    })
  },
  // 底部加载动画
  loadingAnimate(){
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
    animationNor.scale(1, 1).step();
    this.setData({
      animationDataNor: animationNor.export()
    })
    var num = 0;
    let timer1 = setInterval(function () {
      num++;
      if (num > 3) {
        num = 0;
      }
      this.setData({
        _num: num
      })
    }.bind(this), 500);
  },
  // 上滑函数
  pullUpLoad(){
    this.loadingAnimate();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight:res.windowHeight
        })
      },
    })
    var getWTlist = [];
    var getATlist = [];

    //请求
    getWTlist = [];


    if (getWTlist == '') {
      this.setData({
        'myTask.pagetype':0
      })
    }else{
      this.setData({
        'myTask.pagetype': 1,
        'myTask.waitTasklist': getWTlist
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.loadingAnimate();
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