import { store } from "../../redux/store";
import { addStylesheet } from '../addStylesheet';
import { dynamicdark_css } from './dynamicdarkCSS';
import { dynamiclight_css } from './dynamiclightCSS';
import { menubar, root } from '../selectors';
import { deepEqual } from '../deepEqual';

/* start - subscribe to dynamic user prefs change */
let currentValue = {};
function handleChange() {
  let previousValue = currentValue
  currentValue = store.getState().themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs;

  if (!deepEqual(previousValue, currentValue)) {
    console.log('dynamic prefs changed');
    console.log('previousval', previousValue, 'and currentval', currentValue)
    switch (currentValue.darkLightSetting) {
      case "dark": 
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyDynamicTheme)
        addStylesheet(dynamicdark_css);
        break;
      case "light": 
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyDynamicTheme)
        addStylesheet(dynamiclight_css);
        break;
      case "system": 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(dynamicdark_css) : addStylesheet(dynamiclight_css);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDynamicTheme);
        break;
      default:
        addStylesheet(dynamicdark_css);
        break;
    }

    function applyDynamicTheme(e) {
      const newColorScheme = e.matches ? "dark" : "light";
      console.log(`Device setting dark/light mode set to: ${newColorScheme}`);
      window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(dynamicdark_css) : addStylesheet(dynamiclight_css);
      processColors();
    }

    processColors();
  }
}

export const unsubscribeDynamicPrefsChange = store.subscribe(handleChange);
/* end */


/* start - subscribe to palette change */
let currentValue2;
function handleChange2() {
  let previousValue2 = currentValue2
  currentValue2 = store.getState().palette.mostPopulatedColor;

  if (previousValue2 !== currentValue2) {
    processColors();
  }
}

export const unsubscribeDynamicPaletteChange  = store.subscribe(handleChange2);
/* end */

export function processColors() {
  console.log('dynamic processing colors')
  let state = store.getState();
  let dynamicUserPrefs = store.getState().themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs;
  let vibrantHSL = state.palette.mostPopulatedColor.hsl;
  let accentColorArr = vibrantHSL;
  
  let chosenPrefs = returnChosenPrefs();

  function returnChosenPrefs() {
    switch (dynamicUserPrefs.darkLightSetting) {
      case "dark":
        return dynamicUserPrefs.darkPrefs;
      case "light":
        return dynamicUserPrefs.lightPrefs;
      case "system":
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return dynamicUserPrefs.darkPrefs
        } else {
          return dynamicUserPrefs.lightPrefs;
        }
      default:
        return dynamicUserPrefs.darkPrefs;
    }
  }

  const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = chosenPrefs;

  let hue = (accentColorArr[0] * 360).toFixed();
  let saturation = (accentColorArr[1] * 100 * saturationSetting).toFixed();
  let light = (accentColorArr[2] * 100).toFixed();

  let pickedVibrantColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
  let pickedVibrantColorLight50 = `hsl(${hue}, ${saturation}%, 50%)`;
  let navBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingNavBar}%)`;
  let playPageColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayPage}%)`;
  let bodyColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingBody}%)`;
  let playerBarColor = `hsl(${hue}, ${saturation}%, ${lightnessSettingPlayerBar}%)`;
  let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-picked-vibrant-static", pickedVibrantColor, "important");
  root.style.setProperty("--ts-picked-vibrant-light50", pickedVibrantColorLight50, "important");
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
  root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
}

export function processDynamic() {
  console.log('processDynamic')
  console.log(store.getState());
  let dynamicUserPrefs = store.getState().themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs;
  switch (dynamicUserPrefs.darkLightSetting) {
    case "dark": 
      addStylesheet(dynamicdark_css);
      break;
    case "light": 
      addStylesheet(dynamiclight_css);
      break;
    case "system": 
      window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(dynamicdark_css) : addStylesheet(dynamiclight_css);
      break;
    default:
      addStylesheet(dynamicdark_css);
      break;
  }
  processColors();
}

export default processDynamic;