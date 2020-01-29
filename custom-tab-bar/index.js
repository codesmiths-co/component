Component({
  data: {
    selected: 0,
    color: "#D3C8DB",
    selectedColor: "#56247A",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/tab1.png",
      selectedIconPath: "/image/tab1_active.png",
      text: "All Dogs"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/tab2.png",
        selectedIconPath: "/image/tab2.png",
      text: "Post a Dog"
      }, {
        pagePath: "/index/index",
        iconPath: "/image/tab3.png",
        selectedIconPath: "/image/tab3_active.png",
        text: "My Profile"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url: url,
      })
      this.setData({
        selected: data.index
      })
    }
  }
})