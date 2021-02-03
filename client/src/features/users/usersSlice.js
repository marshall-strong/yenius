import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import {
  addAlbumComment,
  addArtistComment,
  addSongComment,
  addVerseComment,
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "../comments/commentsSliceThunks";
import {
  fetchTopScholars,
  fetchUserProfile,
  updateUserProfile,
} from "./usersSliceThunks";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = usersAdapter.getInitialState({
  status: {
    fetchTopScholars: null,
    fetchUserProfile: null,
    updateUserProfile: null,
  },
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    // users asyncThunks
    // fetchTopScholars
    [fetchTopScholars.pending]: (state) => {
      state.status.fetchTopScholars = "pending";
    },
    [fetchTopScholars.fulfilled]: (state, action) => {
      state.status.fetchTopScholars = "fulfilled";
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [fetchTopScholars.rejected]: (state, action) => {
      state.status.fetchTopScholars = "rejected";
    },

    // fetchUserProfile
    [fetchUserProfile.pending]: (state) => {
      state.status.fetchUserProfile = "pending";
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.status.fetchUserProfile = "fulfilled";
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.status.fetchUserProfile = "rejected";
    },

    // updateUserProfile
    [updateUserProfile.pending]: (state) => {
      state.status.updateUserProfile = "pending";
    },
    [updateUserProfile.fulfilled]: (state, action) => {
      state.status.updateUserProfile = "fulfilled";
      if (action.payload.users) {
        usersAdapter.setAll(state.action.payload.users);
      }
    },
    [updateUserProfile.rejected]: (state, action) => {
      state.status.updateUserProfile = "rejected";
    },

    // other asyncThunks
    [addAlbumComment.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [addArtistComment.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [addSongComment.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [addVerseComment.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [fetchArtistComments.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.setAll(state, action.payload.users);
      }
    },
    [fetchSongComments.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
    [fetchVerseComments.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
  },
});

export default usersSlice.reducer;

export const {
  selectIds: selectUserIds, // returns the state.ids array.
  selectEntities: selectUserEntities, // returns the state.entities lookup table.
  selectAll: selectAllUsers, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalUsers, // returns the total number of entities being stored in this state.
  selectById: selectUserById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = usersAdapter.getSelectors((state) => state.users);

export const selectTopScholars = createSelector(
  [(state) => selectAllUsers(state)],
  (users) =>
    users.sort((a, b) => b.authoredCommentsCount - a.authoredCommentsCount)
);
