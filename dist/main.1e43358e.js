// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY",
    LEVEL2: "LEVEL2",
    LEVEL3: "LEVEL3"
  },
  IMAGE: {
    LOGO: "logo.png",
    TITLE: "sunset.png",
    PLAY: "play.png",
    QUIT: "quit.png",
    SUNNY: "sky.png",
    FOREST: "forest.png",
    SUNSET: "sunset.png",
    GROUND: "ground.png",
    PLATFORM: "platform.png",
    SUN: "sun.png",
    WATER: "water.png",
    PLANT: "plant.png",
    THUNDER: "thunder.png",
    L1: "L1.png",
    L2: "L2.png",
    L3: "L3.png",
    L4: "L4.png",
    L5: "L5.png",
    L6: "L6.png",
    L7: "L7.png",
    P1: "PStage1.png"
  },
  AUDIO: {
    TITLE: "title.ogg"
  },
  SPRITE: {
    PARKER: "parker.png",
    PINKDUDE: "pinkdude.png",
    PARKERSUN: "dudeSUN.png",
    PARKERWATER: "dudeWATER.png",
    SUNFLOWER: "sunflower.png"
  },
  PLANTSPRITE: {
    PLANTS: "flowers.png"
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "loadImages",
    value: function loadImages() {
      this.load.setPath("./assets/image");

      for (var prop in _CST.CST.IMAGE) {
        this.load.image(_CST.CST.IMAGE[prop], _CST.CST.IMAGE[prop]);
      }
    }
  }, {
    key: "loadAudio",
    value: function loadAudio() {
      this.load.setPath("./assets/audio");

      for (var prop in _CST.CST.AUDIO) {
        this.load.audio(_CST.CST.AUDIO[prop], _CST.CST.AUDIO[prop]);
      }
    }
  }, {
    key: "loadSprites",
    value: function loadSprites(frameConfig) {
      this.load.setPath("./assets/sprite");

      for (var prop in _CST.CST.SPRITE) {
        this.load.spritesheet(_CST.CST.SPRITE[prop], _CST.CST.SPRITE[prop], frameConfig);
      }
    }
  }, {
    key: "loadPlants",
    value: function loadPlants(frameConfig) {
      this.load.setPath("./assets/plantSprite");

      for (var prop in _CST.CST.PLANTSPRITE) {
        this.load.spritesheet(_CST.CST.PLANTSPRITE[prop], _CST.CST.PLANTSPRITE[prop], frameConfig);
      }
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

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
      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff
        }
      }); //simulates large load
      // for (let i = 0; i < 100; i++) {
      //   this.load.spritesheet("dude" + i, "./assets/dude.png", {
      //     frameWidth: 32,
      //     frameHeight: 48
      //   });
      // }

      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
        console.log(percent);
      });
      this.load.on("complete", function () {
        console.log("Finsihed loading");
      });
      this.load.on("load", function (file) {
        console.log(file.src);
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //Background load
      // this.add.image(0, 0, CST.IMAGE.TITLE).setOrigin(0, 0);
      this.sound.play(_CST.CST.AUDIO.TITLE);
      this.L2 = this.add.sprite(0, // x-axis
      0, // y-axis
      _CST.CST.IMAGE.L2 //given name
      ).setOrigin(0, 0).setScale(3);
      this.L1 = this.add.sprite(-50, // x-axis
      100, // y-axis
      _CST.CST.IMAGE.L1 //given name
      ).setOrigin(0, 0).setScale(3);
      this.L3 = this.add.sprite(-150, // x-axis
      180, // y-axis
      _CST.CST.IMAGE.L3 //given name
      ).setOrigin(0, 0).setScale(2);
      this.L4 = this.add.sprite(0, // x-axis
      0, // y-axis
      _CST.CST.IMAGE.L4 //given name
      ).setOrigin(0, 0).setScale(3);
      this.L5 = this.add.sprite(-300, // x-axis
      0, // y-axis
      _CST.CST.IMAGE.L5 //given name
      ).setOrigin(0, 0).setScale(3);
      this.L6 = this.add.sprite(-300, // x-axis
      0, // y-axis
      _CST.CST.IMAGE.L6 //given name
      ).setOrigin(0, 0).setScale(3);
      this.L7 = this.add.sprite(-300, // x-axis
      0, // y-axis
      _CST.CST.IMAGE.L7 //given name
      ).setOrigin(0, 0).setScale(3); //Logo render

      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, _CST.CST.IMAGE.LOGO).setScale(0.5); //Play button assignment/render

      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, _CST.CST.IMAGE.PLAY).setDepth(1); //quit button render
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
      playButton.on("pointerdown", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY);
      });
      playButton.setInteractive();
      playButton.on("pointerout", function () {
        console.log("outahh here");
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.L1.y -= 0.15;
      this.L5.x -= 0.05;
      this.L6.x -= 0.05;
      this.L7.x -= 0.1;
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var sunflowerStage = 0;
var tulipStage = 0;
var roseStage = 0;
var scorePlayer1 = 0;

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  function PlayScene() {
    var _this;

    _classCallCheck(this, PlayScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
    _this.inventoryPlayer1 = [];
    _this.parker;
    return _this;
  }

  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      // this.load.spritesheet(CST.PLANTSPRITE.PLANTS, "assets/flowers.png", {
      //   frameWidth: 11,
      //   frameHeight: 23
      // });
      this.anims.create({
        key: "P1",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 0
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P2",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 1
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P3",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 2
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P4",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 3
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P5",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P6",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 5
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P7",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 6
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P8",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 7
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P9",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 8
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn",
        frames: [{
          key: _CST.CST.SPRITE.PARKER,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerSun",
        frames: [{
          key: _CST.CST.SPRITE.PARKERSUN,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerWater",
        frames: [{
          key: _CST.CST.SPRITE.PARKERWATER,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn2",
        frames: [{
          key: _CST.CST.SPRITE.PINKDUDE,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, _CST.CST.IMAGE.SUNNY).setOrigin(0, 0);
      this.parker = this.physics.add.sprite(100, 450, _CST.CST.SPRITE.PARKER).setScale(2);
      this.pinkDude = this.physics.add.sprite(700, 450, _CST.CST.SPRITE.PINKDUDE).setScale(2); //
      // this.parker.setBounce(3);

      this.parker.setBounce(0.5);
      this.pinkDude.setBounce(0.5); //PLATFORMS
      //
      ///
      //
      //
      //
      //

      var platforms = this.physics.add.staticGroup();
      platforms.create(400, 650, _CST.CST.IMAGE.GROUND).setScale(3).refreshBody();
      platforms.create(400, 400, _CST.CST.IMAGE.PLATFORM);
      platforms.create(50, 250, _CST.CST.IMAGE.PLATFORM);
      platforms.create(700, 220, _CST.CST.IMAGE.PLATFORM); //PLANTS
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

      this.sunflower = this.physics.add.sprite(100, 505, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.rose = this.physics.add.sprite(700, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.tulip = this.physics.add.sprite(100, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4); //
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
      var waterDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.WATER,
        // gravity: { y: 300 },
        repeat: 0,
        setXY: {
          x: 400,
          y: 400,
          stepX: 45
        }
      });
      var sunDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.SUN,
        setXY: {
          x: 350,
          y: 0
        }
      });
      waterDrops.children.iterate(function (child) {
        child.setScale(4);
      });
      sunDrops.children.iterate(function (child) {
        child.setScale(4);
      }); // function removeSun() {
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
      this.physics.add.collider(sunDrops, platforms); // this.physics.add.collider(plant1, platforms);

      this.physics.add.collider(this.sunflower, platforms);
      this.physics.add.collider(this.rose, platforms);
      this.physics.add.collider(this.tulip, platforms);
      this.physics.add.overlap(this.parker, sunDrops, this.collectSun, null, this);
      this.physics.add.overlap(this.parker, waterDrops, this.collectWater, null, this); // this.physics.add.overlap(this.parker, plants, this.feedPlant, null, this);
      // this.physics.add.overlap(this.parker, plant1, this.feedPlant, null, this);

      this.physics.add.overlap(this.parker, this.sunflower, this.feedSunflower, null, this);
      this.physics.add.overlap(this.parker, this.tulip, this.feedTulip, null, this);
      this.physics.add.overlap(this.parker, this.rose, this.feedRose, null, this); // this.physics.add.collider(this.pinkDude, this.parker);
      //Keyboard inputs

      this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
      this.cursors = this.input.keyboard.createCursorKeys();
      this.counter = 0; // this.timerEvent = this.time.addEvent({ delay: 10000, repeat: 9 });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.score1.setText("Player 1: " + this.scorePlayer1);
      this.score2.setText("Player 2: " + this.scorePlayer2);

      if (this.scorePlayer1 >= 100) {
        this.scene.start(_CST.CST.SCENES.LEVEL2);
      }

      if (this.inventoryPlayer1.includes("sun")) {
        this.parker.play("parkerSun", true);
      }

      if (this.inventoryPlayer1.includes("water")) {
        this.parker.play("parkerWater", true);
      }

      this.updateCounter();
      var randomNumber = Math.floor(Math.random() * (10 - 6) + 6);

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
      } //KEYBOARD CONTROL


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
        } // this.parker.play("turn", true);

      } //PLAYER 2


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
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      this.counter++;
      var randomPosition = Phaser.Math.Between(0, 800);

      if (this.counter % 300 === 0) {// this.sunDrops.children.iterate(function(child) {
        //   //Re-renders stars in child.x position
        //   child.enableBody(true, child.x, 0, true, true);
        // });
      }

      if (this.counter % 400 === 0) {
        console.log("sun time");
      }
    }
  }, {
    key: "collectSun",
    value: function collectSun() {
      if (!this.inventoryPlayer1.includes("water")) {
        this.inventoryPlayer1 = ["sun"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "collectWater",
    value: function collectWater() {
      if (!this.inventoryPlayer1.includes("sun")) {
        this.inventoryPlayer1 = ["water"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "feedSunflower",
    value: function feedSunflower() {
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
  }, {
    key: "feedRose",
    value: function feedRose() {
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
  }, {
    key: "feedTulip",
    value: function feedTulip() {
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
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js"}],"src/scenes/Level2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level2 = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var sunflowerStage = 0;
var tulipStage = 0;
var roseStage = 0;

var Level2 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Level2, _Phaser$Scene);

  function Level2() {
    var _this;

    _classCallCheck(this, Level2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level2).call(this, {
      key: _CST.CST.SCENES.LEVEL2
    }));
    _this.parker;
    return _this;
  }

  _createClass(Level2, [{
    key: "preload",
    value: function preload() {
      // this.load.spritesheet(CST.PLANTSPRITE.PLANTS, "assets/flowers.png", {
      //   frameWidth: 11,
      //   frameHeight: 23
      // });
      this.anims.create({
        key: "P1",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 0
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P2",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 1
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P3",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 2
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P4",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 3
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P5",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P6",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 5
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P7",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 6
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P8",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 7
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P9",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 8
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn",
        frames: [{
          key: _CST.CST.SPRITE.PARKER,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerSun",
        frames: [{
          key: _CST.CST.SPRITE.PARKERSUN,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerWater",
        frames: [{
          key: _CST.CST.SPRITE.PARKERWATER,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn2",
        frames: [{
          key: _CST.CST.SPRITE.PINKDUDE,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, _CST.CST.IMAGE.SUNNY).setOrigin(0, 0);
      this.parker = this.physics.add.sprite(100, 450, _CST.CST.SPRITE.PARKER).setScale(2);
      this.pinkDude = this.physics.add.sprite(700, 450, _CST.CST.SPRITE.PINKDUDE).setScale(2); //
      // this.parker.setBounce(3);

      this.parker.setBounce(0.5);
      this.pinkDude.setBounce(0.5); //PLATFORMS
      //
      ///
      //
      //
      //
      //

      var platforms = this.physics.add.staticGroup();
      platforms.create(400, 650, _CST.CST.IMAGE.GROUND).setScale(3).refreshBody();
      platforms.create(400, 400, _CST.CST.IMAGE.PLATFORM);
      platforms.create(50, 250, _CST.CST.IMAGE.PLATFORM);
      platforms.create(700, 220, _CST.CST.IMAGE.PLATFORM); //PLANTS
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

      this.sunflower = this.physics.add.sprite(100, 505, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.rose = this.physics.add.sprite(700, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.tulip = this.physics.add.sprite(100, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4); //
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
      var waterDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.WATER,
        // gravity: { y: 300 },
        repeat: 0,
        setXY: {
          x: 400,
          y: 400,
          stepX: 45
        }
      });
      var sunDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.SUN,
        setXY: {
          x: 350,
          y: 0
        }
      });
      waterDrops.children.iterate(function (child) {
        child.setScale(4);
      });
      sunDrops.children.iterate(function (child) {
        child.setScale(4);
      }); // function removeSun() {
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
      this.physics.add.collider(sunDrops, platforms); // this.physics.add.collider(plant1, platforms);

      this.physics.add.collider(this.sunflower, platforms);
      this.physics.add.collider(this.rose, platforms);
      this.physics.add.collider(this.tulip, platforms);
      this.physics.add.overlap(this.parker, sunDrops, this.collectSun, null, this);
      this.physics.add.overlap(this.parker, waterDrops, this.collectWater, null, this); // this.physics.add.overlap(this.parker, plants, this.feedPlant, null, this);
      // this.physics.add.overlap(this.parker, plant1, this.feedPlant, null, this);

      this.physics.add.overlap(this.parker, this.sunflower, this.feedSunflower, null, this);
      this.physics.add.overlap(this.parker, this.tulip, this.feedTulip, null, this);
      this.physics.add.overlap(this.parker, this.rose, this.feedRose, null, this); // this.physics.add.collider(this.pinkDude, this.parker);
      //Keyboard inputs

      this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
      this.cursors = this.input.keyboard.createCursorKeys();
      this.counter = 0; // this.timerEvent = this.time.addEvent({ delay: 10000, repeat: 9 });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.score1.setText("Player 1: " + this.scorePlayer1);
      this.score2.setText("Player 2: " + this.scorePlayer2);

      if (this.scorePlayer1 >= 100) {
        this.scene.start(_CST.CST.SCENES.LEVEL2);
      }

      if (this.inventoryPlayer1.includes("sun")) {
        this.parker.play("parkerSun", true);
      }

      if (this.inventoryPlayer1.includes("water")) {
        this.parker.play("parkerWater", true);
      }

      this.updateCounter();
      var randomNumber = Math.floor(Math.random() * (10 - 6) + 6);

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
      } //KEYBOARD CONTROL


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
        } // this.parker.play("turn", true);

      } //PLAYER 2


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
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      this.counter++;
      var randomPosition = Phaser.Math.Between(0, 800);

      if (this.counter % 300 === 0) {// this.sunDrops.children.iterate(function(child) {
        //   //Re-renders stars in child.x position
        //   child.enableBody(true, child.x, 0, true, true);
        // });
      }

      if (this.counter % 400 === 0) {
        console.log("sun time");
      }
    }
  }, {
    key: "collectSun",
    value: function collectSun() {
      if (!this.inventoryPlayer1.includes("water")) {
        this.inventoryPlayer1 = ["sun"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "collectWater",
    value: function collectWater() {
      if (!this.inventoryPlayer1.includes("sun")) {
        this.inventoryPlayer1 = ["water"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "feedSunflower",
    value: function feedSunflower() {
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
  }, {
    key: "feedRose",
    value: function feedRose() {
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
  }, {
    key: "feedTulip",
    value: function feedTulip() {
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
  }]);

  return Level2;
}(Phaser.Scene);

exports.Level2 = Level2;
},{"../CST":"src/CST.js"}],"src/scenes/Level3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level3 = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var sunflowerStage = 0;
var tulipStage = 0;
var roseStage = 0;

var Level3 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Level3, _Phaser$Scene);

  function Level3() {
    var _this;

    _classCallCheck(this, Level3);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level3).call(this, {
      key: _CST.CST.SCENES.LEVEL3
    }));
    _this.parker;
    return _this;
  }

  _createClass(Level3, [{
    key: "preload",
    value: function preload() {
      // this.load.spritesheet(CST.PLANTSPRITE.PLANTS, "assets/flowers.png", {
      //   frameWidth: 11,
      //   frameHeight: 23
      // });
      this.anims.create({
        key: "P1",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 0
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P2",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 1
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P3",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 2
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P4",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 3
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P5",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P6",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 5
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P7",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 6
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P8",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 7
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "P9",
        frames: [{
          key: _CST.CST.PLANTSPRITE.PLANTS,
          frame: 8
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn",
        frames: [{
          key: _CST.CST.SPRITE.PARKER,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerSun",
        frames: [{
          key: _CST.CST.SPRITE.PARKERSUN,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "parkerWater",
        frames: [{
          key: _CST.CST.SPRITE.PARKERWATER,
          frame: 9
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PARKER, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 0,
          end: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: "turn2",
        frames: [{
          key: _CST.CST.SPRITE.PINKDUDE,
          frame: 4
        }],
        frameRate: 20
      });
      this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.PINKDUDE, {
          start: 5,
          end: 8
        }),
        frameRate: 10,
        repeat: -1
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, _CST.CST.IMAGE.SUNNY).setOrigin(0, 0);
      this.parker = this.physics.add.sprite(100, 450, _CST.CST.SPRITE.PARKER).setScale(2);
      this.pinkDude = this.physics.add.sprite(700, 450, _CST.CST.SPRITE.PINKDUDE).setScale(2); //
      // this.parker.setBounce(3);

      this.parker.setBounce(0.5);
      this.pinkDude.setBounce(0.5); //PLATFORMS
      //
      ///
      //
      //
      //
      //

      var platforms = this.physics.add.staticGroup();
      platforms.create(400, 650, _CST.CST.IMAGE.GROUND).setScale(3).refreshBody();
      platforms.create(400, 400, _CST.CST.IMAGE.PLATFORM);
      platforms.create(50, 250, _CST.CST.IMAGE.PLATFORM);
      platforms.create(700, 220, _CST.CST.IMAGE.PLATFORM); //PLANTS
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

      this.sunflower = this.physics.add.sprite(100, 505, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.rose = this.physics.add.sprite(700, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4);
      this.tulip = this.physics.add.sprite(100, 100, _CST.CST.PLANTSPRITE.PLANTS).setScale(4); //
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
      var waterDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.WATER,
        // gravity: { y: 300 },
        repeat: 0,
        setXY: {
          x: 400,
          y: 400,
          stepX: 45
        }
      });
      var sunDrops = this.physics.add.group({
        key: _CST.CST.IMAGE.SUN,
        setXY: {
          x: 350,
          y: 0
        }
      });
      waterDrops.children.iterate(function (child) {
        child.setScale(4);
      });
      sunDrops.children.iterate(function (child) {
        child.setScale(4);
      }); // function removeSun() {
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
      this.physics.add.collider(sunDrops, platforms); // this.physics.add.collider(plant1, platforms);

      this.physics.add.collider(this.sunflower, platforms);
      this.physics.add.collider(this.rose, platforms);
      this.physics.add.collider(this.tulip, platforms);
      this.physics.add.overlap(this.parker, sunDrops, this.collectSun, null, this);
      this.physics.add.overlap(this.parker, waterDrops, this.collectWater, null, this); // this.physics.add.overlap(this.parker, plants, this.feedPlant, null, this);
      // this.physics.add.overlap(this.parker, plant1, this.feedPlant, null, this);

      this.physics.add.overlap(this.parker, this.sunflower, this.feedSunflower, null, this);
      this.physics.add.overlap(this.parker, this.tulip, this.feedTulip, null, this);
      this.physics.add.overlap(this.parker, this.rose, this.feedRose, null, this); // this.physics.add.collider(this.pinkDude, this.parker);
      //Keyboard inputs

      this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
      this.cursors = this.input.keyboard.createCursorKeys();
      this.counter = 0; // this.timerEvent = this.time.addEvent({ delay: 10000, repeat: 9 });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.score1.setText("Player 1: " + this.scorePlayer1);
      this.score2.setText("Player 2: " + this.scorePlayer2);

      if (this.scorePlayer1 >= 100) {
        this.scene.start(_CST.CST.SCENES.LEVEL2);
      }

      if (this.inventoryPlayer1.includes("sun")) {
        this.parker.play("parkerSun", true);
      }

      if (this.inventoryPlayer1.includes("water")) {
        this.parker.play("parkerWater", true);
      }

      this.updateCounter();
      var randomNumber = Math.floor(Math.random() * (10 - 6) + 6);

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
      } //KEYBOARD CONTROL


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
        } // this.parker.play("turn", true);

      } //PLAYER 2


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
  }, {
    key: "updateCounter",
    value: function updateCounter() {
      this.counter++;
      var randomPosition = Phaser.Math.Between(0, 800);

      if (this.counter % 300 === 0) {// this.sunDrops.children.iterate(function(child) {
        //   //Re-renders stars in child.x position
        //   child.enableBody(true, child.x, 0, true, true);
        // });
      }

      if (this.counter % 400 === 0) {
        console.log("sun time");
      }
    }
  }, {
    key: "collectSun",
    value: function collectSun() {
      if (!this.inventoryPlayer1.includes("water")) {
        this.inventoryPlayer1 = ["sun"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "collectWater",
    value: function collectWater() {
      if (!this.inventoryPlayer1.includes("sun")) {
        this.inventoryPlayer1 = ["water"];
      }

      console.log(this.inventoryPlayer1);
    }
  }, {
    key: "feedSunflower",
    value: function feedSunflower() {
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
  }, {
    key: "feedRose",
    value: function feedRose() {
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
  }, {
    key: "feedTulip",
    value: function feedTulip() {
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
  }]);

  return Level3;
}(Phaser.Scene);

exports.Level3 = Level3;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

var _Level = require("./scenes/Level2");

var _Level2 = require("./scenes/Level3");

var game = new Phaser.Game({
  width: 800,
  height: 600,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene, _Level.Level2, _Level2.Level3],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 10000
      },
      debug: false
    }
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js","./scenes/Level2":"src/scenes/Level2.js","./scenes/Level3":"src/scenes/Level3.js"}],"../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53301" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map