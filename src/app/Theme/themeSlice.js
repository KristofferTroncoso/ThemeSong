export const createThemeSlice = (set) => ({
  activeTheme: "themeId:6",
  isDark: true,
  themes: [
    {
      themeId: "themeId:0",
      dateAdded: 20220207,
      name: "Off",
      isDynamic: false,
    },
    {
      themeId: "themeId:6",
      dateAdded: 20220602,
      name: "Dynamic",
      isDynamic: true,
      lightDarkMode: true,
    },
    {
      themeId: "themeId:7",
      dateAdded: 20220702,
      name: "Static",
      isDynamic: false,
      lightDarkMode: true,
    },
    // {
    //   themeId: "themeId:8",
    //   dateAdded: 20221014,
    //   name: "Custom",
    //   isDynamic: false,
    // },
    {
      themeId: "themeId:9",
      dateAdded: 20221111,
      name: "Ditto",
      isDynamic: false,
      variants: [
        {
          variantId: "variantId:1",
          name: "YouTube Music Mobile"
        },
        {
          variantId: "variantId:2",
          name: "Apple Music"
        }
      ]
    },
  ],
  themePrefs: [
    {
      themeId: "themeId:6",
      appearanceSetting: 'dark', // 'dark', 'light', 'system'
      darkPrefs: {
        saturationSetting: 0.8,
        lightnessSettingNavBar: 20,
        lightnessSettingPlayPage: 15,
        lightnessSettingBody: 8,
        lightnessSettingPlayerBar: 25
      },
      lightPrefs: {
        saturationSetting: 0.9,
        lightnessSettingNavBar: 75,
        lightnessSettingPlayPage: 70,
        lightnessSettingBody: 90,
        lightnessSettingPlayerBar: 75
      }
    },
    {
      themeId: "themeId:7",
      appearanceSetting: 'dark', // 'dark', 'light', 'system'
      darkPrefs: {
        hue: 216,
        saturationSetting: 70,
        lightnessSettingNavBar: 16,
        lightnessSettingPlayPage: 16,
        lightnessSettingBody: 10,
        lightnessSettingPlayerBar: 24
      },
      lightPrefs: {
        hue: 340,
        saturationSetting: 90,
        lightnessSettingNavBar: 85,
        lightnessSettingPlayPage: 80,
        lightnessSettingBody: 95,
        lightnessSettingPlayerBar: 85
      }
    },
    {
      themeId: "themeId:9",
      activeVariant: "variantId:1",
    },
  ],
  changeActiveTheme: (payload) => {
    console.log('themeSlice: changeActiveTheme')
    console.log(payload);
    set(state => { state.theme.activeTheme = payload });
  },
  changeIsDark: (payload) => {
    console.log('themeSlice: changeIsDark')
    console.log(payload);
    set(state => { state.theme.isDark = payload });
  },
  changeThemePrefs: (payload) => {
    console.log('themeSlice: changeThemePrefs')
    console.log(payload);
    set(state => { state.theme.themePrefs = payload });
  },
})