class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.GAMEOVER
    });
  }
  init() {}
  preload() {}
  create() {
    this.add
      .image(0, 0, CST.IMAGE.SUNSET)
      .setOrigin(0, 0)
      .setScale(3);
    if (totalScorePlayer1 > totalScorePlayer2) {
      this.add
        .image(
          this.game.renderer.width / 2,
          this.game.renderer.height / 2 - 100,
          CST.IMAGE.WINNER1
        )
        .setScale(0.5);
    } else if (totalScorePlayer1 < totalScorePlayer2) {
      this.add
        .image(
          this.game.renderer.width / 2,
          this.game.renderer.height / 2 - 100,
          CST.IMAGE.WINNER2
        )
        .setScale(0.5);
    } else {
      this.add
        .image(
          this.game.renderer.width / 2,
          this.game.renderer.height / 2 - 100,
          CST.IMAGE.NOWINNER
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
      game.sound.stopAll();

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
  }

  update() {}
}
