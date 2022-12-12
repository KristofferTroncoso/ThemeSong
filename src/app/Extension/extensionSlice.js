export const createExtensionSlice = (set) => ({
  showUpdateNote: true,
  changeShowUpdateNote: (payload) => {
    console.log('extensionSlice: changeShowUpdateNote');
    set(state => { state.extension.showUpdateNote = payload; })
  }
})
