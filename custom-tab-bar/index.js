Component({
  data: {
    selected: 0,
    color: "#D3C8DB",
    selectedColor: "#56247A",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "组件"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "接口"
      }, {
        pagePath: "/index/index",
        iconPath: "/image/icon_component.png",
        selectedIconPath: "/image/icon_component_HL.png",
        text: "组件"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})