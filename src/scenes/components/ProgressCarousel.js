import { Container, Sprite, Text } from 'pixi.js';
import gsap from 'gsap';

export default class ProgressCorousel extends Container {

	constructor(rewardsConfig, itemSelectCallback) {
		super();

		this._itemSelectCallback = itemSelectCallback;

		this.rewardsConfig = rewardsConfig;
    this._setupRewardsCarousel();
	}

  _setupRewardsCarousel() {
    var container = new Container();
    var leftArrow = this._createCarouselButton(-1);
    var rightArrow = this._createCarouselButton(1);
    var arrowOffset = 150;

    container.addChild(leftArrow);
    container.addChild(this._createCardsContainer(leftArrow.width + arrowOffset));

    rightArrow.scale.x = -1;
    rightArrow.x = container.width+arrowOffset;
    container.addChild(rightArrow);

    container.name = 'carouselContainer';
    container.y = 180;
    container.x = -(container.width/2);
    this.addChild(container);
  }

  _createCardsContainer(arrowOffset) {
    var cardOffset = 12;
    var cardsAmount = this.rewardsConfig.length-1;
    var visibleCards = 4;
    var cardsContainer = new Container();

    cardsContainer.visibleCards = visibleCards;
    this._cardsContainer = cardsContainer;

    for(let i=0;i<=cardsAmount;i++) {
      var card = this._createCarouselCard(i);

      card.pivot.x = card.width/2;
      card.pivot.y = card.height/2;

      card.x = ((card.width+cardOffset)*i) + arrowOffset;
      cardsContainer.addChild(card);

      if(i>=visibleCards) {
        card.visible = false;
      }
    }

    cardsContainer.pivot.y = -cardsContainer.height/2;

    return cardsContainer;
  }

  _createCarouselButton(direction = 1) {
    const s = new Sprite.from('arrow');
    
    s.interactive = true;
    s.buttonMode = true;
    s.pivot.y = -s.height/2;
    s.y = s.height/2;
    s.direction = direction;

    s.blendMode = PIXI.BLEND_MODES.ADD;
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

  _createCarouselCard(index = 0) {
    var label = index+1;
    var cnt = new Container();

    // tmp
    var itemImg = this.cardItemBackgroundTexture.clone();
    itemImg.name = 'Card Background'
    itemImg.tint = 0x0F4691;

    cnt.addChild(itemImg);

    var thumbnail = Sprite.from(this.rewardsConfig[index].thumbnail || 'defaultThumbnail');

    cnt.addChild(thumbnail);


    var priceImg = this.cardPriceBackgroundTexture.clone();

    priceImg.y = cnt.height+5;
    cnt.addChild(priceImg);

    var priceTxt = new Text(label, {fontFamily:'Burbank', fill: 0x3282C6});

    priceTxt.anchor.x = 0.5;
    priceTxt.x = priceImg.width/2;
    priceTxt.y = priceImg.y;
    cnt.addChild(priceTxt);

    cnt.interactive = true;
    cnt.buttonMode = true;
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

    cnt.on('click', ()=>this._itemSelectCallback(index));

    return cnt
  }

  selectCard(index) {
  	var cnt = this._cardsContainer.children[index];

	  gsap.to(cnt, {
	    duration: 0.2,
	    pixi: {
	      scale: 1.4
	    },
	  });
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

    // g.cacheAsBitmap = true;

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

    // g.cacheAsBitmap = true;

    this._cardItemBackgroundTexture = g;

    return g;
  }
}