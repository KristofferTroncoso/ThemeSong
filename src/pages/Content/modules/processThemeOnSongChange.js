import { store } from '../../app/store';
import logPalette from './logPalette';
import themes from '../../themes';
import { storageObj } from '..';
const playerBarSongImgNode = document.querySelector(".middle-controls .thumbnail-image-wrapper img");

export function processThemeOnSongChange() {
  store.subscribe(() => {
    console.log('store.subscribe. changed')
    let state = store.getState();
    console.log(state);
    let palette = state.palette.palette;
    let mostPopulatedColor = state.palette.mostPopulatedColor;
    processTheme("themeId:1", mostPopulatedColor, palette, logPalette);
  });
}

function processTheme(activeThemeId, mostPopulatedColor, palette, logPalette) {
  switch (activeThemeId) {
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      themes.dynamicdark.process();
      logPalette(palette);
      break;
    case "themeId:3":
      console.log('glass');
      themes.glass.processSongChange(playerBarSongImgNode.src);
      break;
    case "themeId:4":
      console.log('dynamic light');
      themes.dynamiclight.process(storageObj, mostPopulatedColor.hsl);
      logPalette(palette);
      break;
    case "themeId:6":
      console.log('Dynamic Dark theme is active');
      themes.dynamicdark.process(storageObj, mostPopulatedColor.hsl);
      logPalette(palette);
      break;
    default:
      console.log('no processing required.')
  }
};