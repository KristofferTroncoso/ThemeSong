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
              buttons: [{ title: "Next" }],
              silent: true,
            },
            (notificationId) =>
              setTimeout(() => {
                chrome.notifications.clear(notificationId);
              }, 15000)
          );
          break;

        case "iconColor":
          handleIconColor(value);
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
