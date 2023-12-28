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
          title: get().media.metadata.title,
          artist: get().media.metadata.artist,
          album: get().media.metadata.album,
          artwork: get().media.metadata.artwork,
          url: get().media.metadata.url,
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
