import React, { useEffect } from 'react';
import { apple_music_css } from './apple-music-css';
import { apple_dark_css } from './apple-dark-css';
import { menubar } from '../../selectors';
import { useStore } from '../../../../store';

function AppleMusic() {
  const playerUiState = useStore(state => state.player.playerUiState);
  const dominantHue = useStore(state => state.palette.dominant.hsl[0])

  useEffect(() => {
    console.log('PLAYERUISTATE', playerUiState)
    //apply dark logo on load
    document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")
    document.querySelector("ytmusic-nav-bar #left-content picture img").src = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")

    return function() {
      //remove dark logo on unload
      document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = "//music.youtube.com/img/on_platform_logo_dark.svg";
      document.querySelector("ytmusic-nav-bar #left-content picture img").src = "//music.youtube.com/img/on_platform_logo_dark.svg";
    }
  }, [])

  useEffect(() => {
    console.log('PLAYERUISTATE2', playerUiState)
    if (playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") {
      menubar.content = `hsl(0, 0%, 94%)`;
      //apply dark logo on load
      document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")
      document.querySelector("ytmusic-nav-bar #left-content picture img").src = chrome.runtime.getURL("/assets/images/dark_youtube_music_logo_themesong_mod.svg")
    } else {
      menubar.content = `hsl(${dominantHue * 360}, 22%, 30%)`;
      //remove dark logo on unload
      document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = "//music.youtube.com/img/on_platform_logo_dark.svg";
      document.querySelector("ytmusic-nav-bar #left-content picture img").src = "//music.youtube.com/img/on_platform_logo_dark.svg";
    }

    return function() {
      //remove dark logo on unload
      document.querySelectorAll("ytmusic-nav-bar #left-content picture source")[1].srcset = "//music.youtube.com/img/on_platform_logo_dark.svg";
      document.querySelector("ytmusic-nav-bar #left-content picture img").src = "//music.youtube.com/img/on_platform_logo_dark.svg";
    }
  }, [playerUiState, dominantHue])

  return (
    <style id="AppleMusic">
      {!(playerUiState === "PLAYER_BAR_ONLY" || playerUiState === "MINIPLAYER" || playerUiState === "INACTIVE") ? `
        :root {
          --themesong-theme-dynamic-saturation: ${20};
          --themesong-theme-dynamic-topbarbg-light: ${25}%;
          --themesong-theme-dynamic-bodybg-light: ${25}%;
          --themesong-theme-dynamic-playpagebg-light: ${25}%;
          --themesong-theme-dynamic-playbarbg-light: ${25}%;
          --themesong-theme-dynamic-playpageavtoggle-light: ${21 + (25 / 25) * 14}%;
        }
        ${apple_dark_css}
      ` : `
        :root {
          --themesong-theme-static-hue: ${0};
          --themesong-theme-static-saturation: ${0}%;
          --themesong-theme-static-topbarbg-light: ${94}%;
          --themesong-theme-static-bodybg-light: ${100}%;
          --themesong-theme-static-playpagebg-light: ${96}%;
          --themesong-theme-static-playbarbg-light: ${94}%;
          --themesong-theme-static-playpageavtoggle-light: ${21 + (50 / 25) * 14}%;
        }
        ${apple_music_css}
      `}
    </style>
  )
}

export default AppleMusic;
