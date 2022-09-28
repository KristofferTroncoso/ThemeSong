import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playPauseState: "Play",
};

export const player = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changePlayPauseState: (state, action) => {
      console.log('playerSlice: changePlayPauseState')
      state.playPauseState = action.payload;
    }, 
  }
});

export const { changePlayPauseState } = player.actions;

export default player.reducer;