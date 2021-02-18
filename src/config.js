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
      defaultInfoStyle: {
        type:{fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0x23D1F3},
        quality:{fontFamily: 'Burbank', fontSize: 20, fontStyle: 'italic', fill: 0xB85EE9},
        name:{fontFamily: 'Burbank', fontSize: 34, fill: 'white'},
        description:{fontFamily: 'Burbank', fontSize: 16, fill: 0xC9F0FB, fontWeight: 'bold'},
        collection:{fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold'},
        tip: {fontFamily: 'Burbank', fontSize: 20, fill: 0xC9F0FB, fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 2},
      },
      rewards: [
        {
          preview: {
            name: 'pug_suprem',
            config: {x: 0, y: -2.5, scale: 0.025},
          },
          thumbnail: 'pugThumbnail',
          info: {
            type: {
              text: 'Outfit  ',
            },
            quality: {
              text: 'Epic  ',
            },
            name: {
              text: 'Dog The Pugg   ',
            },
            description: {
              text: `Floor Gang `,
            },
            collection: {
              text: `THE PUG SET  `,
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
            }
          },
        },
        {
          preview: {
            name: 'musicPackLarge',
            type: 'image',
            config: {x: 0, y: -100, scale: 1, anchor: 0.5},
          },
          thumbnail: 'musicThumbnail',
          info: {
            type: {
              text: 'Music Pack  ',
            },
            quality: {
              text: 'Rare  ',
              style: {fill: 0x06ADFF}
            },
            name: {
              text: 'SPACE GROOVE ',
            },
            description: {
              text: `Press play and space out. `,
            },
            collection: {
              text: `SPACE GROOVE  `,
            },
            tip: {
              text: '',
            }
          },
        },
        {
          preview: {
            name: 'stormtrooper',
            config: {x: 0, y: -2.5, scale: 0.025},
          },
          thumbnail: 'stormtrooperThumbnail',
          info: {
            type: {
              text: 'Dance  ',
            },
            quality: {
              text: 'Rare  ',
              style: {fill: 0x06ADFF}
            },
            name: {
              text: 'Dog The Pugg   ',
            },
            description: {
              text: `Woof  `,
            },
            collection: {
              text: `THE PUG SET  `,
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
            }
          },
        },
        {
          preview: {
            name: 'mando',
            config: {x: 0,y: 1, scale: 0.025,}
          },
          thumbnail: 'mandoThumbnail',
          info: {
            type: {
              text: 'Outfit',
            },
            quality: {
              text: 'Epic',
            },
            name: {
              text: 'Mandalorian',
            },
            description: {
              text: `Forged on a girddle of rage.\n[Enlightened]`,
            },
            collection: {
              text: `THE BREAKFAST BANDING SET`,
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
            }
          },
        },
        {
          preview:{
            name: 'razorcrest',
            config: {x: -8, y: -2, scale: 0.005},
          },
          thumbnail: 'shipThumbnail',
          info: {
            type: {
              text: 'Glider',
            },
            quality: {
              text: 'Epic',
            },
            name: {
              text: 'Razor Crest',
            },
            description: {
              text: ``,
            },
            collection: {
              text: `Mandalorian Set`,
            },
            tip: {
              text: `COMPLETE THE BESKAR QUEST TO\nUPGRADE MANDALORIAN'S ARMOR!  `,
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