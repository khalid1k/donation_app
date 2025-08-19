import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage:
    'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80',
};
export const User = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    logIn: (state, action) => {
      return { ...state, ...{ isLoggedIn: true }, ...action.payload };
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { logIn, resetToInitialState } = User.actions;
export default User.reducer;
