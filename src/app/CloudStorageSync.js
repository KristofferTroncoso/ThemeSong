import React from 'react';
import { useStore } from './store';

function CloudSyncStorageSync() {
  const changeActiveTheme = useStore(state => state.theme.changeActiveTheme);
  const changeThemes = useStore(state => state.theme.changeThemes);
  const changeIsDark = useStore(state => state.theme.changeIsDark);
  const changeActiveVisualizer = useStore(state => state.visualizer.changeActiveVisualizer);
  const changeVisualizers = useStore(state => state.visualizer.changeVisualizers);
  const changePlayPauseState = useStore(state => state.player.changePlayPauseState);
  const changeActivePopupTab = useStore(state => state.popup.changeActivePopupTab);

  React.useState(() => {
    console.log('CloudSyncStorageSync');

    //initial get from chrome local storage
    chrome.storage.local.get(null, syncStorageToStore);
  
    //chrome storage listener
    chrome.storage.onChanged.addListener(syncToStore);
    
    function syncStorageToStore(chromeStorageObj) {
      console.log('chromeStorageObj')
      console.log(chromeStorageObj)
      for (let [key, value] of Object.entries(chromeStorageObj)) {
        console.log(key, value);
        switch (key) {
          case "activeTheme":
            changeActiveTheme(value)
            break;
          case "themes":
            changeThemes(value)
            break;
          case "activeVisualizer":
            changeActiveVisualizer(value)
            break;
          case "visualizers":
            changeVisualizers(value)
            break;
          case "activePopupTab":
            changeActivePopupTab(value)
            break;
          default:
            console.log('syncStorageToStore: default case')
        }
      }
    }
  
    function syncToStore(changes) {
      for (let [key, { newValue }] of Object.entries(changes)) {
        console.log('syncToStore', key);
        switch (key) {
          case "activeTheme":
            changeActiveTheme(newValue)
            break;
          case "themes":
            changeThemes(newValue)
            break;
          case "activeVisualizer":
            changeActiveVisualizer(newValue)
            break;
          case "visualizers":
            changeVisualizers(newValue)
            break;
          case "isDark":
            changeIsDark(newValue)
            break;
          case "playPauseState":
            changePlayPauseState(newValue)
            break;
          default:
            console.log('syncToStore: default case')
        }
      }
    };
  }, [])
  
  return <div id="CloudSyncStorageSync"></div>
}

export default CloudSyncStorageSync;