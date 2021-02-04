import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistsIndex } from "./artistsSliceThunks";

import NotFound from "../../app/pages/NotFound";

import "../.././stylesheets/ArtistsIndex.scss";
import "../../stylesheets/IndexContainer.scss";

import Breadcrumbs from "../../app/Breadcrumbs";
import IndexChars from "./IndexChars";
import IndexList from "./IndexList";
import TopArtists from "./TopArtists";

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

const IndexContainer = ({ match }) => {
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

export default IndexContainer;
