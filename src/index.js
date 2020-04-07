import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import { WIDTH, HEIGHT } from './config';

class ExampleScene extends Phaser.Scene {

  constructor() {
    super({ key: 'ExampleScene' });
  }

  preload() {
    this.load.image("logo", logoImg);
  }
  
  create() {
    const logo = this.add.image(400, 150, "logo");
    
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: WIDTH,
  height: HEIGHT,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [ExampleScene]
};

const game = new Phaser.Game(config);