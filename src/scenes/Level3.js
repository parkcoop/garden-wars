import { CST } from "../CST";

let sunflowerStage = 0;
let tulipStage = 0;
let roseStage = 0;

export class Level3 extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.LEVEL3 });

    this.parker;
  }

  preload() {
    // this.load.spritesheet(CST.PLANTSPRITE.PLANTS, "assets/flowers.png", {
    //   frameWidth: 11,
    //   frameHeight: 23
    // });
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
    this.add.image(0, 0, CST.IMAGE.SUNNY).setOrigin(0, 0);

    this.parker = this.physics.add
      .sprite(100, 450, CST.SPRITE.PARKER)
      .setScale(2);

    this.pinkDude = this.physics.add
      .sprite(700, 450, CST.SPRITE.PINKDUDE)
      .setScale(2);

    //

    // this.parker.setBounce(3);

    this.parker.setBounce(0.5);
    this.pinkDude.setBounce(0.5);

    //PLATFORMS
    //
    ///
    //
    //
    //
    //

    let platforms = this.physics.add.staticGroup();
    platforms
      .create(400, 650, CST.IMAGE.GROUND)
      .setScale(3)
      .refreshBody();
    platforms.create(400, 400, CST.IMAGE.PLATFORM);
    platforms.create(50, 250, CST.IMAGE.PLATFORM);
    platforms.create(700, 220, CST.IMAGE.PLATFORM);

    //PLANTS

    // let plants = this.physics.add.staticGroup();
    // let plant1 = this.physics.add.sprite(700, 450, CST.IMAGE.P1).setScale(2);
    // plants
    //   .create(100, 190, CST.IMAGE.P1)
    //   .setScale(4)
    //   .refreshBody();

    //
    //

    //

    //

    //
    //FLOWERS

    this.sunflower = this.physics.add
      .sprite(100, 505, CST.PLANTSPRITE.PLANTS)
      .setScale(4);

    this.rose = this.physics.add
      .sprite(700, 100, CST.PLANTSPRITE.PLANTS)
      .setScale(4);
    this.tulip = this.physics.add
      .sprite(100, 100, CST.PLANTSPRITE.PLANTS)
      .setScale(4);
    //
    //

    //
    //
    //
    //

    //Score text

    this.score1 = this.add.text(16, 16, "Player 1: 0", {
      fontSize: "32px",
      fill: "#FF0"
    });

    this.score2 = this.add.text(570, 16, "Player 2: 0", {
      fontSize: "32px",
      fill: "#FF0"
    });

    let waterDrops = this.physics.add.group({
      key: CST.IMAGE.WATER,
      // gravity: { y: 300 },
      repeat: 0,
      setXY: { x: 400, y: 400, stepX: 45 }
    });
    let sunDrops = this.physics.add.group({
      key: CST.IMAGE.SUN,
      setXY: { x: 350, y: 0 }
    });

    waterDrops.children.iterate(child => {
      child.setScale(4);
    });

    sunDrops.children.iterate(child => {
      child.setScale(4);
    });
    // function removeSun() {
    //   sunDrops.disableBody(true, true);
    // }
    //Physics properties
    //
    //
    //
    //
    //

    //
    //

    this.parker.setCollideWorldBounds(true);
    this.pinkDude.setCollideWorldBounds(true);
    this.physics.add.collider(this.parker, platforms);
    this.physics.add.collider(this.pinkDude, platforms);
    this.physics.add.collider(waterDrops, platforms);
    this.physics.add.collider(sunDrops, platforms);
    // this.physics.add.collider(plant1, platforms);
    this.physics.add.collider(this.sunflower, platforms);
    this.physics.add.collider(this.rose, platforms);
    this.physics.add.collider(this.tulip, platforms);
    this.physics.add.overlap(
      this.parker,
      sunDrops,
      this.collectSun,
      null,
      this
    );
    this.physics.add.overlap(
      this.parker,
      waterDrops,
      this.collectWater,
      null,
      this
    );
    // this.physics.add.overlap(this.parker, plants, this.feedPlant, null, this);
    // this.physics.add.overlap(this.parker, plant1, this.feedPlant, null, this);
    this.physics.add.overlap(
      this.parker,
      this.sunflower,
      this.feedSunflower,
      null,
      this
    );
    this.physics.add.overlap(
      this.parker,
      this.tulip,
      this.feedTulip,
      null,
      this
    );
    this.physics.add.overlap(this.parker, this.rose, this.feedRose, null, this);

    // this.physics.add.collider(this.pinkDude, this.parker);

    //Keyboard inputs
    this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
    this.cursors = this.input.keyboard.createCursorKeys();
    this.counter = 0;
    // this.timerEvent = this.time.addEvent({ delay: 10000, repeat: 9 });
  }

  update(time, delta) {
    this.score1.setText("Player 1: " + this.scorePlayer1);
    this.score2.setText("Player 2: " + this.scorePlayer2);

    if (this.scorePlayer1 >= 100) {
      this.scene.start(CST.SCENES.LEVEL2);
    }
    if (this.inventoryPlayer1.includes("sun")) {
      this.parker.play("parkerSun", true);
    }
    if (this.inventoryPlayer1.includes("water")) {
      this.parker.play("parkerWater", true);
    }

    this.updateCounter();
    let randomNumber = Math.floor(Math.random() * (10 - 6) + 6);
    switch (sunflowerStage) {
      case 0:
        this.sunflower.play("P1", true);
        break;
      case 1:
        this.sunflower.play("P2", true);
        break;
      case 2:
        this.sunflower.play("P3", true);
        break;
      case 3:
        this.sunflower.play("P4", true);
        break;
      case 4:
        this.sunflower.play("P5", true);
        break;
      case 5:
        this.sunflower.play("P6", false);
        break;
    }
    switch (roseStage) {
      case 0:
        this.rose.play("P1", true);
        break;
      case 1:
        this.rose.play("P2", true);
        break;
      case 2:
        this.rose.play("P3", true);
        break;
      case 3:
        this.rose.play("P4", true);
        break;
      case 4:
        this.rose.play("P5", true);
        break;
      case 5:
        this.rose.play("P7", false);
        break;
    }
    switch (tulipStage) {
      case 0:
        this.tulip.play("P1", true);
        break;
      case 1:
        this.tulip.play("P2", true);
        break;
      case 2:
        this.tulip.play("P3", true);
        break;
      case 3:
        this.tulip.play("P4", true);
        break;
      case 4:
        this.tulip.play("P5", true);
        break;
      case 5:
        this.tulip.play("P9", false);
        break;
    }

    //KEYBOARD CONTROL

    if (this.keyboard.D.isDown == true) {
      this.parker.setVelocityX(500);
      this.parker.play("right", true);
    }
    if (this.keyboard.A.isDown == true) {
      this.parker.setVelocityX(-500);
      this.parker.play("left", true);
    }
    if (this.keyboard.W.isDown == true && this.parker.body.touching.down) {
      this.parker.setVelocityY(-2000);
    }
    if (this.keyboard.W.isUp == true) {
      this.parker.setVelocityY(0);
    }

    if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
      this.parker.setVelocityX(0);
      if (this.inventoryPlayer1.length == 0) {
        this.parker.play("turn", true);
      }
      // this.parker.play("turn", true);
    }

    //PLAYER 2

    if (this.cursors.left.isDown) {
      this.pinkDude.setVelocityX(-500);

      this.pinkDude.anims.play("left2", true);
    } else if (this.cursors.right.isDown) {
      this.pinkDude.setVelocityX(500);

      this.pinkDude.anims.play("right2", true);
    } else {
      this.pinkDude.setVelocityX(0);

      this.pinkDude.anims.play("turn2");
    }

    if (this.cursors.up.isDown && this.pinkDude.body.touching.down) {
      this.pinkDude.setVelocityY(-1000);
    }
  }

  updateCounter() {
    this.counter++;
    var randomPosition = Phaser.Math.Between(0, 800);
    if (this.counter % 300 === 0) {
      // this.sunDrops.children.iterate(function(child) {
      //   //Re-renders stars in child.x position
      //   child.enableBody(true, child.x, 0, true, true);
      // });
    }
    if (this.counter % 400 === 0) {
      console.log("sun time");
    }
  }

  collectSun() {
    if (!this.inventoryPlayer1.includes("water")) {
      this.inventoryPlayer1 = ["sun"];
    }

    console.log(this.inventoryPlayer1);
  }
  collectWater() {
    if (!this.inventoryPlayer1.includes("sun")) {
      this.inventoryPlayer1 = ["water"];
    }
    console.log(this.inventoryPlayer1);
  }

  feedSunflower() {
    if (sunflowerStage < 5) {
      if (this.inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        this.scorePlayer1 += 10;
        sunflowerStage += 1;
        this.inventoryPlayer1 = [];
      }
      if (this.inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        this.scorePlayer1 += 10;
        sunflowerStage++;
        this.inventoryPlayer1 = [];
      }
    }
  }

  feedRose() {
    if (roseStage < 5) {
      if (this.inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        this.scorePlayer1 += 10;
        roseStage += 1;
        this.inventoryPlayer1 = [];
      }
      if (this.inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        this.scorePlayer1 += 10;
        roseStage++;
        this.inventoryPlayer1 = [];
      }
    }
  }
  feedTulip() {
    if (tulipStage < 5) {
      if (this.inventoryPlayer1.includes("water")) {
        console.log("feeding plant with water");
        this.scorePlayer1 += 10;
        tulipStage += 1;
        this.inventoryPlayer1 = [];
      }
      if (this.inventoryPlayer1.includes("sun")) {
        console.log("feeding plant with sun");
        this.scorePlayer1 += 10;
        tulipStage++;
        this.inventoryPlayer1 = [];
      }
    }
  }
}
