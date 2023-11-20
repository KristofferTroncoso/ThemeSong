export const createThemeSlice = (set, get) => ({
  themes: [
    {
      id: "416034f2-bfb8-46e8-9929-5805dd59a688",
      dateAdded: 20220207,
      name: "Off",
    },
    {
      id: "db8854e3-6753-4639-b244-c8091f3b9fcb",
      dateAdded: 20220602,
      name: "Dynamic",
    },
    {
      id: "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8",
      dateAdded: 20220702,
      name: "Static",
    },
    {
      id: "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f",
      dateAdded: 20221111,
      name: "Apple Music",
    },
    {
      id: "55f83bbd-d794-49a8-8912-2b53af3f1d3f",
      dateAdded: 20221111,
      name: "YouTube Music Mobile",
    },
  ],
  prefs: {
    activeTheme: "db8854e3-6753-4639-b244-c8091f3b9fcb",
    "db8854e3-6753-4639-b244-c8091f3b9fcb": {
      appearance: "dark",
      dark: {
        saturation: 0.7,
        lightness: [15, 15, 20, 10],
      },
      light: {
        saturation: 0.9,
        lightness: [85, 85, 80, 90],
      },
    },
    "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8": {
      appearance: "light",
      dark: {
        hue: 216,
        saturation: 70,
        lightness: [16, 16, 24, 10],
      },
      light: {
        hue: 340,
        saturation: 90,
        lightness: [85, 80, 85, 95],
      },
    },
    "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f": {
      appearance: "system",
    },
  },
  setActiveTheme: (payload) => {
    console.log("themeSlice: setActiveTheme");
    console.log(payload);
    set((state) => {
      state.theme.prefs.activeTheme = payload;
    });
    chrome.storage.local.set({ themePrefs: get().theme.prefs });
  },
  setSingleThemePrefs: (themeId, newThemePrefObject) => {
    console.log("themeSlice: setSingleThemePrefs");
    console.log(newThemePrefObject);
    set((state) => {
      state.theme.prefs[themeId] = newThemePrefObject;
    });
    chrome.storage.local.set({ themePrefs: get().theme.prefs });
  },
  mergeThemePrefs: (payload) => {
    console.log("themeSlice: mergeThemePrefs");
    console.log(payload);
    set((state) => {
      state.theme.prefs = { ...state.theme.prefs, ...payload };
    });
  },
  overwriteAllThemePrefs: (payload) => {
    console.log("themeSlice: overwriteAllThemePrefs");
    console.log(payload);
    set((state) => {
      state.theme.prefs = payload;
    });
  },
});
