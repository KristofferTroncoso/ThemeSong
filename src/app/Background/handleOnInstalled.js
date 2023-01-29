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
      // chrome.storage.local.clear();

      // whenever extension is updated, show update note
      chrome.storage.local.set({ showUpdateNote: true });

      executeContentScriptOnYouTubeMusicTabs();
      break;

    // other cases are "chrome_update" and "shared_module_update"
    default:
      executeContentScriptOnYouTubeMusicTabs();
  }
}

export default handleOnInstalled;
