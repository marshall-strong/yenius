import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchAlbumsList } from "./albumsAsyncThunks";

import AlbumsIndexLayout from "./IndexLayout";

import "../../stylesheets/IndexContainer.scss";

const IndexContainer = ({ match }) => {
  const [asyncRequestSent, setAsyncRequestSent] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!asyncRequestSent) {
      dispatch(fetchAlbumsList());
      setAsyncRequestSent(true);
    }
  }, [asyncRequestSent, dispatch]);

  return (
    <div className="IndexContainer">
      <AlbumsIndexLayout match={match} />
    </div>
  );
};

export default IndexContainer;
