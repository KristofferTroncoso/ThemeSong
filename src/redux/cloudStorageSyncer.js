import { store } from './store';
import { changeActiveTheme, changeThemes } from './themes/themesSlice';
import { changeActiveVisualizer, changeVisualizers } from './visualizers/visualizersSlice';
import { changeActivePopupTab } from './extensionState/extensionStateSlice';
import { changePlayPauseState } from './playerState/playerStateSlice';

export function addCloudSyncStorageSyncer() {
  //initial get
  chrome.storage.local.get(null, (res) => {
    console.log('res')
    console.log(res)
    for (let [key, value] of Object.entries(res)) {
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
        default:
          console.log('addCloudSyncStorageSyncer: default case')
      }
    }
  })

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
        case "playPauseState":
          store.dispatch(changePlayPauseState(newValue))
          break;
        default:
          console.log('syncToStore: default case')
      }
    }
  };
  
  //listener
  chrome.storage.onChanged.addListener(syncToStore)
}

export default addCloudSyncStorageSyncer;