export const createExtensionSlice = (set) => ({
  showUpdateNote: false,
  browser: "chrome",
  changeShowUpdateNote: (payload) => {
    console.log("extensionSlice: changeShowUpdateNote");
    set((state) => {
      state.extension.showUpdateNote = payload;
    });
  },
  changeBrowser: (payload) => {
    console.log("extensionSlice: changeBrowser");
    set((state) => {
      state.extension.browser = payload;
    });
  },
});
