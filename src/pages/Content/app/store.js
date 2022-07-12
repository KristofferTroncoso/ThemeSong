import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from './palette/paletteSlice';
import songDetailsReducer from './songDetails/songDetailsSlice';

export const store = configureStore({
  reducer: {
    palette: paletteReducer,
    songDetails: songDetailsReducer
  },
});