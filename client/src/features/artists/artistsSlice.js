import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { fetchAlbumPage } from "../albums/albumsAsyncThunks";
import {
  fetchArtistPage,
  fetchArtistsIndex,
  fetchArtistsList,
  fetchTopArtists,
} from "../artists/artistsAsyncThunks";
import {
  addArtistComment,
  fetchArtistComments,
} from "../comments/commentsAsyncThunks";
import {
  fetchSongAlbum,
  fetchSongArtistCredits,
  fetchSongBanner,
  fetchSongSampleCredits,
} from "../songs/songsAsyncThunks";

import { selectAlbumById, selectAlbumBySongId } from "../albums/albumsSlice";
import { selectSongById } from "../songs/songsSlice";

const artistsAdapter = createEntityAdapter({
  selectId: (artist) => artist.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = artistsAdapter.getInitialState({
  status: {
    fetchArtistPage: null,
    fetchArtistsIndex: null,
    fetchArtistsList: null,
    fetchTopArtists: null,
  },
});

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers: {
    // artists asyncThunks
    // fetchArtistPage
    [fetchArtistPage.pending]: (state) => {
      state.status.fetchArtistPage = "pending";
    },
    [fetchArtistPage.fulfilled]: (state, action) => {
      state.status.fetchArtistPage = "fulfilled";
      artistsAdapter.setAll(state, action.payload.artists);
    },
    [fetchArtistPage.rejected]: (state) => {
      state.status.fetchArtistPage = "rejected";
    },
    // fetchArtistsIndex
    [fetchArtistsIndex.pending]: (state) => {
      state.status.fetchArtistsIndex = "pending";
    },
    [fetchArtistsIndex.fulfilled]: (state, action) => {
      state.status.fetchArtistsIndex = "fulfilled";
      if (action.payload.artists) {
        artistsAdapter.setAll(state, action.payload.artists);
      }
    },
    [fetchArtistsIndex.rejected]: (state) => {
      state.status.fetchArtistsIndex = "rejected";
    },
    // fetchArtistsList
    [fetchArtistsList.pending]: (state) => {
      state.status.fetchArtistsList = "pending";
    },
    [fetchArtistsList.fulfilled]: (state, action) => {
      state.status.fetchArtistsList = "fulfilled";
      if (action.payload.artists) {
        artistsAdapter.setAll(state, action.payload.artists);
      }
    },
    [fetchArtistsList.rejected]: (state) => {
      state.status.fetchArtistsList = "rejected";
    },
    // fetchTopArtists
    [fetchTopArtists.pending]: (state, action) => {
      state.status.fetchTopArtists = "pending";
    },
    [fetchTopArtists.fulfilled]: (state, action) => {
      artistsAdapter.setAll(state, action.payload.artists);
      state.status.fetchTopArtists = "fulfilled";
    },
    [fetchTopArtists.rejected]: (state, action) => {
      state.status.fetchTopArtists = "rejected";
    },

    // other asyncThunks
    [addArtistComment.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
    [fetchAlbumPage.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.setAll(state, action.payload.artists);
      }
    },
    [fetchArtistComments.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
    [fetchSongAlbum.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
    [fetchSongArtistCredits.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
    [fetchSongBanner.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
    [fetchSongSampleCredits.fulfilled]: (state, action) => {
      if (action.payload.artists) {
        artistsAdapter.upsertMany(state, action.payload.artists);
      }
    },
  },
});

export default artistsSlice.reducer;

export const {
  selectIds: selectArtistIds, // returns the state.ids array.
  selectEntities: selectArtistEntities, // returns the state.entities lookup table.
  selectAll: selectAllArtists, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalArtists, // returns the total number of entities being stored in this state.
  selectById: selectArtistById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = artistsAdapter.getSelectors((state) => state.artists);

// given an array of ids, return an array of entities
export const selectArtistsByIds = createSelector(
  [(state) => state.artists.entities, (_state, artistIds) => artistIds],
  (artistEntities, artistIds) =>
    artistIds.map((artistId) => artistEntities[artistId])
);

export const selectSongPrimaryArtistsBySongId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, songId) => selectSongById(state, songId),
  ],
  (artistEntities, song) => {
    return song.artistCredits["PRIMARY_ARTIST"].map(
      (artistId) => artistEntities[artistId]
    );
  }
);

export const selectSongFeaturedArtistsBySongId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, songId) => selectSongById(state, songId),
  ],
  (artistEntities, song) =>
    song.artistCredits["FEATURED_ARTIST"].map(
      (artistId) => artistEntities[artistId]
    )
);

export const selectSongProducersBySongId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, songId) => selectSongById(state, songId),
  ],
  (artistEntities, song) =>
    song.artistCredits["PRODUCER"].map((artistId) => artistEntities[artistId])
);

export const selectAlbumPrimaryArtistsBySongId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, songId) => selectAlbumBySongId(state, songId),
  ],
  (artistEntities, album) =>
    album.artistCredits["PRIMARY_ARTIST"].map(
      (artistId) => artistEntities[artistId]
    )
);

export const selectAlbumPrimaryArtistsByAlbumId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, albumId) => selectAlbumById(state, albumId),
  ],
  (artistEntities, album) =>
    album.artistCredits["PRIMARY_ARTIST"].map(
      (artistId) => artistEntities[artistId]
    )
);

export const selectAlbumProducersByAlbumId = createSelector(
  [
    (state) => selectArtistEntities(state),
    (state, albumId) => selectAlbumById(state, albumId),
  ],
  (artistEntities, album) =>
    album.artistCredits["PRODUCER"].map((artistId) => artistEntities[artistId])
);

// export const selectPrimaryArtistBySongId = (songId) => {

//   const song = useSelector((state) => selectSongById(state, songId));
//   const songPrimaryArtists = useSelector((state) => selectSongPrimaryArtistsBySongId(state, songId));
//   const albumPrimaryArtists = useSelector((state) => selectAlbumPrimaryArtistsByAlbumId(state, song.albumId));
//   if (songPrimaryArtists && songPrimaryArtists.length > 0) {
//     return songPrimaryArtists;
//   } else {
//     return albumPrimaryArtists;
//   }
// };

export const selectPrimaryArtistBySongId = createSelector(
  [
    (state, songId) => selectSongById(state, songId),
    (state, songId) => selectAlbumBySongId(state, songId),
    (state, songId) => selectSongPrimaryArtistsBySongId(state, songId),
    (state, songId) => selectAlbumPrimaryArtistsBySongId(state, songId),
  ],
  (song, album, songPrimaryArtists, albumPrimaryArtists) => {
    if (songPrimaryArtists && songPrimaryArtists.length > 0) {
      return songPrimaryArtists;
    } else {
      return albumPrimaryArtists;
    }
  }
);
