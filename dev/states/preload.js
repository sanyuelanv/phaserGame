'use strict'

let preload = function() {
  this.init = () => {
    console.log("场景2:预加载")
  }
  this.preload = () => {
    /*预加载并且监听事件*/
    this.loadAll()
    this.load.onLoadStart.add(this.loadStart, this)
    // this.load.onFileComplete.add(this.fileComplete, this)
    this.load.onLoadComplete.add(this.loadComplete, this)
  }
  this.loadAll = () => {
    let url = ""
    if (!__DEV__) {url = "/static/"}
    //预加载素材
    this.load.bitmapFont('text', url + 'img/font-2.png', url + 'img/font-2.xml')
    this.load.image('anony', url + 'img/anony.png')
    this.load.image('rule', url + 'img/html/rule.png')
    this.load.image('big_alert', url + 'img/big_alert.png')
    this.load.image('little_alert', url + 'img/little_alert.png')
    this.load.atlas('card',url + 'img/card.png', url + 'img/card.json')
    this.load.atlas('btn',url + 'img/btn-1.png', url + 'img/btn-1.json')
    this.load.atlas('other',url + 'img/other.png', url + 'img/other.json')
    this.load.atlas('result',url + 'img/result-2.png', url + 'img/result-2.json')

  }
  this.loadStart = () => {}
  // this.fileComplete = (progress, cacheKey, success, totalLoaded, totalFiles) => {
  //   if (this.isLoad) {return}
  //   console.log(progress)
  // }
  this.loadComplete = () => {
    if (this.isLoad) {return}
    this.isLoad = true
    this.state.start('play')
  }
  this.create = () => {}
}

export default preload
