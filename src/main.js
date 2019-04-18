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
    },
    audio: {
      disableWebAudio: true,
      noAudio: false
    }
  }
});
