import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AlbumShowPage from "./app/pages/AlbumShowPage";
import AlbumsIndexPage from "./app/pages/AlbumsIndexPage";
import ArtistShowPage from "./app/pages/ArtistShowPage";
import ArtistsIndexPage from "./app/pages/ArtistsIndexPage";
import AuthorizedRoute from "./app/AuthorizedRoute";
import Footer from "./app/layout/Footer";
import HomePage from "./app/pages/HomePage";
import Navbar from "./app/layout/Navbar";
import NotFoundPage from "./app/pages/NotFoundPage";
import SessionLoginPage from "./app/pages/SessionLoginPage";
import SessionSignupPage from "./app/pages/SessionSignupPage";
import SongShowPage from "./app/pages/SongShowPage";
import SongsIndexPage from "./app/pages/SongsIndexPage";
import UserProfilePage from "./app/pages/UserProfilePage";

// import "./stylesheets/App.scss";
// import "./stylesheets/Loader.scss";

const App = () => (
  <main className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/albums" component={AlbumsIndexPage} />
        <Route exact path="/albums/:albumId" component={AlbumShowPage} />
        <Route exact path="/artists" component={ArtistsIndexPage} />
        <Route exact path="/artists/index/" component={ArtistsIndexPage} />
        <Route exact path="/artists/index/:char" component={ArtistsIndexPage} />
        <Route exact path="/artists/:artistId" component={ArtistShowPage} />
        <Route exact path="/songs" component={SongsIndexPage} />
        <Route exact path="/songs/index" component={SongsIndexPage} />
        <Route exact path="/songs/index/:char" component={SongsIndexPage} />
        <Route exact path="/songs/:songId" component={SongShowPage} />
        <Route exact path="/songs/:songId/verses" component={SongShowPage} />
        <Route
          exact
          path="/songs/:songId/verses/:verseId"
          component={SongShowPage}
        />
        <Route exact path="/users/:userId" component={UserProfilePage} />
        <AuthorizedRoute exact path="/login" component={SessionLoginPage} />
        <AuthorizedRoute exact path="/signup" component={SessionSignupPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  </main>
);

export default App;
