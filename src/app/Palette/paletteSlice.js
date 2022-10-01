import logPalette from './logPalette';

export const createPaletteSlice = (set) => ({
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
  },
  changePalette: (payload) => {
    console.log('paletteSlice: changePalette');
    logPalette(payload)
    set(state => { state.palette.palette = payload })
  },
  changeMostPopulatedColor: (payload) => {
    console.log('paletteSlice: changeMostPopulatedColor')
    set(state => { state.palette.mostPopulatedColor = payload })
  }
})
