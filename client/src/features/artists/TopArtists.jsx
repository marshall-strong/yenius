import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopArtists } from "./artistsSliceThunks";

import { selectTopArtists } from "./artistsSlice";

import NotFound from "../../app/pages/NotFound";
import TopArtistsRow from "./TopArtistsRow";

const TopArtistsContent = () => {
  const artists = useSelector((state) => selectTopArtists(state));
  const rows = artists.map((artist) => (
    <TopArtistsRow artist={artist} key={artist.rank} />
  ));
  return <div>{rows}</div>;
};

const TopArtistsContainer = () => {
  const [requestSent, setRequestSent] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchTopArtists());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchTopArtistsStatus = useSelector(
    (state) => state.artists.status.fetchTopArtists
  );

  let content;
  if (!fetchTopArtistsStatus || fetchTopArtistsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchTopArtistsStatus === "fulfilled") {
    content = <TopArtistsContent />;
  } else if (fetchTopArtistsStatus === "rejected") {
    content = (
      <div>
        fetchTopArtists was rejected!
        <br />
        <NotFound />
      </div>
    );
  } else {
    content = <div>Something unexpected happened in TopArtists...</div>;
  }

  return <div className="TopArtists">{content}</div>;
};

export default TopArtistsContainer;
