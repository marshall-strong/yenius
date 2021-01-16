import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import asyncRequestsReducer from "../features/asyncRequests/asyncRequestsSlice";
import usersReducer from "../features/users/usersSlice";
import artistsReducer from "../features/artists/artistsSlice";
import albumsReducer from "../features/albums/albumsSlice";
import songsReducer from "../features/songs/songsSlice";
import versesReducer from "../features/verses/versesSlice";
import commentsReducer from "../features/comments/commentsSlice";
import sessionReducer from "../features/session/sessionSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    asyncRequests: asyncRequestsReducer,
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
    verses: versesReducer,
    comments: commentsReducer,
    session: sessionReducer,
  },
});
