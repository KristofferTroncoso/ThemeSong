import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  removeDislikeButton: true,


};

export const miscSettings = createSlice({
  name: 'miscSettings',
  initialState,
  reducers: {
    changeRemoveDislikeButton: (state, action) => {
      console.log('miscSettingsSlice: changeRemoveDislikeButton')
      state.removeDislikeButton = action.payload;
    },
    toggleRemoveDislikeButton: (state) => {
      console.log('miscSettingsSlice: toggleRemoveDislikeButton')
      state.removeDislikeButton = !state.removeDislikeButton;
    }
  }
});

export const { changeRemoveDislikeButton, toggleRemoveDislikeButton } = miscSettings.actions;

export default miscSettings.reducer;