export function executeContentScriptOnYouTubeMusicTabs() {
  chrome.tabs.query({ url: "https://music.youtube.com/*" }, (tabs) => {
    for (let tab of tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.bundle.js"],
      });
    }
  });
}
