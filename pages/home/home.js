//页面注册
Page({

  //页面数据
  data: {
    //屏幕宽度
    screenWidth: 0,

    //轮播图片盒子的高度
    swiperHeight: 0,

    //轮播图片
    swiperImgs: [
      {
        img: 'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/40055/14/9759/163398/5d10a9ebE49e37c49/620bdc754c771e5a.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/9215/25/14027/183517/5c516459E0ff4778e/a7b51a3f9f9db4f8.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      },
      {
        img: 'http://m.360buyimg.com/mobilecms/s750x366_jfs/t28522/169/1532135401/53716/6506f440/5ce4a71cNd01c6761.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      }
    ],

    //是否显示图片指示点
    isHasDots: true,

    //未激活指示点颜色
    dotsColor: 'rgba(26, 173, 25, .35)',

    //激活指示点颜色
    dotsActiveColor: '#1AAD19',

    //是否自动轮播
    isAutoPlay: true,

    //自动轮播时间
    interval: 2500,

    //动画执行时间
    duration: 300,

    //循环轮播
    isCircular: true
  },

  //初始化页面数据
  onLoad: function () {
    //获取系统信息
    var info = wx.getSystemInfoSync();
    // console.log('info ==> ', info);
    this.setData({
      screenWidth: info.screenWidth
    })

  },

  //图片加载完成事件
  loadedImg: function (e) {

    // console.log('e ==> ', e);
    //获取原图尺寸
    var originWidth = e.detail.width;
    var originHeight = e.detail.height;

    var height = this.data.screenWidth / originWidth * originHeight;
    // console.log('height ==> ', height);

    this.setData({
      swiperHeight: height
    })
    
  },


  getProduct: function () {
    console.log('测试点击事件');
  }


})