export const createMediaSlice = (set, get) => ({
  metadata: {
    title: "",
    artist: "",
    album: "",
    artwork: [{ src: "" }],
    url: "",
    liked: false,
  },
  changeMedia: () => {
    console.log("mediaSlice: changeMedia");
    if (true) {
      set((state) => {
        state.media.metadata = {
          title: navigator.mediaSession.metadata.title,
          artist: navigator.mediaSession.metadata.artist,
          album: navigator.mediaSession.metadata.album,
          artwork: navigator.mediaSession.metadata.artwork,
          url: document.querySelector(".ytp-title-link").href,
          liked:
            document.querySelector(".middle-controls-buttons #like-button-renderer").getAttribute("like-status") ===
            "LIKE"
              ? true
              : false,
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
            liked:
              document.querySelector(".middle-controls-buttons #like-button-renderer").getAttribute("like-status") ===
              "LIKE"
                ? true
                : false,
          },
        },
      });
    }
  },
  changeMetadataKey: (payload) => {
    console.log("mediaSlice: changeMetadataKey");
    set((state) => {
      state.media.metadata = { ...state.media.metadata, ...payload };
    });
  },
  mergeMedia: (payload) => {
    console.log("mediaSlice: mergeMedia");
    set((state) => {
      if (state.media.metadata.title !== payload.metadata.title) {
        state.media.metadata = { ...state.media.metadata, ...payload.metadata };
      }
    });
  },
});
