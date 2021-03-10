import { Sprite } from 'pixi.js';
import Scene from './Scene';
import Assets from '../core/AssetManager';

import ModelPreview from './components/ModelPreview';
import ProgressCarousel from './components/ProgressCarousel';
import InfoContainer from './components/InfoContainer';

import config from '../config';

export default class Play extends Scene {
  async onCreated() {
    var cfg = config.scenes.Play;

    this.modelPreview = new ModelPreview();
    this.addChild(this.modelPreview);

    this.infoContainer = new InfoContainer(cfg.defaultInfoStyle);
    this.addChild(this.infoContainer);

    this.progressCarousel = new ProgressCarousel(cfg.rewards, (index)=>this.selectItem(index));
    this.addChild(this.progressCarousel);

    this.selectItem(2);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }

  startBackgroundMusic() {
    var playBackgroundMusic = () => {
      Assets.sounds.soundtrack_background.play();
      document.body.removeEventListener('click', playBackgroundMusic);      
    }

    document.body.addEventListener('click', playBackgroundMusic);
  }

  selectItem(itemIndex) {
    var {info, preview} = config.scenes.Play.rewards[itemIndex];

    this.progressCarousel.selectCard(itemIndex);
    this.infoContainer.updateInfo(info)
    this.modelPreview.update(preview);
  }
}
