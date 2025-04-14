Page({
    data: {
        number: 0
    },
    onPullDownRefresh: function () {
      console.log('下拉刷新触发');
        this.setData({
            number: this.data.number + 1
        });
        wx.stopPullDownRefresh();
    },
    resetNumber: function () {
        this.setData({
            number: 0
        });
    },
    onShow() {
      // 每次页面显示时将变量重置为 0
      this.setData({
        number: 0
      });
    },
    onLoad: function () {
        console.log('页面 B 加载完成');
    },
    
})