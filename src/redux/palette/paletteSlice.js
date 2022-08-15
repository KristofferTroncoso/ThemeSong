import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  palette: {
    Vibrant: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
    LightVibrant: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
    DarkVibrant: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
    Muted: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
    LightMuted: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
    DarkMuted: {
        hex: "#7f7f7f",
        rgb: [127.5, 127.5, 127.5],
        hsl: [0, 0, 0.5],
        population: 100,
        r: 127,
        g: 127,
        b: 127,
        bodyTextColor: "#000",
        titleTextColor: "#000"
    },
  },
  mostPopulatedColor: {
    hex: "#7f7f7f",
    rgb: [127.5, 127.5, 127.5],
    hsl: [0, 0, 0.5],
    population: 100,
    r: 127,
    g: 127,
    b: 127,
    bodyTextColor: "#000",
    titleTextColor: "#000"
  }
};

export const palette = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    changePalette: (state, action) => {
      console.log('paletteSlice: changePalette');
      state.palette = action.payload;
    },
    changeMostPopulatedColor: (state, action) => {
      console.log('paletteSlice: changeMostPopulatedColor')
      state.mostPopulatedColor = action.payload;
    }
  }
});

export const { changePalette, changeMostPopulatedColor } = palette.actions;

export default palette.reducer;