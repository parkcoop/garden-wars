import { CST } from "../CST";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    });
  }
  init() {}
  preload() {}
  create() {
    //Background load
    // this.add.image(0, 0, CST.IMAGE.TITLE).setOrigin(0, 0);
    // this.sound.play(CST.AUDIO.TITLE);

    this.L2 = this.add
      .sprite(
        0, // x-axis
        0, // y-axis
        CST.IMAGE.L2 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);
    this.L1 = this.add
      .sprite(
        -50, // x-axis
        100, // y-axis
        CST.IMAGE.L1 //given name
      )
      .setOrigin(0, 0)
      .setScale(3);
    this.L3 = this.add
      .sprite(
        -150, // x-axis
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

    //Play button assignment/render
    let playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        CST.IMAGE.PLAY
      )
      .setDepth(1);

    //quit button render
    // let quitButton: Phaser.GameObjects.Image = this.add
    //   .image(
    //     this.game.renderer.width / 2,
    //     this.game.renderer.height / 2 + 100,
    //     CST.IMAGE.QUIT
    //   )
    //   .setDepth(1);
    //hover sprite render
    // let hoverSprite: Phaser.GameObjects.Sprite = this.add.sprite(
    //   100,
    //   100,
    //   CST.SPRITE.PARKER
    // );

    //title music

    playButton.setInteractive();
    playButton.on("pointerdown", () => {
      this.scene.start(CST.SCENES.PLAY);
    });
    playButton.setInteractive();
    playButton.on("pointerout", () => {
      console.log("outahh here");
    });
  }

  update() {
    this.L1.y -= 0.15;
    this.L5.x -= 0.05;
    this.L6.x -= 0.05;
    this.L7.x -= 0.1;
  }
}
