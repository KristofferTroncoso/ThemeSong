
const defaults = {
  extensionVersion: "0.1.3",
  activeTheme: "themeId:1",
  themes: [
    {
      themeId: "themeId:0",
      dateAdded: 20220702,
      name: "Off",
      isDynamic: false,
      icon: 0
    },
    {
      themeId: "themeId:1",
      dateAdded: 20221002,
      name: "Dynamic Dark",
      isDynamic: true,
      icon: 0,
      userPrefs: {
        saturationSetting: 0.8, // percentage of chosen color's saturation.
        lightnessSettingNavBar: 20,
        lightnessSettingPlayPage: 15,
        lightnessSettingBody: 10,
        lightnessSettingPlayerBar: 20
      }
    },
    {
      themeId: "themeId:2", 
      dateAdded: 20221802,
      name: 'Static Dark',
      isDynamic: false,
      icon: 0,
      userPrefs: {
        hslColorHue: 216,
        navbarLight: 16,
        playPageLight: 16,
        playBarLight: 20,
        bgLight: 10,
        saturation: 70
      }
    }
  ]
}


chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
  switch (details.reason) {

    // on installation add default values to storage.
    case "install":
      chrome.storage.sync.set(defaults);
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      chrome.storage.sync.set({extensionVersion: defaults.extensionVersion});
      // chrome.storage.sync.clear();
      // chrome.storage.sync.set(defaults);
      break;

    default: 
      chrome.storage.sync.set(defaults);
  }

  chrome.tabs.query({url: 'https://music.youtube.com/*'}, (tabs) => {
    for (let tab of tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.bundle.js'],
      });
    }
  });
});


