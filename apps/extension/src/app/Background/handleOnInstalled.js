import { executeContentScriptOnYouTubeMusicTabs } from "./scripts";

export function handleOnInstalled(details) {
  console.log(details);
  let locale = chrome.i18n.getMessage("@@ui_locale");

  switch (details.reason) {
    case "install":
      chrome.storage.local.get("extensionPrefs", (res) => {
        chrome.storage.local.set({
          extensionPrefs: { ...res.extensionPrefs, locale },
        });
      });

      executeContentScriptOnYouTubeMusicTabs();
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      chrome.storage.local.get("extensionPrefs", (res) => {
        if (details.previousVersion >= "1.0.2") {
          locale = res.extensionPrefs.locale;
        }

        // whenever extension is updated, show update note
        chrome.storage.local.set({
          extensionPrefs: { ...res.extensionPrefs, locale, showUpdateNote: true },
        });
      });

      executeContentScriptOnYouTubeMusicTabs();
      break;

    // other cases are "chrome_update" and "shared_module_update"
    default:
      executeContentScriptOnYouTubeMusicTabs();
  }
}

export default handleOnInstalled;
