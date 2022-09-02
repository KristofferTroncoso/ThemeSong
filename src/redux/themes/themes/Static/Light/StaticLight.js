import React from 'react';
import { useSelector } from 'react-redux';
import { addStylesheet } from '../../addStylesheet';
import { static_light_css } from './static-light-css';

function StaticLight({processColors}) {
  const staticLightPrefs = useSelector(state => state.themes.themes.find(theme => (theme.themeId === "themeId:7")).userPrefs.lightPrefs);

  React.useEffect(() => {
    addStylesheet(static_light_css);
    processColors(staticLightPrefs);

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
    processColors(staticLightPrefs);
  }, [staticLightPrefs])
  
  return <div id="StaticLight"></div>
}

export default StaticLight;


