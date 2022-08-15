import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from './palette/paletteSlice';
import songDetailsReducer from './songDetails/songDetailsSlice';
import themesReducer from './themes/themesSlice';
import visualizersReducer from './visualizers/visualizersSlice';
import extensionStateReducer from './extensionState/extensionStateSlice';
import playerStateReducer from './playerState/playerStateSlice';

export const store = configureStore({
  reducer: {
    palette: paletteReducer,
    songDetails: songDetailsReducer,
    themes: themesReducer,
    visualizers: visualizersReducer,
    extensionState: extensionStateReducer,
    playerState: playerStateReducer
  },
});