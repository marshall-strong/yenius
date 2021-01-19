import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchAlbumsList } from "./albumsAsyncThunks";

import AlbumsIndexLayout from "./IndexLayout";

const IndexContainer = ({ match }) => {
  const [asyncRequestSent, setAsyncRequestSent] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!asyncRequestSent) {
      dispatch(fetchAlbumsList());
      setAsyncRequestSent(true);
    }
  }, [asyncRequestSent, dispatch]);

  return <AlbumsIndexLayout match={match} />;
};

export default IndexContainer;
