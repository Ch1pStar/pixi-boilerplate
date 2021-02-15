import Application from './core/Application';
import * as PIXI from 'pixi.js';
import * as PIXI3D from 'pixi3d';
import PixiPlugin from 'gsap/PixiPlugin'
import gsap from 'gsap';

if (process.env.NODE_ENV === 'development') {
  // required for pixi dev tools to work
  window.PIXI = PIXI;
  window.PIXI3D = PIXI3D;
}

PixiPlugin.registerPIXI(PIXI);
gsap.registerPlugin(PixiPlugin);

document.addEventListener('DOMContentLoaded', new Application());
