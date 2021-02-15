export default {
  view: {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x013BBC,
    worldWidth: 1000,
    worldHeight: 500,
    resizeTo: window,
    centerOnResize: true,
  },
  game: {
    width: 1000,
    height: 500,
    drag: false,
    pinch: false,
    decelerate: false,
    wheel: false,
  },
  scenes: {
    Splash: {
      hideDelay: 0,
    },
  },
  assets: {
    root: '/',
  },
};