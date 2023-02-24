export function userPrefsTransferFromV043toV044() {
  chrome.storage.local.get(null, (chromeStorageObj) => {
    for (let [key, value] of Object.entries(chromeStorageObj)) {
      switch (key) {
        case "themes":
          let themePrefs = value.map((themeObj) => {
            return {
              themeId: themeObj.themeId,
              ...themeObj.userPrefs,
            };
          });
          let themePrefsPlusDittoPrefs = [
            ...themePrefs,
            {
              themeId: "themeId:9",
              activeVariant: "variantId:2",
            },
          ];
          console.log(themePrefsPlusDittoPrefs);
          chrome.storage.local.set({ themePrefs: themePrefsPlusDittoPrefs });
          break;
        case "visualizers":
          let visualizerPrefs = value.map((visualizerObj) => {
            if (visualizerObj.visualizerId === "visualizerId:0") {
              return {
                visualizerId: visualizerObj.visualizerId,
                lineWidth: visualizerObj.lineWidth,
              };
            } else if (visualizerObj.visualizerId === "visualizerId:1") {
              return {
                visualizerId: visualizerObj.visualizerId,
                activeVariant: visualizerObj.activeVariant,
                barWidth: visualizerObj.barWidth,
                borderWidth: visualizerObj.borderWidth,
                gap: visualizerObj.gap,
              };
            } else if (visualizerObj.visualizerId === "visualizerId:2") {
              return {
                visualizerId: visualizerObj.visualizerId,
                activeVariant: visualizerObj.activeVariant,
              };
            }
          });
          console.log(visualizerPrefs);
          chrome.storage.local.set({ visualizerPrefs });
          break;
        default:
          console.log("default case");
      }
    }
  });

  chrome.storage.local.remove(["themes", "visualizers"]);
}

