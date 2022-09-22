export const old_defaults = {
  extensionVersion: "0.2.2",
  activeTheme: "themeId:1",
  activeVisualizer: "visualizerId:2",
  activePage: 1,
  themes: [
    {
      themeId: "themeId:0",
      dateAdded: 20220207,
      name: "Off",
      isDynamic: false,
      icon: 0
    },
    {
      themeId: "themeId:1",
      dateAdded: 20220210,
      name: "Dynamic Dark",
      isDynamic: true,
      icon: 0,
      userPrefs: {
        saturationSetting: 0.8, // percentage of chosen color's saturation.
        lightnessSettingNavBar: 20,
        lightnessSettingPlayPage: 15,
        lightnessSettingBody: 10,
        lightnessSettingPlayerBar: 25
      }
    },
    {
      themeId: "themeId:2", 
      dateAdded: 20220218,
      name: 'Static Dark',
      isDynamic: false,
      icon: 0,
      userPrefs: {
        hslColorHue: 216,
        navbarLight: 16,
        playPageLight: 16,
        playBarLight: 24,
        bgLight: 10,
        saturation: 70
      }
    },
    {
      themeId: "themeId:4", 
      dateAdded: 20220317,
      name: 'Dynamic Light',
      isDynamic: true,
      icon: 0,
      userPrefs: {
        saturationSetting: 1,
        lightnessSettingNavBar: 85,
        lightnessSettingPlayPage: 80,
        lightnessSettingBody: 95,
        lightnessSettingPlayerBar: 85
      }
    },
    {
      themeId: "themeId:5", 
      dateAdded: 20220322,
      name: 'Static Light',
      isDynamic: false,
      icon: 0,
      userPrefs: {
        hslColorHue: 350,
        navbarLight: 85,
        playPageLight: 90,
        playBarLight: 85,
        bgLight: 95,
        saturation: 90
      }
    }
  ],
  visualizers: [
    {
      visualizerId: "visualizerId:0",
      name: "Wavy",
      lineWidth: 8
    },
    {
      visualizerId: "visualizerId:1",
      name: "Bars",
      activeVariant: "variantId:4",
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
      activeVariant: "variantId:5",
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
  ],
  experimentalAutoUseDeviceDarkLightMode: false
};