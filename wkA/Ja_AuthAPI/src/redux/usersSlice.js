import { createSlice } from '@reduxjs/toolkit';
import Cookie from "js-cookie"

// Define initialState 


const userInfo = !Cookie.get().userInfo ? null : JSON.parse(Cookie.get().userInfo);

const initialState = {
  userInfo,
  isRemember: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
    },
    remember: (state, action) => {
      state.isRemember = action.payload;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    }
  },
});

// export state to global
export const selectUserInfo = (state) => state.users.userInfo;
export const selectIsRemember = (state) => state.users.isRemember;

// export actions to global
export const { logout, remember, setUser } = usersSlice.actions;

// export reducer to global
export default usersSlice.reducer;
