import processDynamic from './dynamic/dynamicScripts';
import processStatic from './static/index';
import processOffTheme from './off'
import { store } from '../redux/store';

export function addThemes() {
  console.log('content script: themes. addThemes()')
  let activeTheme = store.getState().themes.activeTheme;
  switch (activeTheme) {
    case "themeId:0":
      processOffTheme.process();
      break;
    case "themeId:6":
      processDynamic();
      break;
    case "themeId:7":
      processStatic();
      break;
    default:
      processDynamic();
  }

  //add listeners for activeTheme
  let currentValue;
  function handleChange() {
    let previousValue = currentValue
    currentValue = store.getState().themes.activeTheme;

    if (previousValue !== currentValue) {
      console.log('themes index: subscribe triggered')
      switch (currentValue) {
        case "themeId:0":
          processOffTheme.process();
          break;
        case "themeId:6":
          processDynamic();
          break;
        case "themeId:7":
          processStatic();
          break;
        default:
          processDynamic();
      }
    }
  }

  const unsubscribeActiveTheme = store.subscribe(handleChange);
}

export default addThemes;