import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
// import { fetchArtistPage } from "../artists/artistsAsyncThunks";
// import { fetchArtistCredits } from "../artistCredits/artistCreditsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";

const artistCreditsAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = artistCreditsAdapter.getInitialState({});

const artistCreditsSlice = createSlice({
  name: "artistCredits",
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchArtistCredits.fulfilled]: (state, action) => {
    //   artistCreditsAdapter.upsertMany(state, action.payload.artistCredits);
    // },
    // [fetchSongPage.fulfilled]: (state, action) => {
    //   artistCreditsAdapter.setAll(state, action.payload.artistCredits);
    // },
  },
});

export default artistCreditsSlice.reducer;

export const {
  selectIds: selectArtistCreditIds, // returns the state.ids array.
  selectEntities: selectArtistCreditEntities, // returns the state.entities lookup table.
  selectAll: selectAllArtistCredits, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalArtistCredits, // returns the total number of entities being stored in this state.
  selectById: selectArtistCreditById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = artistCreditsAdapter.getSelectors((state) => state.artistCredits);
