export const data043 = {
  activeTheme: "themeId:7",
  activeVisualizer: "visualizerId:2",
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
          lightnessSettingBody: 90,
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
        appearanceSetting: 'light', // 'dark', 'light', 'system'
        darkPrefs: {
          hue: 1,
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
    }
  ],
  visualizers:  [
    {
      visualizerId: "visualizerId:0",
      name: "Wavy",
      lineWidth: 8
    },
    {
      visualizerId: "visualizerId:1",
      name: "Bars",
      activeVariant: "variantId:5",
      barWidth: 30,
      borderWidth: 4,
      gap: 4,
      variants: [
        {
          variantId: "variantId:1",
          name: "White"
        },
        {
          variantId: "variantId:2",
          name: "Black"
        },
        {
          variantId: "variantId:3",
          name: "RGB"
        },
        {
          variantId: "variantId:4",
          name: "Accent"
        },
        {
          variantId: "variantId:5",
          name: "Palette"
        },
        {
          variantId: "variantId:6",
          name: "Dancing Palette"
        }
      ]
    },
    {
      visualizerId: "visualizerId:2",
      name: "Circles",
      activeVariant: "variantId:6",
      variants: [
        {
          variantId: "variantId:1",
          name: "RGB"
        },
        {
          variantId: "variantId:2",
          name: "Accent"
        },
        {
          variantId: "variantId:3",
          name: "Palette"
        },
        {
          variantId: "variantId:4",
          name: "Party"
        },
        {
          variantId: "variantId:5",
          name: "Bubbles"
        },
        {
          variantId: "variantId:6",
          name: "OT9"
        }
      ]
    }
  ]
};