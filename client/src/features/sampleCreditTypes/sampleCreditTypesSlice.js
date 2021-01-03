import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchSampleCreditTypes } from "./sampleCreditTypesAsyncThunks";

const sampleCreditTypesAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = sampleCreditTypesAdapter.getInitialState({});

const sampleCreditTypesSlice = createSlice({
  name: "sampleCreditTypes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSampleCreditTypes.fulfilled]: (state, action) => {
      state.status = "succeeded";
      sampleCreditTypesAdapter.setAll(state, action.payload.sampleCreditTypes);
    },
  },
});

export default sampleCreditTypesSlice.reducer;

export const {
  selectIds: selectSampleCreditTypeIds, // returns the state.ids array.
  selectEntities: selectSampleCreditTypeEntities, // returns the state.entities lookup table.
  selectAll: selectAllSampleCreditTypes, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalSampleCreditTypes, // returns the total number of entities being stored in this state.
  selectById: selectSampleCreditTypeById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = sampleCreditTypesAdapter.getSelectors((state) => state.sampleCreditTypes);
