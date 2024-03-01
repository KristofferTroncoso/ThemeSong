import handleOnInstalled from "./handleOnInstalled";
import handleOnMessage from "./handleOnMessage";

chrome.runtime.onInstalled.addListener(handleOnInstalled);
chrome.runtime.onMessage.addListener(handleOnMessage);
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  chrome.tabs.query({}, (tabs) => {
    let ytmTabs = tabs.filter((tab) => "url" in tab);
    console.log(ytmTabs);
    chrome.tabs.sendMessage(ytmTabs[0].id, { message: "next-button" });
  });
});
