export const createMediaSlice = (set, get) => ({
  metadata: {
    title: "",
    artist: "",
    album: "",
    artwork: [{ src: "" }],
    url: "",
  },
  changeMedia: () => {
    console.log("mediaSlice: changeMedia");
    if (navigator.mediaSession.metadata.title !== get().media.metadata.title) {
      set((state) => {
        state.media.metadata = {
          title: navigator.mediaSession.metadata.title,
          artist: navigator.mediaSession.metadata.artist,
          album: navigator.mediaSession.metadata.album,
          artwork: navigator.mediaSession.metadata.artwork,
          url: document.querySelector(".ytp-title-link").href,
        };
      });
      chrome.storage.local.set({
        media: {
          metadata: {
            title: navigator.mediaSession.metadata.title,
            artist: navigator.mediaSession.metadata.artist,
            album: navigator.mediaSession.metadata.album,
            artwork: navigator.mediaSession.metadata.artwork,
            url: document.querySelector(".ytp-title-link").href,
          },
        },
      });
    }
  },
  mergeMedia: (payload) => {
    console.log("mediaSlice: mergeMedia");
    set((state) => {
      if (state.media.metadata.title !== payload.metadata.title) {
        state.media.metadata = payload.metadata;
      }
    });
  },
});
