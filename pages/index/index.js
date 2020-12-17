/** index.js **/
const config = require('../../resume.config.js');
console.log("dfdf---",config);
Page({
  data: {
    weixin: 'bing23323',
    phone: '16653131007',
    mail: '16653131007@163.com',
    github: 'https://github.com/wanxb',
    demo: "",
    technologies: config.technologies,
    tools: config.tools,
    experiences: config.experiences,
    introduce: config.introduce,
    project: config.project
  },
  //微信按钮
  copyBlog() {
    wx.setClipboardData({
      data: this.data.weixin,
      success() {
        wx.showToast({
          title: '微信已复制',
          icon: "none",
          duration: 1000
        })
      }
    })
  },

  //电话按钮
  actionSheetTap() {
    const phoneNum = this.data.phone;
    wx.showActionSheet({
      itemList: ['呼叫', '复制'],
      success(e) {
        if (e.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: phoneNum,
            success() {
              console.log('成功拨打电话')
            }
          })
        }
        else if (e.tapIndex === 1) {
          wx.setClipboardData({
            data: phoneNum,
            success() {
              wx.showToast({
                title: '电话已复制',
                icon: 'none',
                duration: 1000,
              })
            }
          })
        }
      }
    })
  },
  //邮件按钮
  copyMail() {
    wx.setClipboardData({
      data: this.data.mail,
      success() {
        wx.showToast({
          title: '邮箱已复制',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },
  //github按钮
  copyGithub() {
    wx.setClipboardData({
      data: this.data.github,
      success() {
        wx.showToast({
          title: 'github已复制',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },

})