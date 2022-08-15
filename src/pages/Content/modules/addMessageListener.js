

export function addMessageListener() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(`content-script: message received`);
    console.log(message);
    let messageKey = Object.keys(message)[0];
  
    switch (messageKey) {
      case "message":
        console.log(message[messageKey]);
        storageObj && chrome.storage.sync.set({activeTheme: storageObj.activeTheme, themes: storageObj.themes}, () => console.log(storageObj));
        sendResponse('yoyo')
        break;
  
      case "activeTheme":
        console.log('case activeTheme')
        console.log(message[messageKey]);
        applyTheme(message[messageKey]);
        break;
  
      case "themes":
        console.log('case themes')
        console.log(message[messageKey]);
        processThemeOnPrefsChange(storageObj.activeTheme)
        break;
  
      case "storageObj":
        console.log('received storageObj');
        console.log(message[messageKey]);
        storageObj = message[messageKey];
  
        sendResponse('received storageObj');
        break;
  
      default:
        console.log('default')
    }
  });
}