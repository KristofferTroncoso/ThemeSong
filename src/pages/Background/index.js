
const defaults = {
  extensionVersion: "0.2.0",
  activeTheme: "themeId:1",
  activeVisualizer: "visualizerId:1",
  activePage: 1,
  themes: [
    {
      themeId: "themeId:0",
      dateAdded: 20220207,
      name: "Off",
      isDynamic: false,
      icon: 0
    },
    {
      themeId: "themeId:1",
      dateAdded: 20220210,
      name: "Dynamic Dark",
      isDynamic: true,
      icon: 0,
      userPrefs: {
        saturationSetting: 0.8, // percentage of chosen color's saturation.
        lightnessSettingNavBar: 20,
        lightnessSettingPlayPage: 15,
        lightnessSettingBody: 10,
        lightnessSettingPlayerBar: 25
      }
    },
    {
      themeId: "themeId:2", 
      dateAdded: 20220218,
      name: 'Static Dark',
      isDynamic: false,
      icon: 0,
      userPrefs: {
        hslColorHue: 216,
        navbarLight: 16,
        playPageLight: 16,
        playBarLight: 24,
        bgLight: 10,
        saturation: 70
      }
    },
    // {
    //   themeId: "themeId:3", 
    //   dateAdded: 20220226,
    //   name: 'Glass',
    //   isDynamic: true,
    //   icon: 0
    // },
    {
      themeId: "themeId:4", 
      dateAdded: 20220317,
      name: 'Dynamic Light',
      isDynamic: true,
      icon: 0,
      userPrefs: {
        saturationSetting: 1,
        lightnessSettingNavBar: 85,
        lightnessSettingPlayPage: 80,
        lightnessSettingBody: 95,
        lightnessSettingPlayerBar: 85
      }
    },
    {
      themeId: "themeId:5", 
      dateAdded: 20220322,
      name: 'Static Light',
      isDynamic: false,
      icon: 0,
      userPrefs: {
        hslColorHue: 350,
        navbarLight: 85,
        playPageLight: 90,
        playBarLight: 85,
        bgLight: 95,
        saturation: 90
      }
    },
    {
      themeId: "themeId:6",
      dateAdded: 20220602,
      name: "Dynamic",
      isDynamic: true,
      lightDarkMode: true,
      icon: 0,
      userPrefs: {
        darkLightSetting: 'dark', // 'dark', 'light', 'system'
        darkPrefs: {
          saturationSetting: 0.8, // percentage of chosen color's saturation.
          lightnessSettingNavBar: 20,
          lightnessSettingPlayPage: 15,
          lightnessSettingBody: 10,
          lightnessSettingPlayerBar: 25
        },
        lightPrefs: {
          saturationSetting: 1,
          lightnessSettingNavBar: 85,
          lightnessSettingPlayPage: 80,
          lightnessSettingBody: 95,
          lightnessSettingPlayerBar: 85
        }
      }
    },
  ],
  visualizers: [
    {
      visualizerId: "visualizerId:0",
      name: "Wavy"
    },
    {
      visualizerId: "visualizerId:1",
      name: "Bars",
      activeVariant: "variantId:5",
      barWidth: 30,
      lineWidth: 4,
      gap: 4,
      variants: [
        {
          variantId: "variantId:1",
          name: "White"
        },
        {
          variantId: "variantId:2",
          name: "Black"
        },
        {
          variantId: "variantId:3",
          name: "RGB"
        },
        {
          variantId: "variantId:4",
          name: "Accent"
        },
        {
          variantId: "variantId:5",
          name: "Palette"
        },
        {
          variantId: "variantId:6",
          name: "Dancing Palette"
        }
      ]
    }
  ],
  options: [
    {
      optionId: 'option1',
      optionName: 'Grayscale User Icon',
      value: true
    }
  ],
  experimentalAutoUseDeviceDarkLightMode: false
}


chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
  switch (details.reason) {
    // on installation add default values to storage. execute content script onto existing open tabs
    case "install":
      chrome.storage.sync.set(defaults);
      chrome.tabs.query({url: 'https://music.youtube.com/*'}, (tabs) => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.bundle.js'],
          });
        }
      });
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      chrome.storage.sync.get(null, (res) => {
        let currentStorage = res;

        let updatedThemes = defaults.themes.map(theme => {
          let foundTheme = currentStorage.themes.find(existingTheme => existingTheme.themeId === theme.themeId);
          if (foundTheme) {
            let newTheme = {...theme, userPrefs: foundTheme.userPrefs};
            return newTheme;
          } else {
            return theme;
          }
        });
        chrome.storage.sync.set({extensionVersion: defaults.extensionVersion, themes: updatedThemes});
      });

      // chrome.storage.sync.clear();
      // chrome.storage.sync.set(defaults);
      chrome.tabs.query({url: 'https://music.youtube.com/*'}, (tabs) => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.bundle.js'],
          });
        }
      });
      break;

    default: 
      chrome.storage.sync.set(defaults);
      chrome.tabs.query({url: 'https://music.youtube.com/*'}, (tabs) => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.bundle.js'],
          });
        }
      });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(`Received message: ${message}`);

  switch (message) {
    case "reset": 
      console.log(`Resetting to defaults`)
      chrome.storage.sync.clear();
      chrome.storage.sync.set(defaults);
      chrome.tabs.query({url: 'https://music.youtube.com/*'}, (tabs) => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['contentScript.bundle.js'],
          });
        }
      });
      sendResponse("Reset to defaults");
      break;

    case "r u there?":
      console.log(`Sending response: I'm here`);
      sendResponse("I'm here");
      break;

    default:
      console.log(`Sending response: "Yo"`);
      sendResponse("Yo");
  }
});

// chrome.runtime.onConnect.addListener(port => {});