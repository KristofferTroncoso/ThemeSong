import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  removeDislikeButton: true,
  removeCastButton: true,
  removeUpgradeButton: true,
  confirmOnUnlike: true
};

export const uiOptions = createSlice({
  name: 'uiOptions',
  initialState,
  reducers: {
    changeRemoveDislikeButton: (state, action) => {
      console.log('uiOptions: changeRemoveDislikeButton')
      state.removeDislikeButton = action.payload;
    },
    toggleRemoveDislikeButton: (state) => {
      console.log('uiOptions: toggleRemoveDislikeButton')
      state.removeDislikeButton = !state.removeDislikeButton;
    }
  }
});

export const { changeRemoveDislikeButton, toggleRemoveDislikeButton } = uiOptions.actions;

export default uiOptions.reducer;