import  { executeContentScriptOnYouTubeMusicTabs } from './scripts';

chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);

  switch (details.reason) {
    // on installation, execute content script onto existing open tabs
    case "install":
      executeContentScriptOnYouTubeMusicTabs();
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      // chrome.storage.local.clear();
      executeContentScriptOnYouTubeMusicTabs();
      break;


    // other cases are "chrome_update" and "shared_module_update"
    default: 
      executeContentScriptOnYouTubeMusicTabs();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message, 'from', sender);

  switch (message) {
    case "reset": 
      console.log(`Resetting to defaults`)
      chrome.storage.sync.clear();
      // chrome.storage.sync.set(defaults);
      executeContentScriptOnYouTubeMusicTabs();
      sendResponse("Reset to defaults");
      break;

    case "r u there?":
      console.log(`Sending response: I'm here`);
      sendResponse("I'm here");
      break;

    default:
      console.log(`Sending response: "It's a me, the background script!"`);
      sendResponse("It's a me, the background script!");
  }
});