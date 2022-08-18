import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTheme: "themeId:6",
  experimentalAutoUseDeviceDarkLightMode: false,
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
        darkLightSetting: 'dark', // 'dark', 'light', 'system'
        darkPrefs: {
          saturationSetting: 0.8,
          lightnessSettingNavBar: 20,
          lightnessSettingPlayPage: 15,
          lightnessSettingBody: 10,
          lightnessSettingPlayerBar: 25
        },
        lightPrefs: {
          saturationSetting: 1,
          lightnessSettingNavBar: 85,
          lightnessSettingPlayPage: 80,
          lightnessSettingBody: 95,
          lightnessSettingPlayerBar: 85
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
        darkLightSetting: 'dark', // 'dark', 'light', 'system'
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
          lightnessSettingPlayPage: 90,
          lightnessSettingBody: 95,
          lightnessSettingPlayerBar: 85
        }
      }
    },
  ],
};

export const themes = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    changeActiveTheme: (state, action) => {
      console.log('themesSlice: changeActiveTheme')
      console.log(action.payload);
      state.activeTheme = action.payload;
      chrome.storage.local.set({activeTheme: state.activeTheme}, () => console.log('chrome.storage.local.set({activeTheme: state.activeTheme}'));
    },
    changeThemes: (state, action) => {
      console.log('themesSlice: changeThemes')
      console.log(action.payload);
      state.themes = action.payload;
      chrome.storage.local.set({themes: state.themes}, () => console.log('chrome.storage.local.set({themes: state.themes}'));
    },
    changeExperimentalAutoUseDeviceDarkLightMode: (state) => {
      console.log('themesSlice: changeExperimentalAutoUseDeviceDarkLightMode')
      state.experimentalAutoUseDeviceDarkLightMode = !state.experimentalAutoUseDeviceDarkLightMode;
      chrome.storage.local.set({experimentalAutoUseDeviceDarkLightMode: state.experimentalAutoUseDeviceDarkLightMode}, () => console.log('chrome.storage.local.set({experimentalAutoUseDeviceDarkLightMode: state.experimentalAutoUseDeviceDarkLightMode}'))
    }
  }
});

export const { changeActiveTheme, changeThemes, changeExperimentalAutoUseDeviceDarkLightMode } = themes.actions;

export default themes.reducer;