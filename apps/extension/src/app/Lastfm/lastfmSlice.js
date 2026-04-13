export const createLastfmSlice = (set, get) => ({
  prefs: {
    enabled: false,
    sessionKey: null,
    username: null,
  },
  setSession: (payload) => {
    console.log("lastfmSlice: setSession");
    set((state) => {
      state.lastfm.prefs.sessionKey = payload.sessionKey;
      state.lastfm.prefs.username = payload.username;
      state.lastfm.prefs.enabled = true;
    });
    chrome.storage.local.set({ lastfmPrefs: get().lastfm.prefs });
  },
  clearSession: () => {
    console.log("lastfmSlice: clearSession");
    set((state) => {
      state.lastfm.prefs.sessionKey = null;
      state.lastfm.prefs.username = null;
      state.lastfm.prefs.enabled = false;
    });
    chrome.storage.local.set({ lastfmPrefs: get().lastfm.prefs });
  },
  setEnabled: (payload) => {
    console.log("lastfmSlice: setEnabled");
    set((state) => {
      state.lastfm.prefs.enabled = payload;
    });
    chrome.storage.local.set({ lastfmPrefs: get().lastfm.prefs });
  },
  mergeLastfmPrefs: (payload) => {
    console.log("lastfmSlice: mergeLastfmPrefs");
    set((state) => {
      state.lastfm.prefs = { ...state.lastfm.prefs, ...payload };
    });
  },
});
