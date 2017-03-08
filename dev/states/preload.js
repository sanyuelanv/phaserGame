'use strict'

let preload = function() {
  this.init = () => {
    console.log("场景2:预加载")
  }
  this.preload = () => {
    /*预加载并且监听事件*/
    this.loadAll()
    this.load.onLoadStart.add(this.loadStart, this)
    this.load.onFileComplete.add(this.fileComplete, this)
    this.load.onLoadComplete.add(this.loadComplete, this)
  }
  this.loadAll = () => {
    let url = ""
    if (!__DEV__) {url = "/static/"}
    //预加载素材
    // this.load.bitmapFont('text', url + 'img/font-2.png', url + 'img/font-2.xml')
    // this.load.atlas('card',url + 'img/card.png', url + 'img/card.json')
    this.load.image('logo', url + 'images/logo.png')

  }
  this.loadStart = () => {}
  this.fileComplete = (progress, cacheKey, success, totalLoaded, totalFiles) => {
    console.log("加载进度："+progress)
  }
  this.loadComplete = () => {
    if (this.isLoad) {return}
    this.isLoad = true
    this.state.start('play')
  }
  this.create = () => {}
}

export default preload
