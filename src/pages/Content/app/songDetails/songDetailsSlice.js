import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songName: "Best Song Name",
  songArtist: "Best Artist"
};

export const songDetails = createSlice({
  name: 'songDetails',
  initialState,
  reducers: {
    changeSongDetails: (state, action) => {
      console.log('reducer: changing song details')
      state.songName = document.querySelector("ytmusic-player-bar .title").title;
      if (document.querySelector("ytmusic-player-bar .byline").innerText !== "") {
        state.songArtist = document.querySelector("ytmusic-player-bar .byline").title;
      } else {
        state.songArtist = document.querySelector("ytmusic-player-bar .byline").innerText;
      }
    }
  }
});

export const { changeSongDetails } = songDetails.actions;

export default songDetails.reducer;