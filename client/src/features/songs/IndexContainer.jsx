import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchSongsIndex } from "./songsAsyncThunks";

import SongsIndexLayout from "./IndexLayout";

import "../../stylesheets/IndexContainer.scss";
import "../../stylesheets/SongsIndex.scss";

const IndexContainer = ({ match }) => {
  const [lastCharFetched, setLastCharFetched] = useState(null);
  const selectedChar = match.params.char;

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedChar && lastCharFetched !== selectedChar) {
      dispatch(fetchSongsIndex(selectedChar));
      setLastCharFetched(selectedChar);
    }
  }, [selectedChar, lastCharFetched, dispatch]);

  return (
    <div className="IndexContainer">
      <SongsIndexLayout char={selectedChar} match={match} />
    </div>
  );
};

export default IndexContainer;
