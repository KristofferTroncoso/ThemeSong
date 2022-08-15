import { defaults } from './defaults';

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
      // chrome.storage.sync.get(null, (res) => {
      //   let currentStorage = res;

      //   let updatedThemes = defaults.themes.map(theme => {
      //     let foundTheme = currentStorage.themes.find(existingTheme => existingTheme.themeId === theme.themeId);
      //     if (foundTheme) {
      //       let newTheme = {...theme, userPrefs: foundTheme.userPrefs};
      //       return newTheme;
      //     } else {
      //       return theme;
      //     }
      //   });
      //   chrome.storage.sync.set({
      //     extensionVersion: defaults.extensionVersion, 
      //     themes: updatedThemes, 
      //     visualizers: defaults.visualizers,
      //     activeVisualizer: defaults.activeVisualizer,
      //     // experimentalAutoUseDeviceDarkLightMode: defaults.experimentalAutoUseDeviceDarkLightMode,
      //     // activePage: defaults.activePage
      //   });
      // });

      // chrome.storage.local.clear();
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