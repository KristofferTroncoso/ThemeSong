export const createPopupSlice = (set, get) => ({
  prefs: {
    activePopupTab: 1,
  },
  setActivePopupTab: (payload) => {
    console.log("popupSlice: setActivePopupTab");
    set((state) => {
      state.popup.prefs.activePopupTab = payload;
    });
    chrome.storage.local.set({ popupPrefs: get().popup.prefs });
  },
  overwriteAllPopupPrefs: (payload) => {
    console.log("popupSlice: overwriteAllPopupPrefs");
    console.log(payload);
    set((state) => {
      state.popup.prefs = payload;
    });
  },
});
