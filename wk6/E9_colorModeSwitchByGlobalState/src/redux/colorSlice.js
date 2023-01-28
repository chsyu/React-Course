import { createSlice } from '@reduxjs/toolkit';
import Cookie from "js-cookie"

// Part1: Define Slice (including reducers and actions)
const lightMode = !Cookie.get().lightMode ? true : JSON.parse(Cookie.get().lightMode);
const initialState = { lightMode };
const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.lightMode = action.payload;
    },
  },
});

// export state to global
export const selectLightMode = (state) => state.color.lightMode;

// export actions to global
export const { setColorMode } = colorSlice.actions;

// export reducer to global
export default colorSlice.reducer;
