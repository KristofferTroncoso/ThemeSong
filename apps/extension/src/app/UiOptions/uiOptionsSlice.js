export const createUiOptionsSlice = (set) => ({
  removeDislikeButton: true,
  removeCastButton: true,
  removeUpgradeButton: true,
  confirmOnUnlike: true,
  // changeRemoveDislikeButton: (state, action) => {
  //   console.log('uiOptions: changeRemoveDislikeButton')
  //   state.removeDislikeButton = action.payload;
  // },
  // toggleRemoveDislikeButton: (state) => {
  //   console.log('uiOptions: toggleRemoveDislikeButton')
  //   state.removeDislikeButton = !state.removeDislikeButton;
  // }
});
