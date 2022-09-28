import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from './Palette/paletteSlice';
import songReducer from './Song/songSlice';
import themesReducer from './Theme/themesSlice';
import visualizersReducer from './Visualizer/visualizersSlice';
import popupReducer from './popup/popupSlice';
import playerStateReducer from './PlayerState/playerStateSlice';

export const store = configureStore({
  reducer: {
    palette: paletteReducer,
    song: songReducer,
    themes: themesReducer,
    visualizers: visualizersReducer,
    popup: popupReducer,
    playerState: playerStateReducer,
  },
});