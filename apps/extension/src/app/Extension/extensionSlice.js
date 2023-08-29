export const createExtensionSlice = (set, get) => ({
  prefs: {
    showUpdateNote: false,
  },
  // browser: "chrome",
  setShowUpdateNote: (payload) => {
    console.log("extensionSlice: setShowUpdateNote");
    set((state) => {
      state.extension.prefs.showUpdateNote = payload;
    });
    chrome.storage.local.set({ extensionPrefs: get().extension.prefs });
  },
  overwriteAllExtensionPrefs: (payload) => {
    console.log("extensionSlice: overwriteAllExtensionPrefs");
    set((state) => {
      state.extension.prefs = payload;
    });
  },
  // changeBrowser: (payload) => {
  //   console.log("extensionSlice: changeBrowser");
  //   set((state) => {
  //     state.extension.browser = payload;
  //   });
  // },
});
