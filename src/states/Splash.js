import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('red_square', 'assets/images/square-red.png')
    this.load.image('blue_square', 'assets/images/square-blue.png')
    this.load.spritesheet('test_char', 'assets/images/character-test00.png', 38, 40, 17)
  }

  create () {
    this.state.start('Game')
  }
}
