// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前商品信息
    currentPro: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options: 参数对象
    console.log('options ==> ',options);

    //获取查询参数
    var queryId = options.id;
    console.log('queryId ==> ', queryId);

    //获取缓存数据
    var proData = wx.getStorageSync('proData');
    console.log('proData ==> ', proData);

    //根据商品id查找商品信息
    for (var i = 0; i < proData.length; i++) {
      //如果匹配商品id,则需要打断循环
      if (queryId == proData[i].id) {

        //将proData[i]设置给data的currentPro
        this.setData({
          currentPro: proData[i]
        })

        //打断循环
        break;
      }
    }


    console.log(this.data.currentPro);

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