import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSongsIndex } from "./songsAsyncThunks";
import { selectSongIds, selectSongById } from "./songsSlice";

import IndexLayout from "./IndexLayout";
import NotFound from "../../NotFound";

import "../../assets/stylesheets/SongsIndex.scss";

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

  return <IndexLayout char={selectedChar} match={match} />;
};

export default IndexContainer;
