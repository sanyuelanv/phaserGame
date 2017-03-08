'use strict'

let play = function() {
  this.init = () => {
    console.log("场景2:预加载")
  }
  this.create = () => {
    let {game} = this
    let image = this.add.image(game.width/2,game.height/2,"logo")
    image.anchor.set(0.5,0.5)
  }
}

export default play
