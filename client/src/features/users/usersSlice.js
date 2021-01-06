import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import { fetchArtistPage } from "../artists/artistsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";
import { fetchUsers } from "../users/usersAsyncThunks";
import { signupUser, loginUser } from "../session/sessionAsyncThunks";
import { fetchAlbumComments } from "../comments/commentsAsyncThunks";

const usersAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = usersAdapter.getInitialState({});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      usersAdapter.setAll(state, action.payload.users);
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
    [fetchSongPage.fulfilled]: (state, action) => {
      if (action.payload.users) {
        usersAdapter.upsertMany(state, action.payload.users);
      }
    },
    [signupUser.fulfilled]: (state, action) => {
      usersAdapter.upsertMany(state, action.payload.users);
    },
    [loginUser.fulfilled]: (state, action) => {
      usersAdapter.upsertMany(state, action.payload.users);
    },
    [fetchAlbumComments.fulfilled]: (state, action) => {
      usersAdapter.upsertMany(state, action.payload.users);
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
