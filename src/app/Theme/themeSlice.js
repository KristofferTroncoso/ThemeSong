export const createThemeSlice = (set) => ({
  activeTheme: "themeId:6",
  themes: [
    {
      themeId: "themeId:0",
      id: "416034f2-bfb8-46e8-9929-5805dd59a688",
      dateAdded: 20220207,
      name: "Off",
      isDynamic: false,
      hasLightMode: false,
      hasDarkMode: true,
    },
    {
      themeId: "themeId:6",
      id: "db8854e3-6753-4639-b244-c8091f3b9fcb",
      dateAdded: 20220602,
      name: "Dynamic",
      isDynamic: true,
      lightDarkMode: true,
    },
    {
      themeId: "themeId:7",
      id: "b458eaae-0cbd-4a44-8847-c7a6a6ea1be8",
      dateAdded: 20220702,
      name: "Static",
      isDynamic: false,
      lightDarkMode: true,
    },
    // {
    //   themeId: "themeId:8",
    //   id: "8383a680-c786-4c8d-82ee-59e0f1ea7c50",
    //   dateAdded: 20221014,
    //   name: "Custom",
    //   isDynamic: false,
    // },
    {
      themeId: "themeId:9",
      id: "76dd54c5-78a2-4ca3-9c16-3d0d1aab367f",
      dateAdded: 20221111,
      name: "Ditto",
      isDynamic: false,
      variants: [
        {
          variantId: "variantId:1",
          id: "55f83bbd-d794-49a8-8912-2b53af3f1d3f",
          name: "YouTube Music Mobile",
        },
        {
          variantId: "variantId:2",
          id: "3f71704c-d344-4bd0-9013-a2da7bda13ef",
          name: "Apple Music",
        },
      ],
    },
  ],
  themePrefs: [
    {
      themeId: "themeId:6",
      appearanceSetting: "dark", // 'dark', 'light', 'system'
      darkPrefs: {
        saturationSetting: 0.8,
        lightnessSettingNavBar: 20,
        lightnessSettingPlayPage: 15,
        lightnessSettingBody: 8,
        lightnessSettingPlayerBar: 25,
      },
      lightPrefs: {
        saturationSetting: 0.9,
        lightnessSettingNavBar: 75,
        lightnessSettingPlayPage: 70,
        lightnessSettingBody: 90,
        lightnessSettingPlayerBar: 75,
      },
    },
    {
      themeId: "themeId:7",
      appearanceSetting: "dark", // 'dark', 'light', 'system'
      darkPrefs: {
        hue: 216,
        saturationSetting: 70,
        lightnessSettingNavBar: 16,
        lightnessSettingPlayPage: 16,
        lightnessSettingBody: 10,
        lightnessSettingPlayerBar: 24,
      },
      lightPrefs: {
        hue: 340,
        saturationSetting: 90,
        lightnessSettingNavBar: 85,
        lightnessSettingPlayPage: 80,
        lightnessSettingBody: 95,
        lightnessSettingPlayerBar: 85,
      },
    },
    {
      themeId: "themeId:9",
      activeVariant: "variantId:2",
    },
  ],
  changeActiveTheme: (payload) => {
    console.log("themeSlice: changeActiveTheme");
    console.log(payload);
    set((state) => {
      state.theme.activeTheme = payload;
    });
  },
  changeThemePrefs: (payload) => {
    console.log("themeSlice: changeThemePrefs");
    console.log(payload);
    set((state) => {
      state.theme.themePrefs = payload;
    });
  },
});
