export const createThemeSlice = (set) => ({
  activeTheme: "themeId:6",
  isDark: true,
  themes: [
    {
      themeId: "themeId:0",
      dateAdded: 20220207,
      name: "Off",
      isDynamic: false,
      icon: 0
    },
    {
      themeId: "themeId:6",
      dateAdded: 20220602,
      name: "Dynamic",
      isDynamic: true,
      lightDarkMode: true,
      icon: 0,
      userPrefs: {
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
          lightnessSettingBody: 96,
          lightnessSettingPlayerBar: 75
        }
      }
    },
    {
      themeId: "themeId:7",
      dateAdded: 20220702,
      name: "Static",
      isDynamic: false,
      lightDarkMode: true,
      icon: 0,
      userPrefs: {
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
      }
    },
  ],
  changeActiveTheme: (payload) => {
    console.log('themeSlice: changeActiveTheme')
    console.log(payload);
    set(state => { state.theme.activeTheme = payload });
  },
  changeThemes: (payload) => {
    console.log('themeSlice: changeThemes')
    console.log(payload);
    set(state => { state.theme.themes = payload });
  },
  changeIsDark: (payload) => {
    console.log('themeSlice: changeIsDark')
    console.log(payload);
    set(state => { state.theme.isDark = payload });
  }
})