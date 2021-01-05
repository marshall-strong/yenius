import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./assets/stylesheets/App.scss";
import "./font-faces.scss"
import "./assets/fonts/Programme-Regular/Programme-Regular.eot";
import "./assets/fonts/Programme-Regular/Programme-Regular.svg";
import "./assets/fonts/Programme-Regular/Programme-Regular.ttf";
import "./assets/fonts/Programme-Regular/Programme-Regular.woff";
import "./assets/fonts/Programme-Regular/Programme-Regular.woff2";

import "./assets/fonts/Programme-Bold/Programme-Bold.eot";
import "./assets/fonts/Programme-Bold/Programme-Bold.svg";
import "./assets/fonts/Programme-Bold/Programme-Bold.ttf";
import "./assets/fonts/Programme-Bold/Programme-Bold.woff";
import "./assets/fonts/Programme-Bold/Programme-Bold.woff2";

import "./assets/fonts/Programme-Light/Programme-Light.eot";
import "./assets/fonts/Programme-Light/Programme-Light.svg";
import "./assets/fonts/Programme-Light/Programme-Light.ttf";
import "./assets/fonts/Programme-Light/Programme-Light.woff";
import "./assets/fonts/Programme-Light/Programme-Light.woff2";

import "./assets/stylesheets/Loader.scss";

import NotFound from "./NotFound";

import AuthorizedRoute from "./app/AuthorizedRoute";
// import ProtectedRoute from "./app/ProtectedRoute";

import Navbar from "./app/Navbar";
import LandingPage from "./app/LandingPage";
import PageFooter from "./app/PageFooter";

import SignupForm from "./features/session/SignupForm";
import LoginForm from "./features/session/LoginForm";

import AlbumsList from "./features/albums/AlbumsList";
import AlbumPage from "./features/albums/AlbumPage";

import ArtistCreditsList from "./features/artistCredits/ArtistCreditsList";
import ArtistCreditPage from "./features/artistCredits/ArtistCreditPage";

import ArtistCreditTypesList from "./features/artistCreditTypes/ArtistCreditTypesList";
import ArtistCreditTypePage from "./features/artistCreditTypes/ArtistCreditTypePage";

import ArtistsIndexList from "./features/artists/ArtistsIndex/ArtistsIndexList";
import ArtistsIndexPage from "./features/artists/ArtistsIndex/ArtistsIndexPage";
import ArtistPage from "./features/artists/ArtistPage";

import CommentsList from "./features/comments/CommentsList";
import CommentPage from "./features/comments/CommentPage";

import SampleCreditsList from "./features/sampleCredits/SampleCreditsList";
import SampleCreditPage from "./features/sampleCredits/SampleCreditPage";

import SampleCreditTypesList from "./features/sampleCreditTypes/SampleCreditTypesList";
import SampleCreditTypePage from "./features/sampleCreditTypes/SampleCreditTypePage";

import SongsIndexList from "./features/songs/SongsIndex/SongsIndexList";
import SongsIndexPage from "./features/songs/SongsIndex/SongsIndexPage";
import SongPage from "./features/songs/SongPage";

import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

import VersesList from "./features/verses/VersesList";
import VersePage from "./features/verses/VersePage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <AuthorizedRoute exact path="/signup" component={SignupForm} />
          <AuthorizedRoute exact path="/login" component={LoginForm} />

          <Route exact path="/albums" component={AlbumsList} />
          <Route exact path="/albums/:albumId" component={AlbumPage} />

          <Route exact path="/artist_credits" component={ArtistCreditsList} />
          <Route
            exact
            path="/artist_credits/:artistCreditId"
            component={ArtistCreditPage}
          />

          <Route
            exact
            path="/artist_credit_types"
            component={ArtistCreditTypesList}
          />
          <Route
            exact
            path="/artist_credit_types/:artistCreditTypeId"
            component={ArtistCreditTypePage}
          />

          <Route exact path="/artists-index/" component={ArtistsIndexPage} />
          <Route
            exact
            path="/artists-index/:char"
            component={ArtistsIndexList}
          />
          <Route exact path="/artists" component={ArtistsIndexPage} />
          <Route exact path="/artists/:artistId" component={ArtistPage} />

          <Route exact path="/comments" component={CommentsList} />
          <Route exact path="/comments/:commentId" component={CommentPage} />

          <Route exact path="/sample_credits" component={SampleCreditsList} />
          <Route
            exact
            path="/sample_credits/:sampleCreditId"
            component={SampleCreditPage}
          />

          <Route
            exact
            path="/sample_credit_types"
            component={SampleCreditTypesList}
          />
          <Route
            exact
            path="/sample_credit_types/:sampleCreditTypeId"
            component={SampleCreditTypePage}
          />

          <Route exact path="/songs-index" component={SongsIndexPage} />
          <Route exact path="/songs-index/:char" component={SongsIndexList} />
          <Route exact path="/songs" component={SongsIndexPage} />
          <Route exact path="/songs/:songId" component={SongPage} />

          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />

          <Route exact path="/verses" component={VersesList} />
          <Route exact path="/verses/:verseId" component={VersePage} />

          <Route component={NotFound}/>
          <Redirect to="/" />
        </Switch>
      </main>
      <PageFooter />
    </Router>
  );
}

export default App;
