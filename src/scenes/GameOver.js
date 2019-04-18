// import { CST } from "../CST";

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.GAMEOVER
    });
  }
  init() {}
  preload() {}
  create() {
    this.add.image(0, 0, CST.IMAGE.TITLE).setOrigin(0, 0);
    // this.sound.play(CST.AUDIO.TITLE);
    //Logo render
    //quit button render
    if (totalScorePlayer1 > totalScorePlayer2) {
      this.add
        .image(
          this.game.renderer.width / 2,
          this.game.renderer.height / 2 - 100,
          CST.IMAGE.WINNER1
        )
        .setScale(0.5);
    } else {
      this.add
        .image(
          this.game.renderer.width / 2,
          this.game.renderer.height / 2 - 100,
          CST.IMAGE.WINNER2
        )
        .setScale(0.5);
    }

    let againButton = this.add.image(
      this.game.renderer.width / 2,
      this.game.renderer.height / 2 + 100,
      CST.IMAGE.AGAIN
    );

    againButton.setInteractive();
    againButton.on("pointerdown", () => {
      this.scene.start(CST.SCENES.PLAY);
    });

    totalScorePlayer1 = 0;
    totalScorePlayer2 = 0;
    healthPlayer1 = 100;
    healthPlayer2 = 100;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    tulipStage = 0;
    roseStage = 0;
    sunflowerStage = 0;
    //hover sprite render
    // let hoverSprite: Phaser.GameObjects.Sprite = this.add.sprite(
    //   100,
    //   100,
    //   CST.SPRITE.PARKER
    // );
    //title music
  }

  update() {}
}
