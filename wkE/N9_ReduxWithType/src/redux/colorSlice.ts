import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store"; 

type ColorState = {
  lightMode: boolean;
};

// 1. 定義初始值，並指定型別
const initialState: ColorState = {
  lightMode: true,
};

// 2. 建立 slice，指定 action payload 的型別為 boolean
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColorMode: (state, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
    },
  },
});

// 3. selector，指定 state 型別為 RootState
export const selectLightMode = (state: RootState & { color: ColorState }) => state.color.lightMode;

// export actions
export const { setColorMode } = colorSlice.actions;

// export reducer
export default colorSlice.reducer;