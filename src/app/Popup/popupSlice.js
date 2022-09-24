import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePopupTab: 1
};

export const popup = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changeActivePopupTab: (state, action) => {
      console.log('popup: changeActivePopupTab')
      state.activePopupTab = action.payload;
    }
  }
});

export const { changeActivePopupTab } = popup.actions;

export default popup.reducer;