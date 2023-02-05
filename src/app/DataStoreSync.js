import { useEffect } from "react";
import { useStore } from "/src/app/store";

/* This component keeps chrome.storage.local and the Zustand store in sync. */
function DataStoreSync() {
  const changeActiveTheme = useStore((state) => state.theme.changeActiveTheme);
  const changeActiveVisualizer = useStore(
    (state) => state.visualizer.changeActiveVisualizer
  );
  const changeThemePrefs = useStore((state) => state.theme.changeThemePrefs);
  const changeVisualizerPrefs = useStore(
    (state) => state.visualizer.changeVisualizerPrefs
  );
  const changeActivePopupTab = useStore(
    (state) => state.popup.changeActivePopupTab
  );
  const changeShowUpdateNote = useStore(
    (state) => state.extension.changeShowUpdateNote
  );
  // const changeSnippets = useStore(state => state.snippets.changeSnippets);

  useEffect(() => {
    console.log("DataStoreSync");

    function handleKeyValueData(key, value) {
      console.log(key, value);
      switch (key) {
        case "activeTheme":
          changeActiveTheme(value);
          break;
        case "activeVisualizer":
          changeActiveVisualizer(value);
          break;
        case "themePrefs":
          changeThemePrefs(value);
          break;
        case "visualizerPrefs":
          changeVisualizerPrefs(value);
          break;
        case "activePopupTab":
          changeActivePopupTab(value);
          break;
        case "showUpdateNote":
          changeShowUpdateNote(value);
          break;
        // case "snippets":
        //   changeSnippets(value)
        //   break;
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
