// import { CST } from "../CST";

class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.LOAD
    });
  }

  init() {}
  loadImages() {
    this.load.setPath("assets/image");

    for (let prop in CST.IMAGE) {
      this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
    }
  }
  loadAudio() {
    this.load.setPath("assets/audio");

    for (let prop in CST.AUDIO) {
      this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
    }
  }
  loadSprites(frameConfig) {
    this.load.setPath("assets/sprite");

    for (let prop in CST.SPRITE) {
      this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
    }
  }

  loadPlants(frameConfig) {
    this.load.setPath("assets/plantSprite");

    for (let prop in CST.PLANTSPRITE) {
      this.load.spritesheet(
        CST.PLANTSPRITE[prop],
        CST.PLANTSPRITE[prop],
        frameConfig
      );
    }
  }

  preload() {
    this.loadAudio();
    this.loadSprites({
      frameWidth: 32,
      frameHeight: 48
    });
    this.loadPlants({
      frameWidth: 11,
      frameHeight: 22
    });
    this.loadImages();

    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff
      }
    });

    //simulates large load
    // for (let i = 0; i < 100; i++) {
    //   this.load.spritesheet("dude" + i, "./assets/dude.png", {
    //     frameWidth: 32,
    //     frameHeight: 48
    //   });
    // }

    this.load.on("progress", percent => {
      loadingBar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
      console.log(percent);
    });
    this.load.on("complete", () => {
      console.log("Finsihed loading");
    });

    this.load.on("load", file => {
      console.log(file.src);
    });
  }

  create() {
    this.scene.start(CST.SCENES.MENU);
  }
}
