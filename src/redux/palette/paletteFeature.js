import { store } from '../store';
import { changePalette, changeMostPopulatedColor } from './paletteSlice';
import * as Vibrant from "node-vibrant";
import { playerBarSongImgNode } from '../themes/themes/selectors';

let imgChangeObserver;

export function addPaletteFeature() {
  initialPalette();
  function initialPalette() {
    getVibrantPalette()
    .then((palette) => {
      console.log('palette received');
      let serializedPalette = {
        "LightVibrant": {
          rgb: palette.LightVibrant.rgb,
          hex: palette.LightVibrant.hex,
          hsl: palette.LightVibrant.hsl,
          population: Math.floor(palette.LightVibrant.population * 0.4)
        },
        "Vibrant": {
          rgb: palette.Vibrant.rgb,
          hex: palette.Vibrant.hex,
          hsl: palette.Vibrant.hsl,
          population: palette.Vibrant.population
        },
        "DarkVibrant": {
          rgb: palette.DarkVibrant.rgb,
          hex: palette.DarkVibrant.hex,
          hsl: palette.DarkVibrant.hsl,
          population: palette.DarkVibrant.population
        },
        "LightMuted": {
          rgb: palette.LightMuted.rgb,
          hex: palette.LightMuted.hex,
          hsl: palette.LightMuted.hsl,
          population: Math.floor(palette.LightMuted.population * 0.4)
        },
        "Muted": {
          rgb: palette.Muted.rgb,
          hex: palette.Muted.hex,
          hsl: palette.Muted.hsl,
          population: Math.floor(palette.Muted.population * 0.7)
        },
        "DarkMuted": {
          rgb: palette.DarkMuted.rgb,
          hex: palette.DarkMuted.hex,
          hsl: palette.DarkMuted.hsl,
          population: Math.floor(palette.DarkMuted.population * 0.5)
        }
      };
      let mostPopulatedColor = getMostPopulatedColor(serializedPalette);
      store.dispatch(changePalette(serializedPalette));
      store.dispatch(changeMostPopulatedColor(mostPopulatedColor));
    })
    .catch((err) => {
      console.log('vibrant error');
      console.log(err);
    });
  }

  function handleSongChange(mutationList) {
    console.log('song changed');
    playerBarSongImgNode.crossOrigin = "anonymous";

    try {
      chrome.runtime.sendMessage('r u still there?');

      if (playerBarSongImgNode.src !== "https://music.youtube.com/") {
        if (mutationList[0].oldValue === playerBarSongImgNode.src) {
          console.log('same song image')
        } else {
          console.log('song image changed');
          setTimeout(() => {
            getVibrantPalette()
            .then((palette) => {
              console.log('palette received');
              let serializedPalette = {
                "LightVibrant": {
                  rgb: palette.LightVibrant.rgb,
                  hex: palette.LightVibrant.hex,
                  hsl: palette.LightVibrant.hsl,
                  population: Math.floor(palette.LightVibrant.population * 0.4)
                },
                "Vibrant": {
                  rgb: palette.Vibrant.rgb,
                  hex: palette.Vibrant.hex,
                  hsl: palette.Vibrant.hsl,
                  population: palette.Vibrant.population
                },
                "DarkVibrant": {
                  rgb: palette.DarkVibrant.rgb,
                  hex: palette.DarkVibrant.hex,
                  hsl: palette.DarkVibrant.hsl,
                  population: palette.DarkVibrant.population
                },
                "LightMuted": {
                  rgb: palette.LightMuted.rgb,
                  hex: palette.LightMuted.hex,
                  hsl: palette.LightMuted.hsl,
                  population: Math.floor(palette.LightMuted.population * 0.4)
                },
                "Muted": {
                  rgb: palette.Muted.rgb,
                  hex: palette.Muted.hex,
                  hsl: palette.Muted.hsl,
                  population: Math.floor(palette.Muted.population * 0.7)
                },
                "DarkMuted": {
                  rgb: palette.DarkMuted.rgb,
                  hex: palette.DarkMuted.hex,
                  hsl: palette.DarkMuted.hsl,
                  population: Math.floor(palette.DarkMuted.population * 0.5)
                }
              };
              let mostPopulatedColor = getMostPopulatedColor(serializedPalette);
              store.dispatch(changePalette(serializedPalette));
              store.dispatch(changeMostPopulatedColor(mostPopulatedColor));
            })
            .catch((err) => {
              console.log('vibrant error');
              console.log(err);
            });
          }, 1);
        }
      }
    } catch {
      imgChangeObserver.disconnect();
    }
  }
  
  imgChangeObserver = new MutationObserver(handleSongChange);

  imgChangeObserver.observe(playerBarSongImgNode, {
    attributeFilter: ["src"],
    attributeOldValue: true
  });
};


export function removePaletteFeature() {
  imgChangeObserver.disconnect();
}

function getVibrantPalette() {
  console.log('getting palette hsl');
  console.log(playerBarSongImgNode.src);
  return Vibrant.from(playerBarSongImgNode.src)
  .quality(1)
  .getPalette();
}

function getMostPopulatedColor(x) {
	let mostPopulatedColor = {population: 0};
	
	for (const [, value] of Object.entries(x)) {
		if (value.population >= mostPopulatedColor.population) {
			mostPopulatedColor = value;
		}
	}
	return mostPopulatedColor;
}

export default addPaletteFeature;