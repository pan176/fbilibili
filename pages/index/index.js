Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航列表
    navList: [],
    // 当前导航的选中索引
    currentIndex: 0,
    // 轮播图列表
    swiperList: [],
    // 视频列表
    videoList: []
  },

  /**
   * 获得视频列表
   */
  getVideoList: function () {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videosList",
      success(response) {
        // console.log(response.data)
        that.setData({
          videoList: response.data.data.videosList
        })
      }
    })
  },

  /**
   * 获得轮播图列表
   */
  getSwiperList: function () {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/swiperList",
      success(response) {
        // console.log(response.data)
        that.setData({
          swiperList: response.data.data.swiperList
        })
      }
    })
  },

  /**
   * 点击导航
   * @param {事件} e 
   */
  activeNav: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })
  },

  /**
   * 获取导航栏列表
   */
  getNavList: function () {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/navList",
      success(response) {
        // console.log(response.data);
        if (response.data.code === 0) {
          that.setData({
            navList: response.data.data.navList
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideoList();
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