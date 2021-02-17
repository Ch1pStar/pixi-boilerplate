import { Container, Sprite, Text } from 'pixi.js';

const TEXT_STYLE_DEFAULT = {fontFamily: 'Burbank', fontSize: 20, fill: 0x23D1F3};

export default class InfoContainer extends Container {

	constructor() {
		super();

		this._info = null;

		this._setupInfoContainer();
	}


	updateInfo(data) {
		this._info = data;
		this._updateTexts();
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
  	Object.assign(this.itemType.style, type.style);

  	this.itemQuality.text = quality.text;
  	Object.assign(this.itemQuality.style, quality.style);

  	this.itemName.text = name.text;
  	Object.assign(this.itemName.style, name.style);

  	this.itemDesc.text = description.text;
  	Object.assign(this.itemDesc.style, description.style);

  	this.itemCollection.text = collection.text;
  	Object.assign(this.itemCollection.style, collection.style);

  	this.itemTip.text = tip.text;
  	Object.assign(this.itemTip.style, tip.style);

    this.itemQuality.x = this.itemType.width + 10;
    this.itemName.y = this.itemQuality.height;
    this.itemDesc.y = this.itemName.y + this.itemName.height + 10;
    this.itemCollection.y = this.itemDesc.y +  this.itemDesc.height + 10;
    this.itemTip.y = this.itemCollection.y + this.itemCollection.height + 200;
  }

  _setupLeftInfoContainer() {
    var infoContainer = new Container();
    infoContainer.name = 'leftInfoContainer';

    return infoContainer;
  }

  _setupRightInfoContainer() {
    var infoContainer = new Container();
    infoContainer.name = 'rightInfoContainer';

    var itemName = new Text('', TEXT_STYLE_DEFAULT);
    var itemType = new Text(' ', TEXT_STYLE_DEFAULT);
    infoContainer.addChild(itemType)

    var itemQuality = new Text(' ', TEXT_STYLE_DEFAULT);
    infoContainer.addChild(itemQuality)

    itemName.y = infoContainer.height;
    infoContainer.addChild(itemName);

    var itemDesc = new Text('', TEXT_STYLE_DEFAULT);
    infoContainer.addChild(itemDesc);

    var itemCollection = new Text('', TEXT_STYLE_DEFAULT);
    infoContainer.addChild(itemCollection)

    var itemTip = new Text('', TEXT_STYLE_DEFAULT);
    infoContainer.addChild(itemTip)

    infoContainer.y = -400
    infoContainer.x = 350

    this.itemName = itemName;
    this.itemType = itemType;
    this.itemQuality = itemQuality;
    this.itemDesc = itemDesc;
    this.itemCollection = itemCollection;
    this.itemTip = itemTip;

    return infoContainer;
  }

}