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
    Play: {
      rewards: [
        {
          model: {
            name: 'pug',
            config: {x: 0, y: -2.5, scale: 0.025},
          },
          thumbnail: 'pugThumbnail',
          info: {
            type: {
              text: 'Outfit  ',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0x23D1F3},
            },
            quality: {
              text: 'Epic  ',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0xB85EE9},
            },
            name: {
              text: 'Dog The Pugg   ',
              style: {fontFamily: 'Burbank', fontSize: 34, fill: 'white'},
            },
            description: {
              text: `Woof  `,
              style: {fontFamily: 'Burbank', fontSize: 16, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            collection: {
              text: `THE PUG SET  `,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2},
            }
          },
        },
        {
          model: {
            name: 'mando',
            config: {x: 0,y: 1, scale: 0.025,}
          },
          thumbnail: 'mandoThumbnail',
          info: {
            type: {
              text: 'Outfit',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0x23D1F3},
            },
            quality: {
              text: 'Epic',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0xB85EE9},
            },
            name: {
              text: 'Mandalorian',
              style: {fontFamily: 'Burbank', fontSize: 34, fill: 'white'},
            },
            description: {
              text: `Forged on a girddle of rage.\n[Enlightened]`,
              style: {fontFamily: 'Burbank', fontSize: 16, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            collection: {
              text: `THE BREAKFAST BANDING SET`,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2},
            }
          },
        },
        {
          model:{
            name: 'razorcrest',
            config: {
              x: -8,
              y: -2,
              scale: 0.005,
            },
          },
          thumbnail: 'shipThumbnail',
          info: {
            type: {
              text: 'Glider',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0x23D1F3},
            },
            quality: {
              text: 'Epic',
              style: {fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0xB85EE9},
            },
            name: {
              text: 'Razor Crest',
              style: {fontFamily: 'Burbank', fontSize: 34, fill: 'white'},
            },
            description: {
              text: ``,
              style: {fontFamily: 'Burbank', fontSize: 16, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            collection: {
              text: `Mandalorian Set`,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold'},
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
              style: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2},
            }
          },
        },
      ]
    },
  },
  assets: {
    root: '/',
  },
};