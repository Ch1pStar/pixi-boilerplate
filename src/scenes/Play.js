import { Sprite, Text, Container, Loader } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';

import * as PIXI3D from 'pixi3d';
import gltfPath from '../assets/models/mandalorian/scene.gltf';
import sceneData from '../assets/models/mandalorian/scene.bin';

export default class Play extends Scene {
  async onCreated() {
    this._setupInfoContainer();
    if(!window.location.search.includes('nomodel')) this._setupPreviewModel();
    this._setupRewardsCarousel();
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

  _setupPreviewModel(){
    var l = new Loader();

    l.add('mando', gltfPath);
    l.load((loader)=>{
      var model = PIXI3D.Model.from(loader.resources.mando.gltf);

      model.y = 2.2;
      model.scale.set(0.04);
      this.addChildAt(model, 0);

      let dirLight = Object.assign(new PIXI3D.Light(), {
        type: "directional", intensity: 0.5, x: -4, y: 7, z: -4
      })
      dirLight.rotationQuaternion.setEulerAngles(45, 45, 0)
      PIXI3D.LightingEnvironment.main.lights.push(dirLight)

      let pointLight = Object.assign(new PIXI3D.Light(), { 
        type: "point", x: -1, y: 0, z: 3, range: 15, intensity: 12
      })
      PIXI3D.LightingEnvironment.main.lights.push(pointLight)

      model.animations[0].loop = true; 
      model.animations[0].play();
    });
  }


  _setupInfoContainer() {
    var container = new Container();
    container.name = 'infoContainer';

    container.addChild(this._setupLeftInfoContainer());
    container.addChild(this._setupRightInfoContainer());

    this.addChild(container);
  }

  _setupLeftInfoContainer() {
    var infoContainer = new Container();
    infoContainer.name = 'leftInfoContainer';

    return infoContainer;
  }

  _setupRightInfoContainer() {
    var infoContainer = new Container();
    infoContainer.name = 'rightInfoContainer';

    var itemName = new Text('MANCAKE', {fontFamily: 'Burbank', fontSize: 34, fill: 'white'});
    var itemType = new Text('OUTFIT ', {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0x23D1F3});
    itemType.x = 5;
    infoContainer.addChild(itemType)

    var itemQuality = new Text('EPIC ', {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0xB85EE9});
    itemQuality.x = itemType.width+10
    infoContainer.addChild(itemQuality)

    itemName.y = infoContainer.height;
    infoContainer.addChild(itemName);

    var itemDesc = new Text(`Forged on a girddle of rage.\n[Enlightened]`, {
      fontFamily: 'Burbank',
      fontSize: 16,
      fill: 0xC9F0FB
    });
    itemDesc.y = infoContainer.height;
    infoContainer.addChild(itemDesc);

    var itemCollection = new Text(`THE BREAKFAST BANDING SET`, {
      fontFamily: 'Burbank',
      fontSize: 20,
      fill: 0xC9F0FB,
      fontWeight: 'bold'
    });
    itemCollection.y = infoContainer.height+10;
    infoContainer.addChild(itemCollection)


    var itemCollection = new Text(`COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `, {
      fontFamily: 'Burbank',
      fontSize: 20,
      fill: 0xC9F0FB,
      fontWeight: 'bold',
      fontStyle: 'italic',
      letterSpacing: 2
    });
    itemCollection.y = infoContainer.height+200;
    infoContainer.addChild(itemCollection)


    infoContainer.y = -400
    infoContainer.x = 350

    infoContainer.cacheAsBitmap = true;

    return infoContainer;
  }

  _setupRewardsCarousel() {
    var container = new Container();
    var leftArrow = this._createCarouselButton(-7);
    var rightArrow = this._createCarouselButton(7);
    var arrowOffset = leftArrow.width+150;
    var cardOffset = 12;
    var cardsAmount = 15;
    var visibleCards = 7;
    var cardsContainer = new Container();

    cardsContainer.visibleCards = visibleCards;
    this._cardsContainer = cardsContainer;

    container.addChild(leftArrow);

    for(let i=0;i<=cardsAmount;i++) {
      var card = this._createCarouselCard(i+1);

      card.pivot.x = card.width/2;
      card.pivot.y = card.height/2;

      card.x = ((card.width+cardOffset)*i) + arrowOffset;
      cardsContainer.addChild(card);

      if(i>=visibleCards) {
        card.visible = false;
      }
    }

    cardsContainer.pivot.y = -cardsContainer.height/2;
    container.addChild(cardsContainer);

    rightArrow.scale.x = -1;
    rightArrow.x = container.width+arrowOffset;
    container.addChild(rightArrow);

    container.name = 'carouselContainer';
    container.y = 180;
    container.x = -(container.width/2);
    this.addChild(container);
  }

  _createCarouselButton(direction = 1) {
    const s = new Sprite.from('arrow');
    
    s.interactive = true;
    s.buttonMode = true;
    s.pivot.y = -s.height/2;
    s.y = s.height/2;
    s.direction = direction;

    s.on('click', ()=>this._carouselPosition+=direction);

    return s; 
  }

  get _carouselPosition() {
    for(let [i, card] of this._cardsContainer.children.entries()) {
      if(card.visible) return i;
    }
  }

  set _carouselPosition(pos) {
    var totalVisible = this._cardsContainer.visibleCards;

    // if(pos<0) pos = totalVisible + pos;
    // else pos %= totalVisible;

    pos = (totalVisible+pos)%totalVisible;


    for(let [i, card] of this._cardsContainer.children.entries()) {
      if(i<pos || i>=pos+this._cardsContainer.visibleCards){
        card.visible = false;
      }else{
        card.visible = true;
      }
    }
  
    this._cardsContainer.x = -(this._cardsContainer.children[0].width+12)*pos;
  }

  _createCarouselCard(label) {
    var cnt = new Container();

    // tmp
    var itemImg = this.cardItemBackgroundTexture.clone();
    itemImg.tint = Math.random()*32000000000

    cnt.addChild(itemImg);

    var priceImg = this.cardPriceBackgroundTexture.clone();

    priceImg.y = cnt.height+5;
    cnt.addChild(priceImg);

    var priceTxt = new Text(label, {fontFamily:'Burbank', fill: 0x3282C6});

    priceTxt.anchor.x = 0.5;
    priceTxt.x = priceImg.width/2;
    priceTxt.y = priceImg.y;
    cnt.addChild(priceTxt);

    cnt.interactive = true;
    cnt.on('pointerover', ()=>{
      gsap.to(cnt, {
        duration: 0.5,
        pixi: {
          scale: 1.2
        },
      });
    });

    cnt.on('pointerout', ()=>{
      gsap.to(cnt, {
        duration: 0.5,
        pixi: {
          scale: 1
        },
      });
    });

    cnt.on('click', ()=>{
      console.error('clack', label)
      gsap.to(cnt, {
        duration: 0.2,
        pixi: {
          scale: 1.4
        },
      });
    });

    return cnt
  }


  get cardPriceBackgroundTexture() {
    if(this._cardPriceBackgroundTexture) {
      return this._cardPriceBackgroundTexture;
    }

    var g = new PIXI.Graphics();
    g.beginFill(0x022A8D);
    g.moveTo(0, 3);
    g.lineTo(100, 0);
    g.lineTo(100, 25);
    g.lineTo(0, 25);
    g.lineTo(0, 3);

    g.cacheAsBitmap = true;

    this._cardPriceBackgroundTexture = g;

    return g;
  }

  get cardItemBackgroundTexture() {
    if(this._cardItemBackgroundTexture) {
      return this._cardItemBackgroundTexture;
    }

    var g = new PIXI.Graphics();
    g.beginFill(0xffffff);
    g.moveTo(0, 10); // top left
    g.lineTo(100, 0); // top right
    g.lineTo(100, 147); // bottom right
    g.lineTo(0, 150); // bottom left
    g.lineTo(0, 10); // top left

    g.cacheAsBitmap = true;

    this._cardItemBackgroundTexture = g;

    return g;
  }


}
