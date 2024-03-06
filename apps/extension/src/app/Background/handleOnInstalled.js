import { executeContentScriptOnYouTubeMusicTabs } from "./scripts";

export function handleOnInstalled(details) {
  console.log(details);
  let locale = chrome.i18n.getMessage("@@ui_locale");
  let browser = "chrome";
  if (navigator.userAgent.toLowerCase().includes("firefox")) {
    browser = "firefox";
  } else {
    browser = "chrome";
  }

  switch (details.reason) {
    case "install":
      chrome.storage.local.get("extensionPrefs", (res) => {
        chrome.storage.local.set({
          extensionPrefs: { ...res.extensionPrefs, locale, browser },
        });
      });

      executeContentScriptOnYouTubeMusicTabs();
      break;

    // on update (extension update, chrome update, or extension refresh)
    case "update":
      chrome.storage.local.get("extensionPrefs", (res) => {
        // whenever extension is updated, show update note
        chrome.storage.local.set({
          extensionPrefs: { ...res.extensionPrefs, showUpdateNote: true, showNewUserNote: false },
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
