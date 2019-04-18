var music;
class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    });
  }
  init() {}
  preload() {
    totalScorePlayer1 = 0;
    totalScorePlayer2 = 0;
    healthPlayer1 = 100;
    healthPlayer2 = 100;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
  }
  create() {
    music = this.sound.play(CST.AUDIO.MENU, { loop: true });

    let bg = (this.L2 = this.add
      .sprite(
        0, // x-axis
        0, // y-axis
        CST.IMAGE.L2 //given name
      )
      .setOrigin(0, 0)
      .setScale(3));
    this.L1 = this.add
      .sprite(
        -50, // x-axis
        50, // y-axis
        CST.IMAGE.L1 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);
    this.L3 = this.add
      .sprite(
        300, // x-axis
        180, // y-axis
        CST.IMAGE.L3 //given name
      )
      .setOrigin(0, 0)
      .setScale(2);
    this.L4 = this.add
      .sprite(
        0, // x-axis
        0, // y-axis
        CST.IMAGE.L4 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);

    this.L5 = this.add
      .sprite(
        -300, // x-axis
        0, // y-axis
        CST.IMAGE.L5 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);
    this.L6 = this.add
      .sprite(
        -300, // x-axis
        0, // y-axis
        CST.IMAGE.L6 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);
    this.L7 = this.add
      .sprite(
        -300, // x-axis
        0, // y-axis
        CST.IMAGE.L7 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);

    //Logo render
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.2,
        CST.IMAGE.LOGO
      )
      .setScale(0.5);

    let playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        CST.IMAGE.PLAY
      )
      .setDepth(1);
    this.add
      .image(this.game.renderer.width / 2, 580, CST.IMAGE.CREDITS)
      .setScale(0.15);

    playButton.setInteractive();
    playButton.on("pointerdown", () => {
      game.sound.stopAll();
      this.scene.start(CST.SCENES.PLAY);
    });
    playButton.setInteractive();
    playButton.on("pointerout", () => {
      console.log("outahh here");
    });
  }

  update() {
    if (this.L1.y > -100) {
      this.L1.y -= 0.15;
    }
    if (this.L5.x > -380) {
      this.L5.x -= 0.1;
      this.L6.x -= 0.05;
    }

    this.L7.x -= 0.1;
  }
}
