import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSongPage } from "../songsAsyncThunks";
import { selectSongById } from "../songsSlice";

import SongBanner from "./SongBanner";
import SongLayout from "./SongLayout";
import SongBreadcrumbs from "./SongBreadcrumbs";

import "../../../assets/stylesheets/SongShow.scss";
import "../../../assets/stylesheets/column_layout.scss";

const SongPage = ({ match }) => {
  const dispatch = useDispatch();
  const [componentStatus, setComponentStatus] = useState("idle");
  const { songId } = match.params;
  const [lastSongId, setLastSongId] = useState(null);

  // fetch data from API when SongPage loads
  useEffect(() => {
    if (componentStatus === "idle") {
      dispatch(fetchSongPage(songId));
      setComponentStatus("requestSent");
      setLastSongId(songId);
    }
  }, [componentStatus, songId, dispatch]);

  // fetch data from API when arriving from another SongPage
  useEffect(() => {
    if (lastSongId !== songId) {
      dispatch(fetchSongPage(songId));
      setLastSongId(songId);
    }
  }, [lastSongId, songId, dispatch]);

  const asyncRequestStatus = useSelector((state) => state.asyncRequests.status);
  const error = useSelector((state) => state.asyncRequests.errors[-1]);
  const song = useSelector((state) => selectSongById(state, songId));

  let content;

  if (asyncRequestStatus === "pending") {
    content = <div className="loader">Loading...</div>;
  } else if (asyncRequestStatus === "rejected") {
    content = <div>{error}</div>;
  } else if (asyncRequestStatus === "fulfilled" && !song) {
    content = <h2>Song not found!</h2>;
  } else if (asyncRequestStatus === "fulfilled" && song) {
    content = (
      <div>
        <SongBanner songId={songId} />
        <SongLayout songId={songId} />
        {/* <SongBreadcrumbs songId={songId} /> */}
      </div>
    );
  }
  
  return (
    <section>
      {content}
    </section>
  );
};

export default SongPage;
