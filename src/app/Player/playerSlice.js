export const createPlayerSlice = (set) => ({
  isSongPlaying: true,
  playerUiState: "INACTIVE",
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
});
