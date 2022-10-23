import React from 'react';
import { static_light_css } from './static-light-css';
import { useStore } from '../../../../store';
import { menubar } from '../../selectors';

function StaticLight() {
  const { 
    hue, 
    saturationSetting, 
    lightnessSettingNavBar, 
    lightnessSettingPlayPage, 
    lightnessSettingBody, 
    lightnessSettingPlayerBar 
  } = useStore(state => state.theme.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.lightPrefs);

  React.useEffect(() => {
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
    menubar.content = `hsl(${hue}, ${saturationSetting}%, ${lightnessSettingNavBar}%)`;
  }, [hue, saturationSetting, lightnessSettingNavBar])
  
  return (
    <style id="StaticLight">
      {`:root {
        --themesong-theme-static-hue: ${hue};
        --themesong-theme-static-saturation: ${saturationSetting}%;
        --themesong-theme-static-topbarbg-light: ${lightnessSettingNavBar}%;
        --themesong-theme-static-bodybg-light: ${lightnessSettingBody}%;
        --themesong-theme-static-playpagebg-light: ${lightnessSettingPlayPage}%;
        --themesong-theme-static-playbarbg-light: ${lightnessSettingPlayerBar}%;
        --themesong-theme-static-playpageavtoggle-light: ${21 + (lightnessSettingPlayPage / 25) * 14}%;
      }`}
      {static_light_css}
    </style>
  )
}

export default StaticLight;


