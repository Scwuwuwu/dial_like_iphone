Page({
  data: {
    inputNumber: ''
  },
  onKeyTap: function (e) {
    const key = e.currentTarget.dataset.key;
    this.setData({
      inputNumber: this.data.inputNumber + key
    });
  },
  onDeleteTap: function () {
    const inputNumber = this.data.inputNumber;
    if (inputNumber.length > 0) {
      this.setData({
        inputNumber: inputNumber.slice(0, -1)
      });
    }
  },
  onCallTap: function () {
    const inputNumber = this.data.inputNumber;
    if (inputNumber.length > 0) {
      wx.makePhoneCall({
        phoneNumber: inputNumber
      });
    }
  }
})