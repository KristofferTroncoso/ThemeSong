export function userPrefsTransferFromV043toV044() {
  chrome.storage.local.get(null, (chromeStorageObj) => {
    for (let [key, value] of Object.entries(chromeStorageObj)) {
      switch (key) {
        case "themes":
          let themePrefs = value.map(themeObj => {
            return {
              themeId: themeObj.themeId,
              ...themeObj.userPrefs
            }
          });
          let themePrefsPlusDittoPrefs = [...themePrefs, {
            themeId: "themeId:9",
            activeVariant: "variantId:2"
          }]
          console.log(themePrefsPlusDittoPrefs)
          chrome.storage.local.set({themePrefs: themePrefsPlusDittoPrefs});
          break;
        case "visualizers":
          let visualizerPrefs = value.map(visualizerObj => {
            if (visualizerObj.visualizerId === "visualizerId:0") {
              return {
                visualizerId: visualizerObj.visualizerId,
                lineWidth: visualizerObj.lineWidth
              }
            } else if (visualizerObj.visualizerId === "visualizerId:1") {
              return {
                visualizerId: visualizerObj.visualizerId,
                activeVariant: visualizerObj.activeVariant,
                barWidth: visualizerObj.barWidth,
                borderWidth: visualizerObj.borderWidth,
                gap: visualizerObj.gap,
              }
            } else if (visualizerObj.visualizerId === "visualizerId:2") {
              return {
                visualizerId: visualizerObj.visualizerId,
                activeVariant: visualizerObj.activeVariant
              }
            }
          })
          console.log(visualizerPrefs)
          chrome.storage.local.set({visualizerPrefs});
          break;
        default:
          console.log('default case')
      }
    }

  });

  chrome.storage.local.remove(['themes', 'visualizers'])
}