import { store } from '../../app/store';
// import logPalette from './logPalette';
import themes from '../../themes';
import { storageObj } from '..';
// const playerBarSongImgNode = document.querySelector(".middle-controls .thumbnail-image-wrapper img");

export function processThemeOnPrefsChange(activeThemeId) {
  let state = store.getState();
  let mostPopulatedColor = state.palette.mostPopulatedColor;
  
  switch (activeThemeId) {
    case "themeId:0":
      console.log('OFF. No theme active');
      themes.off.process();
      break;
    case "themeId:1":
      console.log('Dynamic Dark theme is active');
      themes.dynamicdark.process();
      break;
    case "themeId:2":
      console.log('Static dark theme is active');
      themes.staticdark.process(storageObj);
      break;
    case "themeId:3":
      console.log('glass');
      themes.glass.process();
      break;
    case "themeId:4":
      console.log('dynamic light');
      themes.dynamiclight.process(storageObj, mostPopulatedColor.hsl);
      break;
    case "themeId:5":
      console.log('Static light theme is active');
      themes.staticlight.process(storageObj);
      break;
    case "themeId:6":
      console.log('Dynamic theme is active');
      themes.dynamicdark.process(storageObj, mostPopulatedColor.hsl);
      break;
    default:
      console.log('no active theme');
  }
}