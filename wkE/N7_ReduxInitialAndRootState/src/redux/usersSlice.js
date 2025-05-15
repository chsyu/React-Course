import { createSlice } from '@reduxjs/toolkit';

// Define initialState 


const userInfo = null;

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
