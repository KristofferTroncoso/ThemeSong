import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  palette: "#0000"
};

export const palette = createSlice({
  name: 'palette',
  initialState,
  reducers: {
    changePalette: (state, action) => {
      console.log('reducer: changing state palette')
      state.palette = action.payload;
    }
  }
});

export const { changePalette } = palette.actions;

export default palette.reducer;