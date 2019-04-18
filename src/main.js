// import { LoadScene } from "./scenes/LoadScene";
// import { MenuScene } from "./scenes/MenuScene";
// import { PlayScene } from "./scenes/PlayScene";
// import { Level2 } from "./scenes/Level2";
// import { Level3 } from "./scenes/Level3";
console.log("new stuff");
let game = new Phaser.Game({
  width: 800,
  height: 600,
  scene: [LoadScene, MenuScene, PlayScene, Level2, Level3, GameOver],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
});
