import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeVisualizer: "visualizerId:0",
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
  isVisualizerOn: false
};

export const visualizers = createSlice({
  name: 'visualizers',
  initialState,
  reducers: {
    changeActiveVisualizer: (state, action) => {
      console.log('visualizersSlice: changeActiveVisualizer')
      console.log(action.payload);
      state.activeVisualizer = action.payload;
    },
    changeVisualizers: (state, action) => {
      console.log('visualizersSlice: changeVisualizers')
      console.log(action.payload);
      state.visualizers = action.payload;
    },
    toggleIsVisualizerOn: (state) => {
      console.log('visualizersSlice: toggleIsVisualizerOn')
      state.isVisualizerOn = !state.isVisualizerOn;
    }
  }
});

export const { changeActiveVisualizer, changeVisualizers, toggleIsVisualizerOn } = visualizers.actions;

export default visualizers.reducer;