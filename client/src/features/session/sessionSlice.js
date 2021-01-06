import { createSlice } from "@reduxjs/toolkit";

import { signupUser, loginUser, logoutUser } from "./sessionAsyncThunks";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    currentUserId: null,
    errors: [],
  },
  reducers: {
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload.session.currentUserId;
    },
    clearCurrentUserId: (state) => {
      state.currentUserId = null;
    },
    receiveSessionErrors: (state, action) => {
      state.errors.push(action.error.message);
    },
    clearSessionErrors: (state) => {
      state.errors = [];
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.currentUserId = action.payload.session.currentUserId;
    },
    [signupUser.rejected]: (state, action) => {
      state.errors.push(action.error.message);
    },
    [loginUser.fulfilled]: (state, action) => {
      state.currentUserId = action.payload.session.currentUserId;
    },
    [loginUser.rejected]: (state, action) => {
      state.errors.push(action.error.message);
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.currentUserId = null;
    },
  },
});

export const {
  setCurrentUserId,
  clearCurrentUserId,
  receiveSessionErrors,
  clearSessionErrors,
} = sessionSlice.actions;

export default sessionSlice.reducer;
