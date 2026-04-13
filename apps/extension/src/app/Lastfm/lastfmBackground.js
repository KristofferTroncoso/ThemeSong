import { getToken, getSession, AUTH_URL, updateNowPlaying, scrobble } from "./lastfmApi";

const SESSION_POLL_INTERVAL_MS = 2000;
const SESSION_POLL_TIMEOUT_MS = 120000;

function readLastfmPrefs() {
  return new Promise((resolve) => {
    chrome.storage.local.get("lastfmPrefs", (obj) => {
      resolve(obj.lastfmPrefs || { enabled: false, sessionKey: null, username: null });
    });
  });
}

function writeLastfmPrefs(prefs) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ lastfmPrefs: prefs }, resolve);
  });
}

async function handleConnect() {
  const token = await getToken();
  const authTab = await chrome.tabs.create({ url: AUTH_URL(token) });

  const started = Date.now();
  while (Date.now() - started < SESSION_POLL_TIMEOUT_MS) {
    await new Promise((r) => setTimeout(r, SESSION_POLL_INTERVAL_MS));
    try {
      const { sessionKey, username } = await getSession(token);
      const prefs = { enabled: true, sessionKey, username };
      await writeLastfmPrefs(prefs);
      try {
        if (authTab?.id) chrome.tabs.remove(authTab.id);
      } catch (e) {
        /* tab may already be closed */
      }
      return { ok: true, username };
    } catch (e) {
      if (e.code && e.code !== 14) throw e;
    }
  }
  throw new Error("Last.fm auth timed out — did you authorize the app?");
}

async function handleDisconnect() {
  await writeLastfmPrefs({ enabled: false, sessionKey: null, username: null });
  return { ok: true };
}

async function handleNowPlaying(payload) {
  const prefs = await readLastfmPrefs();
  if (!prefs.enabled || !prefs.sessionKey) return { ok: false, reason: "not-enabled" };
  await updateNowPlaying(payload, prefs.sessionKey);
  return { ok: true };
}

async function handleScrobble(payload) {
  const prefs = await readLastfmPrefs();
  if (!prefs.enabled || !prefs.sessionKey) return { ok: false, reason: "not-enabled" };

  const delays = [0, 2000, 10000, 30000];
  let lastErr;
  for (const delay of delays) {
    if (delay) await new Promise((r) => setTimeout(r, delay));
    try {
      await scrobble(payload, prefs.sessionKey);
      return { ok: true };
    } catch (e) {
      lastErr = e;
      console.warn("[lastfm] scrobble attempt failed, will retry:", e.message);
    }
  }
  throw lastErr;
}

export function handleLastfmMessage(message, sender, sendResponse) {
  if (!message || typeof message !== "object" || typeof message.type !== "string") return false;
  if (!message.type.startsWith("lastfm:")) return false;

  const run = async () => {
    switch (message.type) {
      case "lastfm:connect":
        return handleConnect();
      case "lastfm:disconnect":
        return handleDisconnect();
      case "lastfm:nowPlaying":
        return handleNowPlaying(message.payload);
      case "lastfm:scrobble":
        return handleScrobble(message.payload);
      default:
        throw new Error(`unknown lastfm message: ${message.type}`);
    }
  };

  run()
    .then((result) => sendResponse({ ok: true, result }))
    .catch((err) => {
      console.error("[lastfm]", message.type, err);
      sendResponse({ ok: false, error: err.message });
    });
  return true;
}
