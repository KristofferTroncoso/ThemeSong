export const createPaletteSlice = (set) => ({
  palette: [
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
    {
      rgb: "rgb(127 127 127)",
      hsl: [0, 0, 0.5],
      oklch: [0.2, 0, 200],
    },
  ],
  changePalette: (payload) => {
    console.log("paletteSlice: changePalette");
    set((state) => {
      state.palette.palette = payload;
    });
  },
});
