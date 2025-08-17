import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Muhammad',
  lastName: 'Khalid',
  userId: 1,
  profileImage:
    'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80',
};
export const User = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const { updateFirstName, resetToInitialState } = User.actions;
export default User.reducer;
