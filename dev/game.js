'use strict'
import Boot from './states/boot.js'
// import Preload from './states/preload'
// import Play from './states/play'
import config from './config/config'
import dom from './config/document.js'

// 设置场景的大小
// let game = new Phaser.Game(config.DesignSize.width,config.DesignSize.height, Phaser.CANVAS, 'game',null,true)
let game = new Phaser.Game(config.DesignSize.width,config.DesignSize.height, Phaser.CANVAS, 'game',null)
// 设置HTML里面比例
if(config.left < 0){dom.main.style.left = config.left + "px"}

game.state.add('boot',Boot)
// game.state.add('preload',Preload)
// game.state.add('play',Play)

export default game
