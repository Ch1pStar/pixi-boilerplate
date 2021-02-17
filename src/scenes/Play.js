import { Sprite, Text, Container, Loader, Filter } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';

import ModelPreview from './components/ModelPreview';
import ProgressCarousel from './components/ProgressCarousel';
import InfoContainer from './components/InfoContainer';

import config from '../config';

export default class Play extends Scene {
  async onCreated() {
    var cfg = config.scenes.Play.rewards;

    this.modelPreview = new ModelPreview();
    this.addChildAt(this.modelPreview);

    this.infoContainer = new InfoContainer();
    this.addChild(this.infoContainer);

    this.progressCarousel = new ProgressCarousel(cfg, (index)=>this.selectItem(index));
    this.addChild(this.progressCarousel);

    this.selectItem(0);
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

  selectItem(itemIndex) {
    var {info, model} = config.scenes.Play.rewards[itemIndex];

    this.progressCarousel.selectCard(itemIndex);
    this.infoContainer.updateInfo(info)
    this.modelPreview.updateModel(model);
  }
}
