export const createPlayerSlice = (set) => ({
  playPauseState: "Play",
  playerUiState: "PLAYER_PAGE_OPEN",
  changePlayPauseState: (payload) => {
    console.log('playerSlice: changePlayPauseState');
    set(state => { state.player.playPauseState = payload; })
  }, 
  changePlayerUiState: (payload) => {
    console.log('playerSlice: changePlayerUiState');
    set(state => { state.player.playerUiState = payload; })
  }
})
