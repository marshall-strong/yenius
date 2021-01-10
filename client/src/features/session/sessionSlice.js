import { createSlice } from "@reduxjs/toolkit";

import { signupUser, loginUser, logoutUser } from "./sessionAsyncThunks";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    currentUser: null,
    errors: [],
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
    [signupUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.session.currentUser;
    },
    [signupUser.rejected]: (state, action) => {
      state.errors.push(action.error.message);
    },
    [loginUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.session.currentUser;
    },
    [loginUser.rejected]: (state, action) => {
      state.errors.push(action.error.message);
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.currentUser = null;
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
