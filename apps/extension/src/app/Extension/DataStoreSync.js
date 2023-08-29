import { useEffect } from "react";
import { useStore } from "/src/app/store";

/* This component keeps chrome.storage.local and the Zustand store in sync. */
function DataStoreSync() {
  const overwriteAllThemePrefs = useStore((state) => state.theme.overwriteAllThemePrefs);
  const overwriteAllVisualizerPrefs = useStore((state) => state.visualizer.overwriteAllVisualizerPrefs);
  const changeActivePopupTab = useStore((state) => state.popup.changeActivePopupTab);
  const changeShowUpdateNote = useStore((state) => state.extension.changeShowUpdateNote);
  const changeHideCaptions = useStore((state) => state.player.changeHideCaptions);
  const setPiecesPrefs = useStore((state) => state.pieces.setPiecesPrefs);
  const changeNotificationsEnabled = useStore((state) => state.utilities.changeNotificationsEnabled);

  useEffect(() => {
    console.log("DataStoreSync");

    function handleKeyValueData(key, value) {
      console.log(key, value);
      switch (key) {
        case "themePrefs":
          overwriteAllThemePrefs(value);
          break;
        case "visualizerPrefs":
          overwriteAllVisualizerPrefs(value);
          break;
        case "activePopupTab":
          changeActivePopupTab(value);
          break;
        case "showUpdateNote":
          changeShowUpdateNote(value);
          break;
        case "hideCaptions":
          changeHideCaptions(value);
          break;
        case "notificationsEnabled":
          changeNotificationsEnabled(value);
          break;
        case "piecesPrefs":
          setPiecesPrefs(value);
          break;
        default:
          console.log("DataStoreSync: default case");
      }
    }

    //initial get from chrome local storage
    chrome.storage.local.get(null, (chromeStorageObj) => {
      console.log("chromeStorageObj", chromeStorageObj);
      for (let [key, value] of Object.entries(chromeStorageObj)) {
        handleKeyValueData(key, value);
      }
    });

    //chrome storage listener
    chrome.storage.onChanged.addListener((changes) => {
      for (let [key, { newValue }] of Object.entries(changes)) {
        console.log("chrome.storage changed. syncing data", { key, newValue });
        handleKeyValueData(key, newValue);
      }
    });
  });

  return <div id="DataStoreSync"></div>;
}

export default DataStoreSync;
