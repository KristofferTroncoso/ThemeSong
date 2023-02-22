export const createPopupSlice = (set) => ({
  activePopupTab: 1,
  changeActivePopupTab: (payload) => {
    console.log("popup: changeActivePopupTab");
    set((state) => {
      state.popup.activePopupTab = payload;
    });
  },
});
