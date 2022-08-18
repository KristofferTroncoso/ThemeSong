import { store } from "../../redux/store";
import { addStylesheet } from '../addStylesheet';
import { static_light_css } from './static-light-css';
import { static_dark_css } from './static-dark-css';
import { menubar, root } from '../selectors';
import { deepEqual } from '../deepEqual';

/* start - subscribe to static prefs change */
let currentValue;
function handleChange() {
  let previousValue = currentValue
  currentValue = store.getState().themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs;

  if (!deepEqual(previousValue, currentValue)) {
    switch (currentValue.darkLightSetting) {
      case "dark": 
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyStaticTheme)
        addStylesheet(static_dark_css);
        break;
      case "light": 
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyStaticTheme)
        addStylesheet(static_light_css);
        break;
      case "system": 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(static_dark_css) : addStylesheet(static_light_css);
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyStaticTheme);
        break;
      default:
        addStylesheet(static_dark_css);
        break;
    }

    function applyStaticTheme(e) {
      const newColorScheme = e.matches ? "dark" : "light";
      console.log(`Device setting dark/light mode set to: ${newColorScheme}`);
      window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(static_dark_css) : addStylesheet(static_light_css);
      processColors();
    }

    processColors();
  }
}

export let unsubscribeStaticPrefsChange = store.subscribe(handleChange);
/* end */


export function processColors() {
  console.log('static processing colors')
  const state = store.getState();
  let staticUserPrefs = state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs;

  let chosenPrefs = returnChosenPrefs();

  function returnChosenPrefs() {
    switch (staticUserPrefs.darkLightSetting) {
      case "dark":
        return staticUserPrefs.darkPrefs;
      case "light":
        return staticUserPrefs.lightPrefs;
      case "system":
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return staticUserPrefs.darkPrefs
        } else {
          return staticUserPrefs.lightPrefs;
        }
      default:
        return staticUserPrefs.darkPrefs;
    }
  }
  
  const { hue, saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar } = chosenPrefs;

  const navBarColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingNavBar}%)`;
  const playPageColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingPlayPage}%)`;
  const bodyColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingBody}%)`;
  const playerBarColor = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingPlayerBar}%)`;
  const playPageAvToggleColor = `hsl(${hue}, ${saturationSetting}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;
  const accentColorLight14 = `hsl(${hue}, ${saturationSetting}%, 14%)`;

  menubar.content = navBarColor;
  root.style.setProperty("--ts-topnav-color", navBarColor);
  root.style.setProperty("--ts-mainbg-color", bodyColor);
  root.style.setProperty("--ts-playpagebg-color", playPageColor);
  root.style.setProperty("--ts-playbar-color", playerBarColor);
  root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
  root.style.setProperty("--ts-accent-color-light-14", accentColorLight14);
}

export function processStatic() {
  console.log('processing Static Theme')
  let dynamicUserPrefs = store.getState().themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs;
  switch (dynamicUserPrefs.darkLightSetting) {
    case "dark": 
      addStylesheet(static_dark_css);
      break;
    case "light": 
      addStylesheet(static_light_css);
      break;
    case "system": 
      window.matchMedia('(prefers-color-scheme: dark)').matches ? addStylesheet(static_dark_css) : addStylesheet(static_light_css);
      break;
    default:
      addStylesheet(static_dark_css);
      break;
  }
  processColors();
}

export default processStatic;