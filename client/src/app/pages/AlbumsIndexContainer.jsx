import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchAlbumsList } from "../../features/albums/albumsSliceThunks";

import Breadcrumbs from "../layout/Breadcrumbs";
import IndexList from "../components/AlbumsIndexList";
import TopAlbums from "../components/AlbumsTop";

// import "../../stylesheets/IndexContainer.scss";

const Suggestions = () => {
  return (
    <div>
      <h1>Kanye West Albums</h1>
      <TopAlbums />
    </div>
  );
};

const IndexLayout = ({ match }) => {
  return (
    <section className="IndexLayout">
      <div>
        <Suggestions />
        {/* <IndexList /> */}
        <Breadcrumbs match={match} />
      </div>
    </section>
  );
};

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
      <IndexLayout match={match} />
    </div>
  );
};

export default IndexContainer;
