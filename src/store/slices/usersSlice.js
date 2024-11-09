import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isUserLoad: false,
  isUserErr: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchingUserData: (state) => {
      state.isUserLoad = true;
      state.isUserErr = null;
    },
    fetchedUserData: (state, action) => {
      state.isUserLoad = false;
      state.users = action.payload;
    },
    fetchedUserDataErr: (state, action) => {
      state.isUserLoad = false;
      state.isUserErr = action.payload;
    }
  }
});

export const { fetchingUserData, fetchedUserData, fetchedUserDataErr } = usersSlice.actions;

export default usersSlice.reducer;
