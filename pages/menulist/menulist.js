// pages/menulist/menulist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello",
    value:"",
    list:[
      {
        id:0,
        name:"猪八戒"
      },
      {
        id:2,
        name:"唐僧"
      },
      {
        id:2,
        name:"沙和尚"
      },
    ],
    num:0,
    num2:0
  },
  handleInput(e){
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  },
  handletap(e){
    console.log(e)
    const opetation = e.currentTarget.dataset.operation
    this.setData({
      num2:this.data.num2+opetation
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

  },
  complte:function(){
    this.setData({
      msg:"mihao"
    })
    console.log(1)

  },


})