export function userPrefsTransferFromV047toV050() {
  chrome.storage.local.get(null, (chromeStorageObj) => {
    function returnNewThemeId(oldId) {
      let newId = "db8854e3-6753-4639-b244-c8091f3b9fcb";
      switch (oldId) {
        case "themeId:0":
          newId = "416034f2-bfb8-46e8-9929-5805dd59a688";
          break;
        case "themeId:6":
          newId = "db8854e3-6753-4639-b244-c8091f3b9fcb";
          break;
        case "themeId:7":
          newId = "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8";
          break;
        case "themeId:9":
          newId = "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f";
          break;
        default:
          newId = "db8854e3-6753-4639-b244-c8091f3b9fcb";
      }
      return newId;
    }

    function returnNewVisualizerId(oldId) {
      let newId = "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d";
      switch (oldId) {
        case "visualizerId:0":
          newId = "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d";
          break;
        case "visualizerId:1":
          newId = "51dc50c8-eb06-4086-ad9c-a89758f63db6";
          break;
        case "visualizerId:2":
          newId = "685d0ec7-5c52-4e48-a43d-11184a39f3da";
          break;
        default:
          newId = "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d";
      }
      return newId;
    }

    for (let [key, value] of Object.entries(chromeStorageObj)) {
      switch (key) {
        case "activeTheme":
          let newThemeId = returnNewThemeId(value);
          chrome.storage.local.set({ activeTheme: newThemeId });
          break;
        case "activeVisualizer":
          let newVisualizerId = returnNewVisualizerId(value);
          chrome.storage.local.set({ activeVisualizer: newVisualizerId });
          break;
        case "themePrefs":
          let newThemePrefs = value.map((themeObj) => {
            let newThemeObj;
            switch (themeObj.themeId) {
              case "themeId:6":
                newThemeObj = {
                  id: "db8854e3-6753-4639-b244-c8091f3b9fcb",
                  appearance: themeObj.appearanceSetting,
                  dark: {
                    saturation: themeObj.darkPrefs.saturationSetting,
                    lightness: [
                      themeObj.darkPrefs.lightnessSettingNavBar,
                      themeObj.darkPrefs.lightnessSettingPlayPage,
                      themeObj.darkPrefs.lightnessSettingPlayerBar,
                      themeObj.darkPrefs.lightnessSettingBody,
                    ],
                  },
                  light: {
                    saturation: themeObj.lightPrefs.saturationSetting,
                    lightness: [
                      themeObj.lightPrefs.lightnessSettingNavBar,
                      themeObj.lightPrefs.lightnessSettingPlayPage,
                      themeObj.lightPrefs.lightnessSettingPlayerBar,
                      themeObj.lightPrefs.lightnessSettingBody,
                    ],
                  },
                };
                break;
              case "themeId:7":
                newThemeObj = {
                  id: "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8",
                  appearance: themeObj.appearanceSetting,
                  dark: {
                    hue: themeObj.darkPrefs.hue,
                    saturation: themeObj.darkPrefs.saturationSetting,
                    lightness: [
                      themeObj.darkPrefs.lightnessSettingNavBar,
                      themeObj.darkPrefs.lightnessSettingPlayPage,
                      themeObj.darkPrefs.lightnessSettingPlayerBar,
                      themeObj.darkPrefs.lightnessSettingBody,
                    ],
                  },
                  light: {
                    hue: themeObj.lightPrefs.hue,
                    saturation: themeObj.lightPrefs.saturationSetting,
                    lightness: [
                      themeObj.lightPrefs.lightnessSettingNavBar,
                      themeObj.lightPrefs.lightnessSettingPlayPage,
                      themeObj.lightPrefs.lightnessSettingPlayerBar,
                      themeObj.lightPrefs.lightnessSettingBody,
                    ],
                  },
                };
                break;
              case "themeId:9":
                let newThemeVariantId = "3f71704c-d344-4bd0-9013-a2da7bda13ef";
                switch (themeObj.activeVariant) {
                  case "variantId:0":
                    newThemeVariantId = "55f83bbd-d794-49a8-8912-2b53af3f1d3f";
                    break;
                  case "variantId:1":
                    newThemeVariantId = "3f71704c-d344-4bd0-9013-a2da7bda13ef";
                    break;
                  default:
                    newThemeVariantId = "3f71704c-d344-4bd0-9013-a2da7bda13ef";
                }
                newThemeObj = {
                  id: "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f",
                  activeVariant: newThemeVariantId,
                };
                break;
              default:
                newThemeObj = {
                  id: "db8854e3-6753-4639-b244-c8091f3b9fcb",
                  appearance: themeObj.appearanceSetting,
                  dark: {
                    saturation: themeObj.darkPrefs.saturationSetting,
                    lightness: [
                      themeObj.darkPrefs.lightnessSettingNavBar,
                      themeObj.darkPrefs.lightnessSettingPlayPage,
                      themeObj.darkPrefs.lightnessSettingPlayerBar,
                      themeObj.darkPrefs.lightnessSettingBody,
                    ],
                  },
                  light: {
                    saturation: themeObj.lightPrefs.saturationSetting,
                    lightness: [
                      themeObj.lightPrefs.lightnessSettingNavBar,
                      themeObj.lightPrefs.lightnessSettingPlayPage,
                      themeObj.lightPrefs.lightnessSettingPlayerBar,
                      themeObj.lightPrefs.lightnessSettingBody,
                    ],
                  },
                };
            }
            return newThemeObj;
          });
          chrome.storage.local.set({ themePrefs: newThemePrefs });
          break;
        case "visualizerPrefs":
          let newVisualizerPrefs = value.map((visualizerObj) => {
            let newVisualizerObj;
            switch (visualizerObj.visualizerId) {
              case "visualizerId:0":
                newVisualizerObj = {
                  id: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
                  lineWidth: visualizerObj.lineWidth,
                };
                break;
              case "visualizerId:1":
                let newVis1Id = "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78";
                switch (visualizerObj.activeVariant) {
                  case "variantId:1":
                    newVis1Id = "b84ef625-e0af-4e8c-8ab6-b86ee9ee2147";
                    break;
                  case "variantId:2":
                    newVis1Id = "5890028c-8554-4fa9-bb14-f0c496f207f1";
                    break;
                  case "variantId:3":
                    newVis1Id = "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78";
                    break;
                  case "variantId:4":
                    newVis1Id = "c67d53cf-d708-4d31-93e8-c01819e70248";
                    break;
                  case "variantId:5":
                    newVis1Id = "f1b5822f-32a1-4232-87fa-620963c49f0e";
                    break;
                  case "variantId:6":
                    newVis1Id = "f3015c0d-1528-4615-b74f-bd7ab4f91667";
                    break;
                  default:
                    newVis1Id = "12bfd49e-47a2-4cc8-90a9-3e669f7a0c78";
                }
                newVisualizerObj = {
                  id: "51dc50c8-eb06-4086-ad9c-a89758f63db6",
                  activeVariant: newVis1Id,
                  barWidth: visualizerObj.barWidth,
                  gap: visualizerObj.gap,
                  borderWidth: visualizerObj.borderWidth,
                };
                break;
              case "visualizerId:2":
                let newVis2Id = "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b";
                switch (visualizerObj.activeVariant) {
                  case "variantId:1":
                    newVis2Id = "2040b849-8c7c-4290-8ff8-c0d7716cca77";
                    break;
                  case "variantId:2":
                    newVis2Id = "820e69c5-1531-44b7-8da4-5d43c1b17bfe";
                    break;
                  case "variantId:3":
                    newVis2Id = "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b";
                    break;
                  case "variantId:4":
                    newVis2Id = "6b14efe2-f082-4f23-9186-8dad394d0b55";
                    break;
                  case "variantId:5":
                    newVis2Id = "7dbd8080-84cc-47a8-b199-cfe12c3d9e67";
                    break;
                  case "variantId:6":
                    newVis2Id = "aadb67e9-ee59-45f3-8335-d34a39223525";
                    break;
                  default:
                    newVis2Id = "b82df5dd-c7f4-4cc1-ad23-9e2b70ca491b";
                }
                newVisualizerObj = {
                  id: "685d0ec7-5c52-4e48-a43d-11184a39f3da",
                  activeVariant: newVis2Id,
                };
                break;
              default:
                newVisualizerObj = {
                  id: "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d",
                  lineWidth: 8,
                };
            }
            return newVisualizerObj;
          });
          chrome.storage.local.set({ visualizerPrefs: newVisualizerPrefs });
          break;
        default:
          console.log("default case");
      }
    }
  });
}
