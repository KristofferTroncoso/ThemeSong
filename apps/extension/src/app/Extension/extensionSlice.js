export const createExtensionSlice = (set, get) => ({
  prefs: {
    showUpdateNote: false,
    locale: "en",
    browser: "chrome",
  },
  setShowUpdateNote: (payload) => {
    console.log("extensionSlice: setShowUpdateNote");
    set((state) => {
      state.extension.prefs.showUpdateNote = payload;
    });
    chrome.storage.local.set({ extensionPrefs: get().extension.prefs });
  },
  mergeExtensionPrefs: (payload) => {
    console.log("extensionSlice: mergeExtensionPrefs");
    set((state) => {
      state.extension.prefs = { ...state.extension.prefs, ...payload };
    });
  },
  overwriteAllExtensionPrefs: (payload) => {
    console.log("extensionSlice: overwriteAllExtensionPrefs");
    set((state) => {
      state.extension.prefs = payload;
    });
  },
  setLocale: (payload) => {
    console.log("extensionSlice: setLocale");
    set((state) => {
      state.extension.prefs.locale = payload;
    });
    chrome.storage.local.set({ extensionPrefs: get().extension.prefs });
  },
  // changeBrowser: (payload) => {
  //   console.log("extensionSlice: changeBrowser");
  //   set((state) => {
  //     state.extension.browser = payload;
  //   });
  // },
});
