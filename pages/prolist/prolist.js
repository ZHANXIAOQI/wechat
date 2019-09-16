// pages/prolist/prolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //所有商品数据
    proList: [],

    //懒加载商品数据
    lazyList: [],

    //每次加载6个商品(截取proList商品数组元素下标)
    limitNum: 6,

    //用于判断是否存在商品加载数据
    isNone: false
  },

  /**
   * 生命周期函数--监听页面加载
   * 一般用于初始化页面数据
   */
  onLoad: function (options) {

    //获取缓存数据
    var proData = wx.getStorageSync('proData');
    console.log('proData ==> ', proData);

    //如果缓存有数据
    if (proData) {
      console.log('有缓存数据');

      //将缓存数据设置为data的proList
      this.setData({
        proList: proData
      })

    } else {
      console.log('没有缓存数据');
      //假设该数据是服务器获取的
      var proList = [
        {
          id: 'A001',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/20850/4/12652/553549/5c99eedaEcf2ffa12/06b39710d4dc2ae7.jpg!q70.dpg.webp',
          name: '客厅玄关装饰画原创手绘油画现代简约一帆风顺帆船抽象流水风景欧式书房餐厅酒店公寓过道走廊装饰竖挂壁画 A 金色实木外框 带框60x90',
          price: 612,
          isPlus: true,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A002',
          img: 'http://img10.360buyimg.com/mobilecms/s372x372_jfs/t17392/350/1119356793/78184/4beaac5a/5abb1597Na95a1405.jpg!q70.dpg.webp',
          name: '守护宝（上海中兴）F5 远程控制 老人智能手机 3G+32G 金色',
          price: 499,
          isPlus: false,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A003',
          img: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/39852/19/9330/576235/5d09fcf1Ed5660b3b/21053cf68d8c53df.jpg!q70.dpg.webp',
          name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
          price: 18.9,
          isPlus: true,
          isHot: true,
          hotText: '满减',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A004',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/62592/30/1878/163127/5d02f650Ee0e197c4/f2edcb7672a95e62.jpg!q70.dpg.webp',
          name: '尤尼克斯YONEX羽毛球拍 yy日本进口超轻全碳素林丹李宗伟男女防守进攻单拍天斧ASTROX99 NS9900 经典双打拍 金色',
          price: 1342,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A005',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/25134/30/15481/285216/5caff859Ebddfc60d/9d5b4e8ce44d307b.jpg!q70.dpg.webp',
          name: '小辣椒 红辣椒Q20 2GB+16GB 黑色 学生老人手机 智能商务手机 移动联通电信4G 双卡双待',
          price: 469,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A006',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14379/8/6142/281112/5c4976a0E08d8961a/39bb169fc2a909aa.jpg!q70.dpg.webp',
          name: '欧莱雅（LOREAL）复颜抗皱紧致护肤化妆品套装礼盒（柔肤130ml+乳液110ml+乳液50ml+柔肤水65ml）',
          price: 359,
          isPlus: false,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A007',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t28801/347/1482350828/256506/75e9ace4/5ce26278Na80073a6.jpg!q70.dpg.webp',
          name: 'ELLE HOMME时尚男士短款钱包 细腻牛皮横款钱夹 商务礼盒装票价ED787502820黑色',
          price: 99,
          isPlus: false,
          isHot: true,
          hotText: '新品',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A008',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t30520/229/618356207/162687/61214bed/5bf7ba6fNb240eb3c.jpg!q70.dpg.webp',
          name: '【买2送1】亦舒堂丁香茶 养暖胃茶 丁香嫩叶 紫丁香茶 长白山 通化丁香叶茶 花草茶正品 养生茶',
          price: 58,
          isPlus: false,
          isHot: true,
          hotText: '满减',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A009',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t10546/90/1790742047/124290/b47c4bca/59e6c196Nc39edd66.jpg!q70.dpg.webp',
          name: '西门子(SIEMENS)开关插座 远景系列 10A五孔插座面板 (雅白色)5UB01061CC1',
          price: 10.9,
          isPlus: false,
          isHot: true,
          hotText: '满减',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A010',
          img: 'http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/16995/6/14199/149310/5ca64db6E65086aa3/cdb5f23dfb6840fd.jpg!q70.dpg.webp',
          name: '肥皂盒吸盘壁挂香皂盒浴室免打孔肥皂架卫生间沥水置物架皂盒架 白色',
          price: 13,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A011',
          img: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/30971/27/780/100130/5c403001E04521441/ee6df0c1bdf2e280.jpg!q70.dpg.webp',
          name: '名创优品（MINISO）优品运动双肩包 学院风双肩包(灰色)',
          price: 79.9,
          isPlus: false,
          isHot: true,
          hotText: '拼购',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A012',
          img: 'http://img10.360buyimg.com/mobilecms/s372x372_jfs/t20419/239/1116503150/209825/6517e051/5b20b9f8N882a328d.jpg!q70.dpg.webp',
          name: 'ELLE HOMME男包单肩包男士斜挎包 头层牛皮时尚休闲包EA788205140黑色',
          price: 699,
          isPlus: true,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A013',
          img: 'http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/33929/29/14357/209122/5d099b8bE8dbdfc36/d4de2af190dc25d5.jpg!q70.dpg.webp',
          name: '【限时秒杀】FMJ骨传导蓝牙耳机 运动无线跑步耳机 可吃鸡耳机 蓝牙耳机 适用安卓/苹果手机通用 G18 黑色升级版',
          price: 298,
          isPlus: true,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        },

        {
          id: 'A014',
          img: 'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/67190/7/2437/138110/5d0b5a94E335df3dc/ef4ea2d8bcb4b58c.jpg!q70.dpg.webp',
          name: '百雀羚套装女补水保湿护肤品 草本精萃惊喜礼盒(洁面膏95g+水100ml+乳100ml+霜50g)新老包装随机 洗面奶水乳',
          price: 548,
          isPlus: false,
          isHot: false,
          hotText: '',
          heart: '../../images/mylike.png'
        }
      ];

      //修改data的数据模型
      this.setData({
        proList: proList
      })

      //设置缓存数据
      wx.setStorageSync('proData', proList);
      
    }

    console.log('页面渲染完成之前');

    //截取商品数据
    //this.data.proList: 获取data的proList数据模型
    var data = this.data.proList.slice(0, this.data.limitNum);

    //修改data的lazyList
    this.setData({
      lazyList: data,
      limitNum: this.data.limitNum + 6
    })

  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    console.log('触底了');
    
    //没有数据可加载
    if (this.data.isNone) {
      console.log('before 没有数据可加载了');
      return;
    }

    //截取商品数据
    var data = this.data.proList.slice(this.data.limitNum - 6, this.data.limitNum);
    console.log('data ==> ', data);

    //如果没有商品数据加载，将data的isNone修改为true
    if (data.length < 6) {
      console.log('after 没有数据可加载了');
      this.setData({
        isNone: true
      })
    }

    var arr = this.data.lazyList;
    // [].push.apply(arr, data);
    // Array.prototype.push.apply(arr, data);
    // arr.push(...data);
    for (var i = 0; i < data.length; i++) {
      arr.push(data[i]);
    }
    console.log('arr ==> ', arr);

    //修改data的lazyList, limitNum
    this.setData({
      lazyList: arr,
      limitNum: this.data.limitNum + 6
    })
  },

  //查看商品详情
  previewDetail: function (e) {
    //e: 事件对象

    // 获取商品id
    var id = e.currentTarget.dataset.id;
    console.log('id ==> ', id);

    //跳转到商品详情页面
    wx.navigateTo({
      url: '../../pages/detail/detail?id=' + id
    })
  },

  //喜欢
  like: function (e) {
    console.log(e)

    //保存修改数组元素的下标
    var index = e.currentTarget.dataset.index;

    var currentLike = this.data.lazyList[index];
    console.log('currentLike ==> ', currentLike);

    currentLike.heart = '../../images/mylike_active.png';

    this.data.lazyList[index] = currentLike;

    console.log('this.data.lazyList ==> ', this.data.lazyList);

    this.setData({
      lazyList: this.data.lazyList
    })
  }


})