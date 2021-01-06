import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchAlbumPage, fetchAlbumsList } from "../albums/albumsAsyncThunks";
import {
  fetchArtistPage,
  fetchArtistsList,
  fetchArtistsIndex,
} from "../artists/artistsAsyncThunks";
import {
  fetchAlbumComments,
  fetchArtistComments,
  fetchSongComments,
  fetchVerseComments,
} from "../comments/commentsAsyncThunks";
import {
  fetchSongPage,
  fetchSongsList,
  fetchSongsIndex,
} from "../songs/songsAsyncThunks";
import {
  signupUser,
  loginUser,
  logoutUser,
} from "../session/sessionAsyncThunks";

const asyncRequestsAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = asyncRequestsAdapter.getInitialState({
  status: "idle",
  pending: 0,
  fulfilled: 0,
  rejected: 0,
  errors: [],
});

const handlePending = (state) => {
  state.status = "pending";
  state.pending += 1;
};
const handleFulfilled = (state) => {
  state.status = "fulfilled";
  state.pending -= 1;
  state.fulfilled += 1;
};
const handleRejected = (state) => {
  state.status = "rejected";
  state.pending -= 1;
  state.rejected += 1;
};
const handleErrors = (state, action) => {
  state.errors.push(action.error.message);
};

const asyncRequestsSlice = createSlice({
  name: "asyncRequests",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlbumPage.pending]: (state) => {
      handlePending(state);
    },
    [fetchAlbumPage.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchAlbumPage.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchAlbumComments.pending]: (state) => {
      handlePending(state);
    },
    [fetchAlbumComments.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchAlbumComments.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchAlbumsList.pending]: (state) => {
      handlePending(state);
    },
    [fetchAlbumsList.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchAlbumsList.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchArtistPage.pending]: (state) => {
      handlePending(state);
    },
    [fetchArtistPage.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchArtistPage.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchArtistComments.pending]: (state) => {
      handlePending(state);
    },
    [fetchArtistComments.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchArtistComments.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchArtistsList.pending]: (state) => {
      handlePending(state);
    },
    [fetchArtistsList.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchArtistsList.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchArtistsIndex.pending]: (state) => {
      handlePending(state);
    },
    [fetchArtistsIndex.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchArtistsIndex.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchSongPage.pending]: (state) => {
      handlePending(state);
    },
    [fetchSongPage.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchSongPage.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchSongComments.pending]: (state) => {
      handlePending(state);
    },
    [fetchSongComments.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchSongComments.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchSongsList.pending]: (state) => {
      handlePending(state);
    },
    [fetchSongsList.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchSongsList.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchSongsIndex.pending]: (state) => {
      handlePending(state);
    },
    [fetchSongsIndex.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchSongsIndex.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [fetchVerseComments.pending]: (state) => {
      handlePending(state);
    },
    [fetchVerseComments.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [fetchVerseComments.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
    [signupUser.pending]: (state) => {
      handlePending(state);
    },
    [signupUser.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [signupUser.rejected]: (state) => {
      handleRejected(state);
    },
    [loginUser.pending]: (state) => {
      handlePending(state);
    },
    [loginUser.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [loginUser.rejected]: (state) => {
      handleRejected(state);
    },
    [logoutUser.pending]: (state) => {
      handlePending(state);
    },
    [logoutUser.fulfilled]: (state) => {
      handleFulfilled(state);
    },
    [logoutUser.rejected]: (state, action) => {
      handleRejected(state);
      handleErrors(state, action);
    },
  },
});

export default asyncRequestsSlice.reducer;
