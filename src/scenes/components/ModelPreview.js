import Assets from '../../core/AssetManager';
import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';

import * as PIXI3D from 'pixi3d';

export default class ModelPreview extends Container{

	constructor() {
		super();

    	this._models = Assets.models;
    	this._setupLights();
	}

	async update(data) {
		await this.removePrev();

		if(data.type === 'image') {
			await this.updateImage(data);
		}else{
			await this.updateModel(data);
		}
	}

	async removePrev() {
		const active = this.children[0];

		if(!active) return;

		await gsap.to(active, {
			duration: 0.5,
			x: -5,
			pixi: {
				scale: 0.00001
			}
		}).then();

		this.removeChildren();
	}

	async updateImage({name, config}) {
		const img = Sprite.from(name);

		img.anchor.set(config.anchor);
		img.x = config.x;
		img.y = config.y;
		img.scale.set(config.scale);

		this.addChild(img);
	}

	async updateModel({name, config}) {
		var model = PIXI3D.Model.from(this._models[name].gltf);

		model.x = 10;
		model.scale.set(config.scale);
		this.addChild(model);

		await gsap.to(model, {
			duration: 0.5,
			x: config.x,
			y: config.y,
		}).then();

		// model.x = config.x;
		// model.y = config.y;
		// model.scale.set(config.scale);


		if(model.animations.length) {
		  model.animations[0].loop = true; 
		  model.animations[0].play();
		}
	}

	_setupLights() {
	  let dirLight = Object.assign(new PIXI3D.Light(), {
	    type: "directional", intensity: 0.1, x: -4, y: 7, z: -4
	  })
	  dirLight.rotationQuaternion.setEulerAngles(45, 45, 0)
	  PIXI3D.LightingEnvironment.main.lights.push(dirLight)

	  let pointLight = Object.assign(new PIXI3D.Light(), { 
	    type: "point", x: -1, y: 0, z: 3, range: 15, intensity: 10
	  })
	  PIXI3D.LightingEnvironment.main.lights.push(pointLight)
	}

}