'use strict'
import config from '../config/config.js'
import dom from '../config/document.js'

let boot = function() {
  this.init = () => {
    console.log("场景1:启动")
    this.input.maxPointers = 1
    this.stage.disableVisibilityChange = true
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
    this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE

    this.scale.setUserScale(config.scale,config.scale,0, 0);
    this.scale.refresh();
  }
  this.create = () => {
    dom.main.style.display = 'block';
    this.stage.backgroundColor = '#fffff'
    this.stage.backgroundColor = '#faf3e3';
    this.state.start('preload');
  }
}

export default boot
