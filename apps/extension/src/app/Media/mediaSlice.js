export const createMediaSlice = (set, get) => ({
  metadata: {
    title: "",
    artist: "",
    album: "",
    artwork: [{ src: "" }],
  },
  changeMedia: () => {
    console.log("mediaSlice: changeMedia");
    set((state) => {
      state.media.metadata = {
        title: navigator.mediaSession.metadata.title,
        artist: navigator.mediaSession.metadata.artist,
        album: navigator.mediaSession.metadata.album,
        artwork: navigator.mediaSession.metadata.artwork,
      };
    });
    chrome.storage.local.set({
      media: {
        metadata: {
          title: get().media.metadata.title,
          artist: get().media.metadata.artist,
          album: get().media.metadata.album,
          artwork: get().media.metadata.artwork,
        },
      },
    });
  },
  mergeMedia: (payload) => {
    console.log("mediaSlice: mergeMedia");
    set((state) => {
      state.media.metadata = payload.metadata;
    });
  },
});
