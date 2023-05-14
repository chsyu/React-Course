import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const lightMode = true;
const showAnimation = false;
const initialState = { lightMode, showAnimation };
const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.lightMode = action.payload;
    },
    setShowAnimation: (state, action) => {
      state.showAnimation = action.payload;
    },
  },
});

// export state to global
export const selectLightMode = (state) => state.color.lightMode;
export const selectShowAnimation = (state) => state.color.showAnimation;

// export actions to global
export const { setColorMode, setShowAnimation } = colorSlice.actions;

// export reducer to global
export default colorSlice.reducer;
