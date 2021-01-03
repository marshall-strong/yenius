import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchArtistCreditTypes } from "./artistCreditTypesAsyncThunks";

const artistCreditTypesAdapter = createEntityAdapter({
  // selectId is only necessary if entity's unique key is NOT entity.id
  //  selectId: (user) => user.id,
  // sortComparer is necessary if you want state.ids to be sorted
  // if sortComparer(foo, bar) returns -1, sort foo to lower index than bar (state.ids = [foo, bar])
  // if sortComparer(foo, bar) returns  0, don't sort foo with respect to bar
  // if sortComparer(foo, bar) returns +1, sort foo to higher index than bar (state.ids = [bar, foo])
  //  sortComparer: (a, b) => a.username.localeCompare(b.username),
});

const initialState = artistCreditTypesAdapter.getInitialState({});

const artistCreditTypesSlice = createSlice({
  name: "artistCreditTypes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArtistCreditTypes.fulfilled]: (state, action) => {
      artistCreditTypesAdapter.setAll(state, action.payload.artistCreditTypes);
    }
  },
});

export default artistCreditTypesSlice.reducer;

export const {
  selectIds: selectArtistCreditTypeIds, // returns the state.ids array.
  selectEntities: selectArtistCreditTypeEntities, // returns the state.entities lookup table.
  selectAll: selectAllArtistCreditTypes, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalArtistCreditTypes, // returns the total number of entities being stored in this state.
  selectById: selectArtistCreditTypeById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = artistCreditTypesAdapter.getSelectors((state) => state.artistCreditTypes);
