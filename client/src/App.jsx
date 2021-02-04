import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AlbumShow from "./app/pages/AlbumShowPage";
import AlbumsIndex from "./app/pages/AlbumsIndexPage";
import ArtistShow from "./app/pages/ArtistShowPage";
import ArtistsIndex from "./app/pages/ArtistsIndexPage";
import AuthorizedRoute from "./app/AuthorizedRoute";
import Home from "./app/pages/HomePage";
import SessionLogin from "./app/pages/SessionLoginPage";
import Navbar from "./app/layout/Navbar";
import PageNotFound from "./app/pages/NotFoundPage";
import Footer from "./app/layout/Footer";
import SessionSignup from "./app/pages/SessionSignupPage";
import SongShow from "./app/pages/SongShowPage";
import SongsIndex from "./app/pages/SongsIndexPage";
import UserProfile from "./app/pages/UserProfilePage";

// import "./stylesheets/App.scss";
// import "./stylesheets/Loader.scss";

const App = () => (
  <main className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
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
        <Route exact path="/users/:userId" component={UserProfile} />
        <AuthorizedRoute exact path="/login" component={SessionLogin} />
        <AuthorizedRoute exact path="/signup" component={SessionSignup} />
        <Route component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  </main>
);

export default App;
