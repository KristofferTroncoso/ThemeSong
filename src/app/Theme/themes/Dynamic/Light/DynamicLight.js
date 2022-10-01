import React from 'react';
import { useStore } from '../../../../store';
import { dynamiclight_css } from './dynamiclightCSS';
import { menubar, root } from '../../selectors';

function DynamicLight() {
  const mostPopulatedColorHSL = useStore(state => state.palette.mostPopulatedColor).hsl;
  const dynamicLightPrefs = useStore(state => state.theme.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.lightPrefs);

  function processDynamicLightColors() {
    console.log('Dynamic Theme: processing colors')

    const {saturationSetting, lightnessSettingNavBar, lightnessSettingPlayPage, lightnessSettingBody, lightnessSettingPlayerBar} = dynamicLightPrefs;

    let hue = (mostPopulatedColorHSL[0] * 360).toFixed();
    let saturation = (mostPopulatedColorHSL[1] * 100 * saturationSetting).toFixed();
    let light = (mostPopulatedColorHSL[2] * 100).toFixed();

    function calcCurvedBrightness(brightness) {
      let hueNum = parseInt(hue, 10);
      let brightnessNum = parseInt(brightness, 10);
    
      if ((hueNum >= 0 && hueNum < 35) || (hueNum > 200)) {
        return ((100 - brightnessNum) * 0.3) + brightnessNum;
      } else  {
        return brightnessNum;
      }
    }

    let pickedVibrantColor = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let pickedVibrantColorLight50 = `hsl(${hue}, ${saturation}%, 50%)`;
    let pickedVibrantColorLightAlpha10 = `hsla(${hue}, ${saturation}%, ${light}%, 0.1)`;
    let pickedVibrantColorLightAlpha20 = `hsla(${hue}, ${saturation}%, ${light}%, 0.2)`;
    let navBarColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingNavBar)}%)`;
    let playPageColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingPlayPage)}%)`;
    let bodyColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingBody)}%)`;
    let playerBarColor = `hsl(${hue}, ${saturation}%, ${calcCurvedBrightness(lightnessSettingPlayerBar)}%)`;
    let playPageAvToggleColor = `hsl(${hue}, ${saturation}%, ${21 + (lightnessSettingPlayPage / 25) * 14}%)`;

    menubar.content = navBarColor;
    root.style.setProperty("--ts-picked-vibrant-static", pickedVibrantColor, "important");
    root.style.setProperty("--ts-picked-vibrant-light50", pickedVibrantColorLight50, "important");
    root.style.setProperty("--ts-picked-vibrant-alpha10", pickedVibrantColorLightAlpha10, "important");
    root.style.setProperty("--ts-picked-vibrant-alpha20", pickedVibrantColorLightAlpha20, "important");
    root.style.setProperty("--ts-topnav-color", navBarColor);
    root.style.setProperty("--ts-mainbg-color", bodyColor);
    root.style.setProperty("--ts-playpagebg-color", playPageColor);
    root.style.setProperty("--ts-playbar-color", playerBarColor);
    root.style.setProperty("--ts-playpageavtoggle-color", playPageAvToggleColor);
  }

  React.useEffect(() => {
    processDynamicLightColors();

    //apply dark logo on load
    document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")
    document.querySelector("ytmusic-nav-bar #left-content picture img").src = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")

    //remove dark logo on unload
    return function() {
      document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = "//music.youtube.com/img/on_platform_logo_dark.svg";
      document.querySelector("ytmusic-nav-bar #left-content picture img").src = "//music.youtube.com/img/on_platform_logo_dark.svg";
    }
  }, [])

  React.useEffect(() => {
    processDynamicLightColors();
  }, [mostPopulatedColorHSL, dynamicLightPrefs])
  
  return <style id="DynamicLight">{dynamiclight_css}</style>
}

export default DynamicLight;