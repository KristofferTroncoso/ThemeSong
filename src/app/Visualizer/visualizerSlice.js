
export const createVisualizerSlice = (set) => ({
  activeVisualizer: "visualizerId:0",
  isVisualizerOn: false,
  visualizers: [
    {
      visualizerId: "visualizerId:0",
      name: "Wavy",
      // lineWidth: 8
    },
    {
      visualizerId: "visualizerId:1",
      name: "Bars",
      // activeVariant: "variantId:5",
      // barWidth: 30,
      // borderWidth: 4,
      // gap: 4,
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
      // activeVariant: "variantId:5",
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
  visualizerPrefs: [
    {
      visualizerId: "visualizerId:0",
      lineWidth: 8
    },
    {
      visualizerId: "visualizerId:1",
      activeVariant: "variantId:5",
      barWidth: 30,
      borderWidth: 4,
      gap: 4
    },
    {
      visualizerId: "visualizerId:2",
      activeVariant: "variantId:5",
    }
  ],
  changeActiveVisualizer: (payload) => {
    console.log('visualizerSlice: changeActiveVisualizer')
    console.log(payload);
    set(state => { state.visualizer.activeVisualizer = payload })
  },
  changeVisualizers: (payload) => {
    console.log('visualizerSlice: changeVisualizers')
    console.log(payload);
    set(state => { state.visualizer.visualizers = payload })
  },
  changeVisualizerPrefs: (payload) => {
    console.log('visualizerSlice: changeVisualizerPrefs')
    console.log(payload);
    set(state => { state.visualizer.visualizerPrefs = payload })
  },
  toggleIsVisualizerOn: () => {
    console.log('visualizerSlice: toggleIsVisualizerOn')
    set(state => { state.visualizer.isVisualizerOn = !state.visualizer.isVisualizerOn })
  }
})