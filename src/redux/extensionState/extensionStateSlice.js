import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  extensionVersion: "0.2.2",
  activePopupTab: 1
};

export const extensionState = createSlice({
  name: 'extensionState',
  initialState,
  reducers: {
    changeActivePopupTab: (state, action) => {
      console.log('extensionStateSlice: changeActivePopupTab')
      state.activePopupTab = action.payload;
      chrome.storage.local.set({activePopupTab: action.payload})
    }, 
  }
});

export const { changeActivePopupTab } = extensionState.actions;

export default extensionState.reducer;