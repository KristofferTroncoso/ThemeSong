export const createPiecesSlice = (set, get) => ({
  pieces: [
    {
      id: "bf472cf5-689f-4be0-9eef-67c5cc8715e9",
      name: "Hide Cast Button",
    },
    {
      id: "a2c1185b-1d9b-4c0f-aef3-8c7887374cc5",
      name: "Hide Dislike Button",
    },
    {
      id: "fe8f93d0-45a3-4214-afa5-3e3db4274e1b",
      name: "Hide Video Captions",
    },
    // {
    //   id: "2a606045-80f3-4aee-93de-cf3cd39d2920",
    //   name: "User Snippet",
    // },
  ],
  prefs: {
    "bf472cf5-689f-4be0-9eef-67c5cc8715e9": { enabled: false },
    "a2c1185b-1d9b-4c0f-aef3-8c7887374cc5": { enabled: false },
    "fe8f93d0-45a3-4214-afa5-3e3db4274e1b": { enabled: false },
    // "2a606045-80f3-4aee-93de-cf3cd39d2920": {
    //   enabled: false,
    //   css: "/* put css styles here */",
    // },
  },
  togglePiece: (payload) => {
    console.log("pieces: togglePiece");
    set((state) => {
      state.pieces.prefs[payload] = { ...state.pieces.prefs[payload], enabled: !state.pieces.prefs[payload].enabled };
    });
    chrome.storage.local.set({ piecesPrefs: get().pieces.prefs });
  },
  setPiecesPrefs: (pieceId, payload) => {
    console.log("pieces: setPiecesPrefs");
    set((state) => {
      state.pieces.prefs[pieceId] = payload;
    });
    chrome.storage.local.set({ piecesPrefs: get().pieces.prefs });
  },
  overwriteAllPiecesPrefs: (payload) => {
    console.log("pieces: overwriteAllPiecesPrefs");
    console.log(payload);
    set((state) => {
      state.pieces.prefs = payload;
    });
  },
});
