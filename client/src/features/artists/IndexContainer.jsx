import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistsIndex } from "./artistsAsyncThunks";

import ArtistsIndexLayout from "./IndexLayout";
import NotFound from "../../NotFound";

import "../.././stylesheets/ArtistsIndex.scss";
import "../../stylesheets/IndexContainer.scss";

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
      <ArtistsIndexLayout char={selectedChar} match={match} />
    </div>
  );
};

export default IndexContainer;
