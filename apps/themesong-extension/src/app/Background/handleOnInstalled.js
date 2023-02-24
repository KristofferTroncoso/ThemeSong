import { executeContentScriptOnYouTubeMusicTabs } from "./scripts";
import { userPrefsTransferFromV047toV050 } from "./archivedScripts/archivedScripts";

export function handleOnInstalled(details) {
  console.log(details);
  const currentVersion = chrome.runtime.getManifest().version;
  switch (details.reason) {
    // on installation, execute content script onto existing open tabs
    case "install":
      executeContentScriptOnYouTubeMusicTabs();
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      if (details.previousVersion !== currentVersion) {
        userPrefsTransferFromV047toV050();
      }

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
