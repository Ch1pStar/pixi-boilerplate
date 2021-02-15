import Assets from '../core/AssetManager';
import Scene from './Scene';
import { Text } from 'pixi.js';
import config from '../config';

export default class Splash extends Scene {
  constructor() {
    super();

    var tmpH1 = document.createElement('h1');
    document.body.appendChild(tmpH1);

    this.loadingText = new Text('0%', {
      fontSize: 75,
      fill: 0xffc900,
      fontFamily: 'Burbank'
    });

    this.config = config.scenes.Splash;

    this.loadingText.anchor.set(0.5);
    this.loadingText.x = this.width / 2;
    this.loadingText.y = this.height / 2;
    this.addChild(this.loadingText);
  }

  get finish() {
    return new Promise((res)=>setTimeout(res, this.config.hideDelay))
  }

  preload() {
    window.Assets = Assets
    const images = {
      gamepad: Assets.images.gamepad,
      arrow: Assets.images.arrow,
      'models/mandalorian/textures/02_-_Default_baseColor': Assets.images['models/mandalorian/textures/02_-_Default_baseColor'],
      'models/mandalorian/textures/08_-_Default_normal': Assets.images['models/mandalorian/textures/08_-_Default_normal'],
      'models/mandalorian/textures/ARMOUR_3_normal': Assets.images['models/mandalorian/textures/ARMOUR_3_normal'],
      'models/mandalorian/textures/MANDALORIAN_baseColor': Assets.images['models/mandalorian/textures/MANDALORIAN_baseColor'],
      'models/mandalorian/textures/02_-_Default_metallicRoughness': Assets.images['models/mandalorian/textures/02_-_Default_metallicRoughness'],
      'models/mandalorian/textures/11_-_Default_baseColor': Assets.images['models/mandalorian/textures/11_-_Default_baseColor'],
      'models/mandalorian/textures/BODY_baseColor': Assets.images['models/mandalorian/textures/BODY_baseColor'],
      'models/mandalorian/textures/MANDALORIAN_metallicRoughness': Assets.images['models/mandalorian/textures/MANDALORIAN_metallicRoughness'],
      'models/mandalorian/textures/02_-_Default_normal': Assets.images['models/mandalorian/textures/02_-_Default_normal'],
      'models/mandalorian/textures/11_-_Default_normal': Assets.images['models/mandalorian/textures/11_-_Default_normal'],
      'models/mandalorian/textures/BODY_metallicRoughness': Assets.images['models/mandalorian/textures/BODY_metallicRoughness'],
      'models/mandalorian/textures/MANDALORIAN_normal': Assets.images['models/mandalorian/textures/MANDALORIAN_normal'],
      'models/mandalorian/textures/08_-_Default_baseColor': Assets.images['models/mandalorian/textures/08_-_Default_baseColor'],
      'models/mandalorian/textures/ARMOUR_3_baseColor': Assets.images['models/mandalorian/textures/ARMOUR_3_baseColor'],
      'models/mandalorian/textures/CAPE_baseColor': Assets.images['models/mandalorian/textures/CAPE_baseColor'],
      'models/mandalorian/textures/Material_21_baseColor': Assets.images['models/mandalorian/textures/Material_21_baseColor'],
      'models/mandalorian/textures/08_-_Default_metallicRoughness': Assets.images['models/mandalorian/textures/08_-_Default_metallicRoughness'],
      'models/mandalorian/textures/ARMOUR_3_metallicRoughness': Assets.images['models/mandalorian/textures/ARMOUR_3_metallicRoughness'],
      'models/mandalorian/textures/CAPE_metallicRoughness': Assets.images['models/mandalorian/textures/CAPE_metallicRoughness'],
      'models/mandalorian/textures/Material_21_normal': Assets.images['models/mandalorian/textures/Material_21_normal'],
    };
    const sounds = {
      
    };

    return super.preload({ images, sounds });
  }

  onResize(width, height) { // eslint-disable-line no-unused-vars
    this.loadingText.x = width / 2;
    this.loadingText.y = (height / 2) + 500;
  }

  onLoadProgress(val) {
    this.loadingText.text = `${val}%`;
  }
}
