import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopArtists } from "./artistsAsyncThunks";

import { selectTopArtists } from "./artistsSlice";

import NotFound from "../../NotFound";

const TableRow = (artist) => (
  <tr>
    <th>
      <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
    </th>
  </tr>
);

const Table = () => {
  const artists = useSelector((state) => selectTopArtists(state));
  const table = (
    <table>
      <tbody>
        {artists.map((artist) => (
          <TableRow artist={artist} key={artist.id} />
        ))}
      </tbody>
    </table>
  );
  return <div className="Table">{table}</div>;
};

const TopArtists = () => {
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
    content = <Table />;
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

  return (
    <div className="TopArtists">
      <h1>TopArtists</h1>
      <br />
      {content}
    </div>
  );
};

export default TopArtists;
