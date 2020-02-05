import Wxml2Canvas from 'wxml2canvas'; // 根据具体路径修改，node_modules会被忽略
Component({
  data: {

  },
  methods: {
    saveImg() {
      let self = this;
      console.log(this)
      let drawImage1 = new Wxml2Canvas({
        element: 'canvas1',
        background: '#fff000',
        obj: this,
        progress(percent) {
        },
        finish(url) {
          console.log(url)
          self.setData({
            url
          })

          //   wx.authorize({
          //     scope: 'scope.writePhotosAlbum',
          //     success() {
          //       console.log("2-授权《保存图片》权限成功");
          //       wx.saveImageToPhotosAlbum({
          //         filePath : url,     //仅为示例，并非真实的资源
          //         success: function (res) {
          //           console.log(res)
          //         },
          //         fail: function (res) {
          //           console.log(res)
          //         }
          //       })
          //     }
          // })
        },
        error(res) {
          console.log(res)
        }
      });

      let data = {
        list: [{
          type: 'wxml',
          class: '.share__canvas1 .draw_canvas', // draw_canvas指定待绘制的元素
          limit: '.share__canvas1', // 限定绘制元素的范围，取指定元素与它的相对位置
          x: 0,
          y: 0
        }]
      }

      drawImage1.draw(data);
    },
  }
})
