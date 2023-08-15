export const createPiecesSlice = (set) => ({
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
      id: "2706684f-a566-4ad0-8341-50acb366ad7a",
      name: "Add Confirm on unlike",
    },
  ],
  piecesPrefs: {
    "bf472cf5-689f-4be0-9eef-67c5cc8715e9": true,
    "a2c1185b-1d9b-4c0f-aef3-8c7887374cc5": true,
    "2706684f-a566-4ad0-8341-50acb366ad7a": false,
  },
  togglePiece: (payload) => {
    console.log("pieces: togglePiece");
    set((state) => {
      state.pieces.piecesPrefs[payload] = !state.pieces.piecesPrefs[payload];
    });
  },
  changePiecesPrefs: (payload) => {
    console.log("pieces: changePiecesPrefs");
    console.log(payload);
    set((state) => {
      state.pieces.piecesPrefs = payload;
    });
  },
});
