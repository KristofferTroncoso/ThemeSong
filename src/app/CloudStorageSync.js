import React from 'react';
import { useStore } from './store';

function CloudSyncStorageSync() {
  const changeActiveTheme = useStore(state => state.theme.changeActiveTheme);
  const changeIsDark = useStore(state => state.theme.changeIsDark);
  const changeActiveVisualizer = useStore(state => state.visualizer.changeActiveVisualizer);
  const changeThemePrefs = useStore(state => state.theme.changeThemePrefs);
  const changeVisualizers = useStore(state => state.visualizer.changeVisualizers);
  const changePlayPauseState = useStore(state => state.player.changePlayPauseState);
  const changeActivePopupTab = useStore(state => state.popup.changeActivePopupTab);
  // const changeSnippets = useStore(state => state.snippets.changeSnippets);

  React.useEffect(() => {
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
          case "activeVisualizer":
            changeActiveVisualizer(value)
            break;
          case "themePrefs":
            changeThemePrefs(value)
            break;
          case "visualizers":
            changeVisualizers(value)
            break;
          case "activePopupTab":
            changeActivePopupTab(value)
            break;
          // case "snippets":
          //   changeSnippets(value)
          //   break;
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
          case "activeVisualizer":
            changeActiveVisualizer(newValue)
            break;
          case "themePrefs":
            changeThemePrefs(newValue)
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
          // case "snippets":
          //   changeSnippets(newValue)
          //   break;
          default:
            console.log('syncToStore: default case')
        }
      }
    };
  }, [])
  
  return <div id="CloudSyncStorageSync"></div>
}

export default CloudSyncStorageSync;