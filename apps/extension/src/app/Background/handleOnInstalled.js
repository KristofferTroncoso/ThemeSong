import { executeContentScriptOnYouTubeMusicTabs } from "./scripts";

export function handleOnInstalled(details) {
  console.log(details);
  switch (details.reason) {
    // on installation, execute content script onto existing open tabs
    case "install":
      executeContentScriptOnYouTubeMusicTabs();
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      // whenever extension is updated, show update note
      chrome.storage.local.get("extensionPrefs", (res) => {
        chrome.storage.local.set({ extensionPrefs: { ...res.extensionPrefs, showUpdateNote: true } });
      });

      executeContentScriptOnYouTubeMusicTabs();
      break;

    // other cases are "chrome_update" and "shared_module_update"
    default:
      executeContentScriptOnYouTubeMusicTabs();
  }
}

export default handleOnInstalled;
