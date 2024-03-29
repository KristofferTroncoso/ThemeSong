import { executeContentScriptOnYouTubeMusicTabs } from "./scripts";
import handleIconColor from "../Extension/IconColor/handleIconColor";

function handleOnMessage(message, sender, sendResponse) {
  console.log("Received message:", message, "from", sender);
  if (typeof message === "string") {
    switch (message) {
      case "reset":
        console.log(`Resetting to defaults`);
        chrome.storage.local.clear();
        executeContentScriptOnYouTubeMusicTabs();
        sendResponse("Reset to defaults");
        window.location.reload();
        break;

      case "openSidePlayer":
        chrome.tabs.query({}, (tabs) => {
          console.log(tabs);
          chrome.sidePanel.open({ windowId: tabs[0].windowId });
          chrome.windows.update(tabs[0].windowId, { focused: true });
        });
        break;

      default:
        console.log(`Sending response: "It's a me, the background script!"`);
        sendResponse("It's a me, the background script!");
    }
  } else if (typeof message === "object") {
    for (let [key, value] of Object.entries(message)) {
      switch (key) {
        case "notify":
          chrome.notifications.create(
            null,
            {
              type: "basic",
              iconUrl: value.songImg || "/assets/icon-128.png",
              title: value.songName,
              // contextMessage: value.songArtist,
              message: value.songArtist,
              buttons: [{ title: "⏭️" }],
              silent: true,
            },
            (notificationId) =>
              setTimeout(() => {
                chrome.notifications.clear(notificationId);
              }, 15000)
          );
          break;

        case "iconColor":
          try {
            handleIconColor(value);
          } catch {
            console.log("cant handle iconColor");
          }
          break;

        case "search":
          chrome.search.query({ disposition: "NEW_TAB", text: value });
          break;

        default:
          console.log("default case");
          sendResponse("It's a me, the background script!");
      }
    }
  }
}

export default handleOnMessage;
