import { Container, Sprite, Text } from 'pixi.js';

export default class InfoContainer extends Container {

	constructor(defaultTextStyle) {
		super();

    this._defaultTextStyle = defaultTextStyle;
		this._info = null;

		this._setupInfoContainer();
	}


	updateInfo(data) {
		this._info = data;
		this._updateTexts();
    this._updateTextsPosition();
	}

  _setupInfoContainer() {
    var container = new Container();
    container.name = 'infoContainer';

    container.addChild(this._setupLeftInfoContainer());
    container.addChild(this._setupRightInfoContainer());

    this.infoContainer = container;
    this.addChild(container);
  }

  _updateTexts() {
  	const {name, type, quality, description, collection, tip} = this._info;

  	this.itemType.text = type.text;
  	Object.assign(this.itemType.style, type.style || this._defaultTextStyle.type);

  	this.itemQuality.text = quality.text;
  	Object.assign(this.itemQuality.style, quality.style || this._defaultTextStyle.quality);

  	this.itemName.text = name.text;
  	Object.assign(this.itemName.style, name.style || this._defaultTextStyle.name);

  	this.itemDesc.text = description.text;
  	Object.assign(this.itemDesc.style, description.style || this._defaultTextStyle.description);

  	this.itemCollection.text = collection.text;
  	Object.assign(this.itemCollection.style, collection.style || this._defaultTextStyle.collection);

  	this.itemTip.text = tip.text;
  	Object.assign(this.itemTip.style, tip.style || this._defaultTextStyle.tip);
  }

  _updateTextsPosition() {

    this.itemQuality.x = this.itemType.width + 10;
    this.itemName.y = this.itemQuality.height;
    this.itemDesc.y = this.itemName.y + this.itemName.height + 10;
    this.itemCollection.y = this.itemDesc.y +  this.itemDesc.height + 10;
    this.itemTip.y = this.itemCollection.y + this.itemCollection.height + 200;    
  }

  _setupLeftInfoContainer() {
    var infoContainer = new Container();
    infoContainer.name = 'leftInfoContainer';

    const seasonTitle = new Text('SEASON 5', {fontFamily: 'Burbank', fontSize: 30, fill: 0x46D8F4});
    const screenTitle = new Text('LEVEL UP REWARDS  ', {fontFamily: 'Burbank', fontSize: 35, fill: 'white', fontStyle: 'italic'});
    const battlePassTitle = new Text('BATTLE PASS', {fontFamily: 'Burbank', fontSize: 35,});

    screenTitle.y = seasonTitle.height+10;
    battlePassTitle.y = seasonTitle.y + seasonTitle.height+50;

    infoContainer.x = -400;
    infoContainer.y = -400;
    infoContainer.addChild(seasonTitle, screenTitle, battlePassTitle);

    return infoContainer;
  }

  _setupRightInfoContainer() {
    var infoContainer = new Container();
    var itemName = new Text('', this._defaultTextStyle);
    var itemType = new Text(' ', this._defaultTextStyle);
    var itemQuality = new Text(' ', this._defaultTextStyle);
    var itemDesc = new Text('', this._defaultTextStyle);
    var itemCollection = new Text('', this._defaultTextStyle);
    var itemTip = new Text('', this._defaultTextStyle);

    this.itemName = itemName;
    this.itemType = itemType;
    this.itemQuality = itemQuality;
    this.itemDesc = itemDesc;
    this.itemCollection = itemCollection;
    this.itemTip = itemTip;

    infoContainer.name = 'rightInfoContainer';
    infoContainer.y = -400
    infoContainer.x = 350
    infoContainer.addChild(itemType, itemQuality, itemName, itemDesc, itemCollection, itemTip);

    return infoContainer;
  }

}