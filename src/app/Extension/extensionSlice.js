export const createExtensionSlice = (set) => ({
  showUpdateNote: false,
  changeShowUpdateNote: (payload) => {
    console.log("extensionSlice: changeShowUpdateNote");
    set((state) => {
      state.extension.showUpdateNote = payload;
    });
  },
});
