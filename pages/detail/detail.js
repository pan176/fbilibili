// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo: {},
    // 推荐视频
    othersList: [],
    // 评论
    commentData: [],
    // 当前索引
    currentIndex: 0
  },

  /**
   * 获得当前索引值
   */
  getCurrentIndex: function (e) {
    // console.log(e);
    this.setData({
      currentIndex: e.detail.current
    })
  },

  /**
   * 点击选项卡
   */
  activeTab: function (e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })
  },

  /**
   * 获取评论列表
   * @param {视频 ID} id 
   */
  getCommentDataById: function (id) {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/commentsList",
      success(response) {
        // console.log(response.data)
        if (response.data.code === 0) {
          that.setData({
            commentData: response.data.data.commentData
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频列表
   * @param {视频 ID} id 
   */
  getOrtherListById: function (id) {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/othersList",
      success(response) {
        // console.log(response.data)
        if (response.data.code === 0) {
          that.setData({
            othersList: response.data.data.othersList
          })
        }
      }
    })
  },

  /**
   * 获取视频详情
   * @param {视频 ID} id 
   */
  getVideoById: function (id) {
    let that = this;
    wx.request({
      url: "https://www.fastmock.site/mock/0cc8353a68511aad722aa387610a4ce1/bili/videoDetail",
      success(response) {
        // console.log(response.data)
        if (response.data.code === 0) {
          that.setData({
            videoInfo: response.data.videoInfo.video
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.getVideoById(options.id);
    this.getOrtherListById(options.id);
    this.getCommentDataById(options.id);
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