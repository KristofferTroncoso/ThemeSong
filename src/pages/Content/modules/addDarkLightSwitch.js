import { activeTheme, applyTheme } from "..";

export function addDarkLightSwitch() {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    console.log(`Device setting dark/light mode set to: ${newColorScheme}`);
    chrome.storage.sync.get(["experimentalAutoUseDeviceDarkLightMode"], (res) => {
      if (res.experimentalAutoUseDeviceDarkLightMode) {
        switch (newColorScheme) {
          case "dark":
            //activeTheme dark
            if (activeTheme === "themeId:0") {
              
            } else if (activeTheme === "themeId:1" || activeTheme === "themeId:4") {
              console.log("4 to 1")
              chrome.storage.sync.set({activeTheme: "themeId:1"});
              applyTheme("themeId:1")
            } else {
              console.log("else to 2")
              chrome.storage.sync.set({activeTheme: "themeId:2"});
              applyTheme("themeId:2")
            }
            break;
          case "light":
            //activeTheme light
            if (activeTheme === "themeId:0") {
              
            } else if (activeTheme === "themeId:4" || activeTheme === "themeId:1") {
              console.log("1 to 4")
              chrome.storage.sync.set({activeTheme: "themeId:4"});
              applyTheme("themeId:4")
            } else {
              console.log("else to 5")
              chrome.storage.sync.set({activeTheme: "themeId:5"});
              applyTheme("themeId:5")
            }
            break;
          default:
    
        }
      }
    });

  });
}