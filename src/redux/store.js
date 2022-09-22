import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from './palette/paletteSlice';
import songDetailsReducer from './songDetails/songDetailsSlice';
import themesReducer from './themes/themesSlice';
import visualizersReducer from './visualizers/visualizersSlice';
import popupReducer from './popup/popupSlice';
import playerStateReducer from './playerState/playerStateSlice';
import miscSettingsReducer from './miscSettings/miscSettingsSlice';

export const store = configureStore({
  reducer: {
    palette: paletteReducer,
    songDetails: songDetailsReducer,
    themes: themesReducer,
    visualizers: visualizersReducer,
    popup: popupReducer,
    playerState: playerStateReducer,
    miscSettings: miscSettingsReducer
  },
});