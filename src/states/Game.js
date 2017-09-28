/* globals __DEV__ */
import Phaser from 'phaser'
import Character from '../sprites/Character'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.character = new Character({
      game: this.game,
      x: this.world.centerX,
      y: this.world.height,
      asset: 'test_char',
      frame: 5
    })

    this.game.add.existing(this.character)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.character, 32, 32)
    }
  }
}
