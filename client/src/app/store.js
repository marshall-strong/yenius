import { configureStore } from "@reduxjs/toolkit";

import albumsReducer from "../features/albums/albumsSlice";
import artistsReducer from "../features/artists/artistsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import sessionReducer from "../features/session/sessionSlice";
import songsReducer from "../features/songs/songsSlice";
import usersReducer from "../features/users/usersSlice";
import versesReducer from "../features/verses/versesSlice";

export default configureStore({
  reducer: {
    albums: albumsReducer,
    artists: artistsReducer,
    songs: songsReducer,
    verses: versesReducer,
    session: sessionReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});
