export const createPlayerSlice = (set) => ({
  playPauseState: "Play",
  changePlayPauseState: (payload) => {
    console.log('playerSlice: changePlayPauseState');
    set(state => { state.player.playPauseState = payload; })
  }, 
})
