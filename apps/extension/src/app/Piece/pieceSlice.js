export const createPieceSlice = (set, get) => ({
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
    {
      id: "34637b81-0c1a-4982-b130-0ff9ac232e4d",
      name: "Quick Access Panel alt icon",
      icons: ["Headphones", "Lollipop", "Dog", "Cat", "Burger", "Pokeball", "IceCream", "GuitarAmp", "Heartbeat"],
    },
    {
      id: "2a606045-80f3-4aee-93de-cf3cd39d2920",
      name: "User Snippet",
    },
    {
      id: "895e0c50-c0a0-4752-8014-bd4cb5029e9b",
      name: "Lyrics font size",
    },
    {
      id: "f900c555-d735-439f-b926-d5e407ba25f8",
      name: "High Res Song Image",
    },
    {
      id: "084b2bee-0686-4cc1-be6f-a9a6f87b8ee8",
      name: "Center Song Controls",
    },
  ],
  prefs: {
    "bf472cf5-689f-4be0-9eef-67c5cc8715e9": { enabled: false },
    "a2c1185b-1d9b-4c0f-aef3-8c7887374cc5": { enabled: false },
    "fe8f93d0-45a3-4214-afa5-3e3db4274e1b": { enabled: false },
    "34637b81-0c1a-4982-b130-0ff9ac232e4d": { enabled: false, icon: "Headphones" },
    "2a606045-80f3-4aee-93de-cf3cd39d2920": {
      enabled: false,
      css: "",
    },
    "895e0c50-c0a0-4752-8014-bd4cb5029e9b": { enabled: false, size: 18 },
    "f900c555-d735-439f-b926-d5e407ba25f8": { enabled: false },
    "084b2bee-0686-4cc1-be6f-a9a6f87b8ee8": { enabled: false },
  },
  togglePiece: (payload) => {
    console.log("pieces: togglePiece");
    set((state) => {
      state.piece.prefs[payload] = { ...state.piece.prefs[payload], enabled: !state.piece.prefs[payload].enabled };
    });
    chrome.storage.local.set({ piecePrefs: get().piece.prefs });
  },
  setPiecePrefs: (pieceId, payload) => {
    console.log("pieces: setPiecePrefs");
    set((state) => {
      state.piece.prefs[pieceId] = payload;
    });
    chrome.storage.local.set({ piecePrefs: get().piece.prefs });
  },
  mergePiecePrefs: (payload) => {
    console.log("pieces: mergePiecePrefs");
    console.log(payload);
    set((state) => {
      state.piece.prefs = { ...state.piece.prefs, ...payload };
    });
  },
  overwriteAllPiecePrefs: (payload) => {
    console.log("pieces: overwriteAllPiecePrefs");
    console.log(payload);
    set((state) => {
      state.piece.prefs = payload;
    });
  },
});
