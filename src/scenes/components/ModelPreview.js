import Assets from '../../core/AssetManager';
import { Container } from 'pixi.js';

import * as PIXI3D from 'pixi3d';

export default class ModelPreview extends Container{

	constructor() {
		super();

    	this._models = Assets.models;
    	this._setupLights();
	}

	updateModel({name, config}) {
		this.removeChildren();
		var model = PIXI3D.Model.from(this._models[name].gltf);

		model.x = config.x;
		model.y = config.y;
		model.scale.set(config.scale);

		this.addChildAt(model, 0);

		if(model.animations.length) {
		  model.animations[0].loop = true; 
		  model.animations[0].play();
		}
	}

	_setupLights() {
	  let dirLight = Object.assign(new PIXI3D.Light(), {
	    type: "directional", intensity: 0.5, x: -4, y: 7, z: -4
	  })
	  dirLight.rotationQuaternion.setEulerAngles(45, 45, 0)
	  PIXI3D.LightingEnvironment.main.lights.push(dirLight)

	  let pointLight = Object.assign(new PIXI3D.Light(), { 
	    type: "point", x: -1, y: 0, z: 3, range: 15, intensity: 12
	  })
	  PIXI3D.LightingEnvironment.main.lights.push(pointLight)
	}

}