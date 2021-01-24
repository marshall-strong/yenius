import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchArtistsIndex } from "./artistsAsyncThunks";

import ArtistsIndexLayout from "./IndexLayout";
import NotFound from "../../NotFound";

import "../../../assets/stylesheets/ArtistsIndex.scss";

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

  return <ArtistsIndexLayout char={selectedChar} match={match} />;
};

export default IndexContainer;
