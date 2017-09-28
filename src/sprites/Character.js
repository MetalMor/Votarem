import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, frame }) {
    super(game, x, y, asset, frame)
    game.physics.enable(this, Phaser.Physics.ARCADE)
    this.animations.add('walk')
    this.game = game
    this.anchor.setTo(0.5)
    this.body.collideWorldBounds = true
  }

  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.x -= 4
      this.scale.x = -1
      this.animations.play('walk', 10, true)
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.x += 4
      this.scale.x = 1
      this.animations.play('walk', 10, true)
    } else {
      this.animations.stop(true)
    }
  }
}
