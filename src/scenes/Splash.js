import Assets from '../core/AssetManager';
import Scene from './Scene';
import { Text, Loader } from 'pixi.js';
import config from '../config';

import gltfPath from '../assets/models/mandalorian/scene.gltf';
import pugGltfPath from '../assets/models/pug/scene.gltf';
import pugSupremGltfPath from '../assets/models/pug_suprem/scene.gltf';
import shipGltfPath from '../assets/models/razorcrest/scene.gltf';
import stGltfPath from '../assets/models/stormtrooper/scene.gltf';

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
    const images = {
      gamepad: Assets.images.gamepad,
      arrow: Assets.images.arrow,
      mandoThumbnail: Assets.images.mandoThumbnail,
      pugThumbnail: Assets.images.pugThumbnail,
      shipThumbnail: Assets.images.shipThumbnail,
      musicThumbnail: Assets.images.musicThumbnail,
      musicPackLarge: Assets.images.musicPackLarge,
      stormtrooperThumbnail: Assets.images.stormtrooperThumbnail,
      vBucksThumbnail: Assets.images.vBucksThumbnail,
      vBucksLarge: Assets.images.vBucksLarge,
      bgLight: Assets.images.bgLight,
    };
    const sounds = {
      soundtrack_background: Assets.sounds.soundtrack_background
    };

    var l = new Loader();

    l.add('mando', gltfPath);
    // l.add('pug', pugGltfPath);
    l.add('razorcrest', shipGltfPath);
    l.add('stormtrooper', stGltfPath);
    l.add('pug_suprem', pugSupremGltfPath);

    var modelsPromise = new Promise(res=>{
      l.load(()=>{
        Assets.models = l.resources;
        res();
      })
    })

    return Promise.all([modelsPromise, super.preload({ images, sounds })]);
  }

  onResize(width, height) { // eslint-disable-line no-unused-vars
    this.loadingText.x = width / 2;
    this.loadingText.y = (height / 2) + 500;
  }

  onLoadProgress(val) {
    this.loadingText.text = `${val}%`;
  }
}
