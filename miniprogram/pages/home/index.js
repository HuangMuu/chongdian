Page({
  data: {
    cityName: '深圳市',
    bannerList: ['/images/banner.png'],
    menuList: [
      { id: 1, icon: '/images/scan.png', text: '扫码充电' },
      { id: 2, icon: '/images/wallet.png', text: '钱包充值'},
      { id: 3, icon: '/images/order.png', text: '我的订单' },
      { id: 4, icon: '/images/station.png', text: '充电地图' }
    ],
    secondaryMenuList: [
      { id: 1, icon: '/images/search.png', text: '站点查询' },
      { id: 2, icon: '/images/package.png', text: '充值套餐'},
      { id: 3, icon: '/images/activity.png', text: '活动中心', },
      { id: 4, icon: '/images/share.png', text: '分享有喜' },
      { id: 5, icon: '/images/input.png', text: '输入编号', },
      { id: 6, icon: '/images/card.png', text: '卡片充值' }
    ]
  },

  goToCharging() {
    wx.navigateTo({
      url: '/pages/charging/index'
    })
  }
})