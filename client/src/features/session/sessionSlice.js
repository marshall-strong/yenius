import { createSlice } from "@reduxjs/toolkit";

import { loginUser, logoutUser, signupUser } from "./sessionAsyncThunks";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    currentUser: null,
    errors: [],
    status: {
      loginUser: null,
      logoutUser: null,
      signupUser: null,
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.session.currentUser;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
    receiveSessionErrors: (state, action) => {
      state.errors.push(action.error.message);
    },
    clearSessionErrors: (state) => {
      state.errors = [];
    },
  },
  extraReducers: {
    // session asyncThunks
    // loginUser
    [loginUser.pending]: (state, action) => {
      state.status.loginUser = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status.loginUser = "fulfilled";
      state.currentUser = action.payload.session.currentUser;
    },
    [loginUser.rejected]: (state, action) => {
      state.status.loginUser = "rejected";
      state.errors.push(action.error.message);
    },

    // logoutUser
    [logoutUser.pending]: (state, action) => {
      state.status.logoutUser = "pending";
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.status.logoutUser = "fulfilled";
      state.currentUser = null;
    },
    [logoutUser.rejected]: (state, action) => {
      state.status.logoutUser = "rejected";
    },

    // signupUser
    [signupUser.pending]: (state, action) => {
      state.status.signupUser = "pending";
    },
    [signupUser.fulfilled]: (state, action) => {
      state.status.signupUser = "fulfilled";
      state.currentUser = action.payload.session.currentUser;
    },
    [signupUser.rejected]: (state, action) => {
      state.status.signupUser = "rejected";
      state.errors.push(action.error.message);
    },
  },
});

// export const {
// setCurrentUser,
// clearCurrentUser,
// receiveSessionErrors,
// clearSessionErrors,
// } = sessionSlice.actions;

export default sessionSlice.reducer;
