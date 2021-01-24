import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./stylesheets/App.scss";
import "./font-faces.scss";
import "./fonts/Programme-Regular/Programme-Regular.eot";
import "./fonts/Programme-Regular/Programme-Regular.svg";
import "./fonts/Programme-Regular/Programme-Regular.ttf";
import "./fonts/Programme-Regular/Programme-Regular.woff";
import "./fonts/Programme-Regular/Programme-Regular.woff2";

import "./fonts/Programme-Bold/Programme-Bold.eot";
import "./fonts/Programme-Bold/Programme-Bold.svg";
import "./fonts/Programme-Bold/Programme-Bold.ttf";
import "./fonts/Programme-Bold/Programme-Bold.woff";
import "./fonts/Programme-Bold/Programme-Bold.woff2";

import "./fonts/Programme-Light/Programme-Light.eot";
import "./fonts/Programme-Light/Programme-Light.svg";
import "./fonts/Programme-Light/Programme-Light.ttf";
import "./fonts/Programme-Light/Programme-Light.woff";
import "./fonts/Programme-Light/Programme-Light.woff2";

import "./stylesheets/Loader.scss";

import Counter from "./features/counter/Counter";

import NotFound from "./NotFound";

import AuthorizedRoute from "./app/AuthorizedRoute";
// import ProtectedRoute from "./app/ProtectedRoute";

import Navbar from "./app/Navbar";
import HomeLayout from "./app/HomeLayout";

import ArtistsIndex from "./features/artists/IndexContainer";
import ArtistShow from "./features/artists/ShowContainer";

import AlbumsIndex from "./features/albums/IndexContainer";
import AlbumShow from "./features/albums/ShowContainer";

import SongsIndex from "./features/songs/IndexContainer";
import SongShow from "./features/songs/ShowContainer";

// import UsersList from "./features/users/UsersList";
// import UserPage from "./features/users/UserPage";

import SignupForm from "./features/session/FancySignUp";
import LoginForm from "./features/session/FancyLogin";

import UserProfile from "./features/users/ProfileContainer";

import PageFooter from "./app/PageFooter";

const App = () => (
  <main className="App">
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeLayout} />

        <Route exact path="/albums" component={AlbumsIndex} />
        <Route exact path="/albums/:albumId" component={AlbumShow} />

        <Route exact path="/artists" component={ArtistsIndex} />
        <Route exact path="/artists/index/" component={ArtistsIndex} />
        <Route exact path="/artists/index/:char" component={ArtistsIndex} />
        <Route exact path="/artists/:artistId" component={ArtistShow} />

        <Route exact path="/songs" component={SongsIndex} />
        <Route exact path="/songs/index" component={SongsIndex} />
        <Route exact path="/songs/index/:char" component={SongsIndex} />
        <Route exact path="/songs/:songId" component={SongShow} />
        <Route exact path="/songs/:songId/verses" component={SongShow} />
        <Route
          exact
          path="/songs/:songId/verses/:verseId"
          component={SongShow}
        />

        {/* <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/:userId" component={UserPage} /> */}

        <Route exact path="/counter" component={Counter} />

        <AuthorizedRoute exact path="/signup" component={SignupForm} />
        <AuthorizedRoute exact path="/login" component={LoginForm} />

        <Route exact path="/users/:userId" component={UserProfile} />

        <Route component={NotFound} />
        <Redirect to="/" />
      </Switch>

      <PageFooter />
    </Router>
  </main>
);

export default App;
