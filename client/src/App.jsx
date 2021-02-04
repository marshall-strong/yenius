import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AlbumShow from "./app/pages/AlbumShowContainer";
import AlbumsIndex from "./app/pages/AlbumsIndexContainer";
import ArtistShow from "./app/pages/ArtistShowContainer";
import ArtistsIndex from "./app/pages/ArtistsIndexContainer";
import AuthorizedRoute from "./app/AuthorizedRoute";
import Counter from "./features/counter/Counter";
import Home from "./app/pages/HomeContainer";
import SessionLogin from "./app/pages/SessionLoginContainer";
import Navbar from "./app/layout/Navbar";
import PageNotFound from "./app/pages/PageNotFound";
import Footer from "./app/layout/Footer";
import SessionSignup from "./app/pages/SessionSignupContainer";
import SongShow from "./app/pages/SongShowContainer";
import SongsIndex from "./app/pages/SongsIndexContainer";
import UserProfile from "./app/pages/UserProfileContainer";

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
        <Route exact path="/counter" component={Counter} />
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
