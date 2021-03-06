import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchArtistsIndex } from "../../features/artists/artistsSliceThunks";

// import "../.././stylesheets/ArtistsIndex.scss";
// import "../../stylesheets/IndexContainer.scss";

import Breadcrumbs from "../layout/Breadcrumbs";
import IndexChars from "../components/ArtistsIndexChars";
import IndexList from "../components/ArtistsIndexList";
import TopArtists from "../components/ArtistsTop";

const Suggestions = () => {
  return (
    <div>
      <h1>Suggestions</h1>
      How about these artists?
      <TopArtists />
    </div>
  );
};

const IndexLayout = ({ char, match }) => {
  const content = char ? <IndexList char={char} /> : <Suggestions />;

  return (
    <section className="IndexLayout">
      <div>
        <IndexChars />
        {content}
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

const ArtistsIndexPage = ({ match }) => {
  const [lastCharFetched, setLastCharFetched] = useState(null);
  const selectedChar = match.params.char;

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedChar && lastCharFetched !== selectedChar) {
      dispatch(fetchArtistsIndex(selectedChar));
      setLastCharFetched(selectedChar);
    }
  }, [selectedChar, lastCharFetched, dispatch]);

  return (
    <div className="IndexContainer">
      <IndexLayout char={selectedChar} match={match} />
    </div>
  );
};

export default ArtistsIndexPage;
