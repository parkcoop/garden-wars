// import { CST } from "../CST";

var sunflowerStage = 0;
var tulipStage = 0;
var roseStage = 0;
var player1;
var player2;
var players = [player1, player2];
var platforms;
var sunDrops;
var waterDrops;
var thunderDrops;
var sunflower;
var tulip;
var rose;
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var healthPlayer1 = 100;
var healthPlayer2 = 100;
var inventoryPlayer1 = [];
var inventoryPlayer2 = [];
var scoreText1;
var scoreText2;
var health1;
var health2;
class Level3 extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.LEVEL3 });
  }

  preload() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    sunflowerStage = 0;
    tulipStage = 0;
    roseStage = 0;
    healthPlayer1 = 100;
    healthPlayer2 = 100;
    this.anims.create({
      key: "P1",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key: "P2",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 1 }],
      frameRate: 20
    });

    this.anims.create({
      key: "P3",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 2 }],
      frameRate: 20
    });

    this.anims.create({
      key: "P4",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 3 }],
      frameRate: 20
    });

    this.anims.create({
      key: "P5",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "P6",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 5 }],
      frameRate: 20
    });
    this.anims.create({
      key: "P7",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 6 }],
      frameRate: 20
    });
    this.anims.create({
      key: "P8",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 7 }],
      frameRate: 20
    });
    this.anims.create({
      key: "P9",
      frames: [{ key: CST.PLANTSPRITE.PLANTS, frame: 8 }],
      frameRate: 20
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: CST.SPRITE.PARKER, frame: 4 }],
      frameRate: 20
    });
    this.anims.create({
      key: "parkerSun",
      frames: [{ key: CST.SPRITE.PARKERSUN, frame: 9 }],
      frameRate: 20
    });
    this.anims.create({
      key: "parkerWater",
      frames: [{ key: CST.SPRITE.PARKERWATER, frame: 9 }],
      frameRate: 20
    });

    this.anims.create({
      key: "andriwSun",
      frames: [{ key: CST.SPRITE.PINKDUDE, frame: 22 }],
      frameRate: 20
    });
    this.anims.create({
      key: "andriwWater",
      frames: [{ key: CST.SPRITE.PINKDUDE, frame: 13 }],
      frameRate: 20
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "left2",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "andriwSunLeft",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 18,
        end: 21
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "andriwWaterLeft",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 9,
        end: 12
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "andriwWaterRight",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 14,
        end: 17
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "andriwSunRight",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 23,
        end: 26
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "parkerSunLeft",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 18,
        end: 21
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "parkerWaterLeft",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 9,
        end: 12
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "parkerWaterRight",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 14,
        end: 17
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "parkerSunRight",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PARKER, {
        start: 23,
        end: 26
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn2",
      frames: [{ key: CST.SPRITE.PINKDUDE, frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "right2",
      frames: this.anims.generateFrameNumbers(CST.SPRITE.PINKDUDE, {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });
  }

  create() {
    this.add.image(0, 0, CST.IMAGE.SUNSET).setOrigin(0, 0);

    player1 = this.physics.add.sprite(100, 450, CST.SPRITE.PARKER).setScale(2);
    player1.body.gravity.y = 10000;
    player2 = this.physics.add
      .sprite(700, 450, CST.SPRITE.PINKDUDE)
      .setScale(2);
    player2.body.gravity.y = 10000;
    player1.setBounce(0.1);
    player2.setBounce(0.1);

    platforms = this.physics.add.staticGroup();
    platforms
      .create(400, 650, CST.IMAGE.GROUND)
      .setScale(3)
      .refreshBody();
    platforms.create(400, 400, CST.IMAGE.PLATFORM);
    platforms.create(50, 250, CST.IMAGE.PLATFORM);
    platforms.create(700, 220, CST.IMAGE.PLATFORM);

    sunflower = this.physics.add
      .sprite(100, 505, CST.PLANTSPRITE.PLANTS)
      .setScale(4);
    sunflower.body.gravity.y = 1000;
    rose = this.physics.add
      .sprite(700, 100, CST.PLANTSPRITE.PLANTS)
      .setScale(4);
    rose.body.gravity.y = 1000;
    tulip = this.physics.add
      .sprite(100, 100, CST.PLANTSPRITE.PLANTS)
      .setScale(4);
    tulip.body.gravity.y = 1000;
    scoreText1 = this.add.text(16, 16, "Player 1: 0", {
      fontSize: "32px",
      fill: "#FF0"
    });
    health1 = this.add.text(16, 50, "Health: 100", {
      fontSize: "32px",
      fill: "#F00"
    });
    scoreText2 = this.add.text(560, 16, "Player 2: 0", {
      fontSize: "32px",
      fill: "#FF0"
    });
    health2 = this.add.text(560, 50, "Health: 100", {
      fontSize: "32px",
      fill: "#F00"
    });

    waterDrops = this.physics.add.group({
      key: CST.IMAGE.WATER,
      // gravity: { y: 300 },
      repeat: 0,
      setXY: { x: 400, y: 400, stepX: 45 }
    });
    sunDrops = this.physics.add.group({
      key: CST.IMAGE.SUN,
      setXY: { x: 350, y: 0 }
    });

    waterDrops.children.iterate(child => {
      child.setScale(4);
      child.body.gravity.y = 100;
    });

    sunDrops.children.iterate(child => {
      child.setScale(4);
      child.body.gravity.y = 100;
    });

    thunderDrops = this.physics.add.group({
      key: CST.IMAGE.THUNDER,
      repeat: 0,
      setXY: { x: 300, y: 0, stepX: 0 }
    });

    thunderDrops.children.iterate(child => {
      child.body.gravity.y = 1000;
      child.setScale(2);
    });
    player1.setCollideWorldBounds(true);
    player2.setCollideWorldBounds(true);
    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(player2, platforms);
    // this.physics.add.collider(waterDrops, platforms);
    // this.physics.add.collider(sunDrops, platforms);
    this.physics.add.collider(sunflower, platforms);
    this.physics.add.collider(rose, platforms);
    this.physics.add.collider(tulip, platforms);
    this.physics.add.overlap(player1, sunDrops, this.collectSun, null, this);
    this.physics.add.overlap(
      player1,
      waterDrops,
      this.collectWater,
      null,
      this
    );
    this.physics.add.overlap(
      player1,
      sunflower,
      this.feedSunflower,
      null,
      this
    );
    this.physics.add.overlap(player1, tulip, this.feedTulip, null, this);
    this.physics.add.overlap(player1, rose, this.feedRose, null, this);

    this.physics.add.overlap(
      player1,
      thunderDrops,
      this.thunderStrike,
      null,
      this
    );
    this.physics.add.overlap(
      player2,
      thunderDrops,
      this.thunderStrike2,
      null,
      this
    );
    this.physics.add.overlap(player2, sunDrops, this.collectSun2, null, this);
    this.physics.add.overlap(
      player2,
      waterDrops,
      this.collectWater2,
      null,
      this
    );
    this.physics.add.overlap(
      player2,
      sunflower,
      this.feedSunflower2,
      null,
      this
    );
    this.physics.add.overlap(player2, tulip, this.feedTulip2, null, this);
    this.physics.add.overlap(player2, rose, this.feedRose2, null, this);

    this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.counter = 0;
  }

  update(time, delta) {
    scoreText1.setText("Player 1: " + scorePlayer1);
    scoreText2.setText("Player 2: " + scorePlayer2);
    health1.setText("Health: " + healthPlayer1);
    health2.setText("Health: " + healthPlayer2);

    if (healthPlayer1 <= 0) {
      this.deathPlayer1();
    }
    if (healthPlayer2 <= 0) {
      this.deathPlayer2();
    }

    if (tulipStage == 5 && sunflowerStage == 5 && roseStage == 5) {
      scorePlayer1 > scorePlayer2 ? totalScorePlayer1++ : totalScorePlayer2++;
      this.scene.start(CST.SCENES.GAMEOVER);
    }

    if (scorePlayer1 >= 100 || scorePlayer2 >= 100) {
      scorePlayer1 > scorePlayer2 ? totalScorePlayer1++ : totalScorePlayer2++;
      this.scene.start(CST.SCENES.GAMEOVER);
    }
    if (inventoryPlayer1.includes("sun")) {
      player1.play("parkerSun", true);
    }
    if (inventoryPlayer1.includes("water")) {
      player1.play("parkerWater", true);
    }
    if (inventoryPlayer2.includes("sun")) {
      player2.play("andriwSun", true);
    }
    if (inventoryPlayer2.includes("water")) {
      player2.play("andriwWater", true);
    }

    this.updateCounter();
    let randomNumber = Math.floor(Math.random() * (10 - 6) + 6);
    switch (sunflowerStage) {
      case 0:
        sunflower.play("P1", true);
        break;
      case 1:
        sunflower.play("P2", true);
        break;
      case 2:
        sunflower.play("P3", true);
        break;
      case 3:
        sunflower.play("P4", true);
        break;
      case 4:
        sunflower.play("P5", true);
        break;
      case 5:
        sunflower.play("P6", false);
        break;
    }
    switch (roseStage) {
      case 0:
        rose.play("P1", true);
        break;
      case 1:
        rose.play("P2", true);
        break;
      case 2:
        rose.play("P3", true);
        break;
      case 3:
        rose.play("P4", true);
        break;
      case 4:
        rose.play("P5", true);
        break;
      case 5:
        rose.play("P7", false);
        break;
    }
    switch (tulipStage) {
      case 0:
        tulip.play("P1", true);
        break;
      case 1:
        tulip.play("P2", true);
        break;
      case 2:
        tulip.play("P3", true);
        break;
      case 3:
        tulip.play("P4", true);
        break;
      case 4:
        tulip.play("P5", true);
        break;
      case 5:
        tulip.play("P9", false);
        break;
    }

    if (this.keyboard.D.isDown == true) {
      player1.setVelocityX(500);
      if (inventoryPlayer1.includes("sun")) {
        player1.anims.play("parkerSunRight", true);
      } else if (inventoryPlayer1.includes("water")) {
        player1.anims.play("parkerWaterRight", true);
      } else {
        player1.anims.play("right", true);
      }
    }
    if (this.keyboard.A.isDown == true) {
      player1.setVelocityX(-500);
      if (inventoryPlayer1.includes("sun")) {
        player1.anims.play("parkerSunLeft", true);
      } else if (inventoryPlayer1.includes("water")) {
        player1.anims.play("parkerWaterLeft", true);
      } else {
        player1.anims.play("left", true);
      }
    }
    if (this.keyboard.W.isDown == true && player1.body.touching.down) {
      player1.setVelocityY(-2000);
    }
    if (this.keyboard.W.isUp == true) {
      // player1.setVelocityY(0);
    }

    if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
      player1.setVelocityX(0);
      if (inventoryPlayer1.length == 0) {
        player1.play("turn", true);
      }
      // player1.play("turn", true);
    }

    //PLAYER 2

    if (this.cursors.left.isDown) {
      player2.setVelocityX(-500);
      if (inventoryPlayer2.includes("sun")) {
        player2.anims.play("andriwSunLeft", true);
      } else if (inventoryPlayer2.includes("water")) {
        player2.anims.play("andriwWaterLeft", true);
      } else {
        player2.anims.play("left2", true);
      }
    } else if (this.cursors.right.isDown) {
      player2.setVelocityX(500);

      if (inventoryPlayer2.includes("sun")) {
        player2.anims.play("andriwSunRight", true);
      } else if (inventoryPlayer2.includes("water")) {
        player2.anims.play("andriwWaterRight", true);
      } else {
        player2.anims.play("right2", true);
      }
    } else {
      player2.setVelocityX(0);
      if (inventoryPlayer2.length == 0) {
        player2.anims.play("turn2");
      }
    }
    if (this.cursors.up.isDown && player2.body.touching.down) {
      player2.setVelocityY(-2000);
    }
  }

  updateCounter() {
    this.counter++;
    var randomPosition = Phaser.Math.Between(0, 800);
    if (this.counter % 200 === 0) {
      this.rain();
    }
    if (this.counter % 300 === 0) {
      this.sunshine();
    }
    if (this.counter % 400 === 0) {
      this.thunder();
    }
  }

  collectSun() {
    if (
      !inventoryPlayer1.includes("water") &&
      !inventoryPlayer1.includes("sun")
    ) {
      inventoryPlayer1 = ["sun"];
      sunDrops.children.iterate(child => {
        child.y = 1000;
      });
      //NEW STUFF
      // sunDrops.disableBody(true, true);
    }

    console.log(inventoryPlayer1);
  }
  collectSun2() {
    if (
      !inventoryPlayer2.includes("water") &&
      !inventoryPlayer2.includes("sun")
    ) {
      inventoryPlayer2 = ["sun"];
      sunDrops.children.iterate(child => {
        child.y = 1000;
      });
    }

    console.log(inventoryPlayer2);
  }

  collectWater() {
    if (
      !inventoryPlayer1.includes("water") &&
      !inventoryPlayer1.includes("sun")
    ) {
      inventoryPlayer1 = ["water"];
      waterDrops.children.iterate(child => {
        child.y = 1000;
      });
    }
    console.log(inventoryPlayer1);
  }
  collectWater2() {
    if (
      !inventoryPlayer2.includes("water") &&
      !inventoryPlayer2.includes("sun")
    ) {
      inventoryPlayer2 = ["water"];
      waterDrops.children.iterate(child => {
        child.y = 1000;
      });
    }
    console.log(inventoryPlayer2);
  }

  feedSunflower() {
    if (sunflowerStage < 5) {
      if (inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer1 += 10;
        sunflowerStage += 1;
        inventoryPlayer1 = [];
      }
      if (inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer1 += 10;
        sunflowerStage++;
        inventoryPlayer1 = [];
      }
    }
  }
  feedSunflower2() {
    if (sunflowerStage < 5) {
      if (inventoryPlayer2.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer2 += 10;
        sunflowerStage += 1;
        inventoryPlayer2 = [];
      }
      if (inventoryPlayer2.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer2 += 10;
        sunflowerStage++;
        inventoryPlayer2 = [];
      }
    }
  }

  feedRose() {
    if (roseStage < 5) {
      if (inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer1 += 10;
        roseStage += 1;
        inventoryPlayer1 = [];
      }
      if (inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer1 += 10;
        roseStage++;
        inventoryPlayer1 = [];
      }
    }
  }
  feedRose2() {
    if (roseStage < 5) {
      if (inventoryPlayer2.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer2 += 10;
        roseStage += 1;
        inventoryPlayer2 = [];
      }
      if (inventoryPlayer2.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer2 += 10;
        roseStage++;
        inventoryPlayer2 = [];
      }
    }
  }
  feedTulip() {
    if (tulipStage < 5) {
      if (inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer1 += 10;
        tulipStage += 1;
        inventoryPlayer1 = [];
      }
      if (inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer1 += 10;
        tulipStage++;
        inventoryPlayer1 = [];
      }
    }
  }
  feedTulip2() {
    if (tulipStage < 5) {
      if (inventoryPlayer2.includes("water")) {
        console.log("feeding plant with water");
        scorePlayer2 += 10;
        tulipStage += 1;
        inventoryPlayer2 = [];
      }
      if (inventoryPlayer2.includes("sun")) {
        console.log("feeding plant with sun");
        scorePlayer2 += 10;
        tulipStage++;
        inventoryPlayer2 = [];
      }
    }
  }

  thunder() {
    // this.cameras.main.shake(25);
    let randomPos = Phaser.Math.Between(0, 800);
    thunderDrops.children.iterate(function(child) {
      child.enableBody(true, randomPos, 0, true, true);
    });
  }

  sunshine() {
    let randomPos = Phaser.Math.Between(0, 800);
    sunDrops.children.iterate(function(child) {
      child.enableBody(true, randomPos, 0, true, true);
    });
  }
  rain() {
    let randomPos = Phaser.Math.Between(0, 800);
    waterDrops.children.iterate(function(child) {
      child.enableBody(true, randomPos, 0, true, true);
    });
  }

  thunderStrike() {
    this.cameras.main.shake(50);
    healthPlayer1 -= 5;
    player1.setTint(0x0000ff);
    setTimeout(function() {
      player1.setTint(0xffffff);
    }, 750);
  }

  thunderStrike2() {
    this.cameras.main.shake(50);
    healthPlayer2 -= 5;
    player2.setTint(0x0000ff);
    setTimeout(function() {
      player2.setTint(0xffffff);
    }, 750);
  }
  deathPlayer1() {
    player1.setTint(0xff0000);
    player1.disableBody();
  }
  deathPlayer2() {
    player2.setTint(0xff0000);
    player2.disableBody();
  }
}
