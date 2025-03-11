Page({
  data: {
    activeTab: 0,
    activityList: [
      {
        id: 1,
        image: '/images/banner.png'
      },
      {
        id: 2,
        image: '/images/banner.png'
      },
      {
        id: 3,
        image: '/images/banner.png'
      }
    ]
  },

  switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      activeTab: index
    })
  }
})