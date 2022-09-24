import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playPauseState: "Play",
};

export const playerState = createSlice({
  name: 'playerState',
  initialState,
  reducers: {
    changePlayPauseState: (state, action) => {
      console.log('playerStateSlice: changePlayPauseState')
      state.playPauseState = action.payload;
    }, 
  }
});

export const { changePlayPauseState } = playerState.actions;

export default playerState.reducer;