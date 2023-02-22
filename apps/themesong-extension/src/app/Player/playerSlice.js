export const createPlayerSlice = (set) => ({
  isSongPlaying: true,
  playerUiState: "INACTIVE",
  hideCaptions: false,
  changeIsSongPlaying: (payload) => {
    console.log("playerSlice: changeIsSongPlaying");
    set((state) => {
      state.player.isSongPlaying = payload;
    });
  },
  changePlayerUiState: (payload) => {
    console.log("playerSlice: changePlayerUiState");
    set((state) => {
      state.player.playerUiState = payload;
    });
  },
  changeHideCaptions: (payload) => {
    console.log("playerSlice: changeHideCaptions");
    set((state) => {
      state.player.hideCaptions = payload;
    });
  },
});
