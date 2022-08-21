import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songName: "Song Name",
  songArtist: "Artist",
  songAlbum: "Album"
};

export const songDetails = createSlice({
  name: 'songDetails',
  initialState,
  reducers: {
    changeSongDetails: (state, action) => {
      console.log('songDetailsSlice: changeSongDetails')
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