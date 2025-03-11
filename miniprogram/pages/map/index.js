Page({
  data: {
    activeTab: 0,
    nearbyList: [
      {
        id: 1,
        name: '紫云大厦01',
        address: '深圳市宝安区新安街道新安二路187号',
        distance: '634',
        total: 10,
        available: 7,
        isFavorite: true
      },
      {
        id: 2,
        name: '紫云大厦02',
        address: '深圳市宝安区新安街道新安二路187号',
        distance: '634',
        total: 10,
        available: 9,
        isFavorite: false
      },
      {
        id: 3,
        name: '紫云大厦03',
        address: '深圳市宝安区新安街道新安二路187号',
        distance: '634',
        total: 10,
        available: 7,
        isFavorite: false
      },
      {
        id: 4,
        name: '紫云大厦04',
        address: '深圳市宝安区新安街道新安二路187号',
        distance: '634',
        total: 10,
        available: 8,
        isFavorite: false
      },
      {
        id: 5,
        name: '碧涛居站（洪浪北路）01',
        address: '深圳市宝安区新安街道新洪社区洪浪北路',
        distance: '719',
        total: 12,
        available: 12,
        isFavorite: true
      }
    ],
    frequentList: [
      {
        id: 1,
        name: '碧涛居站（洪浪北路）01',
        address: '深圳市宝安区新安街道新洪社区洪浪北路',
        distance: '719',
        total: 12,
        available: 12,
        isFavorite: true
      }
    ],
    stationList: [] // 当前显示的列表
  },

  onLoad() {
    this.setData({
      stationList: this.data.nearbyList
    })
  },

  switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    const list = index === 0 ? this.data.nearbyList : this.data.frequentList
    this.setData({
      activeTab: index,
      stationList: list
    })
  }
})