import handleOnInstalled from "./handleOnInstalled";
import handleOnMessage from "./handleOnMessage";

chrome.runtime.onInstalled.addListener(handleOnInstalled);
chrome.runtime.onMessage.addListener(handleOnMessage);