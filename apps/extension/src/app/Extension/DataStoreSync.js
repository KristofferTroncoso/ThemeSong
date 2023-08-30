import { useEffect } from "react";
import { useStore } from "/src/app/store";

/* This component keeps chrome.storage.local and the Zustand store in sync. */
function DataStoreSync() {
  const mergeThemePrefs = useStore((state) => state.theme.mergeThemePrefs);
  const mergeVisualizerPrefs = useStore((state) => state.visualizer.mergeVisualizerPrefs);
  const mergePopupPrefs = useStore((state) => state.popup.mergePopupPrefs);
  const mergeExtensionPrefs = useStore((state) => state.extension.mergeExtensionPrefs);
  const mergePiecesPrefs = useStore((state) => state.pieces.mergePiecesPrefs);
  const mergeUtilitiesPrefs = useStore((state) => state.utilities.mergeUtilitiesPrefs);

  useEffect(() => {
    console.log("DataStoreSync");

    function handleKeyValueData(key, value) {
      console.log(key, value);
      switch (key) {
        case "themePrefs":
          mergeThemePrefs(value);
          break;
        case "visualizerPrefs":
          mergeVisualizerPrefs(value);
          break;
        case "popupPrefs":
          mergePopupPrefs(value);
          break;
        case "extensionPrefs":
          mergeExtensionPrefs(value);
          break;
        case "utilitiesPrefs":
          mergeUtilitiesPrefs(value);
          break;
        case "piecesPrefs":
          mergePiecesPrefs(value);
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

  return null;
}

export default DataStoreSync;
