import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// import { fetchSampleCredits } from "../sampleCredits/sampleCreditsAsyncThunks";
import { fetchSongPage } from "../songs/songsAsyncThunks";

const sampleCreditsAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = sampleCreditsAdapter.getInitialState({});

const sampleCreditsSlice = createSlice({
  name: "sampleCredits",
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchSampleCredits.fulfilled]: (state, action) => {
    //   sampleCreditsAdapter.setAll(state, action.payload.sampleCredits);
    // },
    // [fetchSongPage.fulfilled]: (state, action) => {
    //   if (action.payload.sampleCredits) {
    //     sampleCreditsAdapter.upsertMany(state, action.payload.sampleCredits);
    //   }
    // },
  },
});

export default sampleCreditsSlice.reducer;

export const {
  selectIds: selectSampleCreditIds, // returns the state.ids array.
  selectEntities: selectSampleCreditEntities, // returns the state.entities lookup table.
  selectAll: selectAllSampleCredits, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalSampleCredits, // returns the total number of entities being stored in this state.
  selectById: selectSampleCreditById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = sampleCreditsAdapter.getSelectors((state) => state.sampleCredits);
