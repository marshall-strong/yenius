import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import {
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "../comments/commentsAsyncThunks";
import { fetchTopScholars, fetchUserProfile } from "../users/usersAsyncThunks";

const usersAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = usersAdapter.getInitialState({
  status: {
    fetchTopScholars: null,
    fetchUserProfile: null,
  },
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
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
