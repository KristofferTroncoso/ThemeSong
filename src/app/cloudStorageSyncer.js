import { store } from './store';
import { changeActiveTheme, changeThemes, changeIsDark } from './Theme/themesSlice';
import { changeActiveVisualizer, changeVisualizers } from './Visualizer/visualizersSlice';
import { changeActivePopupTab } from './popup/popupSlice';
import { changePlayPauseState } from './PlayerState/playerStateSlice';
import { changeRemoveDislikeButton, toggleRemoveDislikeButton } from './Test/testSlice';

export function addCloudSyncStorageSyncer() {
  console.log('addCloudSyncStorageSyncer');

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
          store.dispatch(changeActiveTheme(value))
          break;
        case "themes":
          store.dispatch(changeThemes(value))
          break;
        case "activeVisualizer":
          store.dispatch(changeActiveVisualizer(value))
          break;
        case "visualizers":
          store.dispatch(changeVisualizers(value))
          break;
        case "activePopupTab":
          store.dispatch(changeActivePopupTab(value))
          break;
        case "miscSettings":
          store.dispatch(changeRemoveDislikeButton(value))
          break;
        default:
          console.log('addCloudSyncStorageSyncer: default case')
      }
    }
  }

  function syncToStore(changes) {
    for (let [key, { newValue }] of Object.entries(changes)) {
      console.log('syncToStore', key);
      switch (key) {
        case "activeTheme":
          store.dispatch(changeActiveTheme(newValue))
          break;
        case "themes":
          store.dispatch(changeThemes(newValue))
          break;
        case "activeVisualizer":
          store.dispatch(changeActiveVisualizer(newValue))
          break;
        case "visualizers":
          store.dispatch(changeVisualizers(newValue))
          break;
        case "activePopupTab":
          store.dispatch(changeActivePopupTab(newValue))
          break;
        case "isDark":
          store.dispatch(changeIsDark(newValue))
          break;
        case "playPauseState":
          store.dispatch(changePlayPauseState(newValue))
          break;
        case "miscSettings":
          console.log('syncToStore changeMiscSettings(newValue)', newValue)
          store.dispatch(changeRemoveDislikeButton(newValue))
          // store.dispatch(toggleRemoveDislikeButton())
          break;
        default:
          console.log('syncToStore: default case')
      }
    }
  };
  

}

export default addCloudSyncStorageSyncer;