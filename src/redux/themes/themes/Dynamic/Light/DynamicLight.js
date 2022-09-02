import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { dynamiclight_css } from './dynamiclightCSS';

function DynamicLight({processColors}) {
  const mostPopulatedColor = useSelector(state => state.palette.mostPopulatedColor);
  const dynamicLightPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:6")).userPrefs.lightPrefs);

  React.useEffect(() => {
    addStylesheet(dynamiclight_css);
    processColors(dynamicLightPrefs, mostPopulatedColor.hsl);

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
    processColors(dynamicLightPrefs, mostPopulatedColor.hsl);
  }, [mostPopulatedColor, dynamicLightPrefs])
  
  return <div id="DynamicLight"></div>
}

export default DynamicLight;