import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopAlbums } from "./albumsAsyncThunks";

import { selectTopAlbums } from "./albumsSlice";

import NotFound from "../../NotFound";

const TableRow = (album) => (
  <tr>
    <th>
      <Link to={`/albums/${album.id}`}>{album.name}</Link>
    </th>
  </tr>
);

const Table = () => {
  const albums = useSelector((state) => selectTopAlbums(state));
  const table = <table>{albums.map((album) => TableRow(album))}</table>;
  return <div className="Table">{table}</div>;
};

const TopAlbums = () => {
  const [requestSent, setRequestSent] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchTopAlbums());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchTopAlbumsStatus = useSelector(
    (state) => state.albums.status.fetchTopAlbums
  );

  let content;
  if (!fetchTopAlbumsStatus || fetchTopAlbumsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchTopAlbumsStatus === "fulfilled") {
    content = <Table />;
  } else if (fetchTopAlbumsStatus === "rejected") {
    content = (
      <div>
        fetchTopAlbums was rejected!
        <br />
        <NotFound />
      </div>
    );
  } else {
    content = <div>Something unexpected happened in TopAlbums...</div>;
  }

  return (
    <div className="TopAlbums">
      <h1>TopAlbums</h1>
      <br />
      {content}
    </div>
  );
};

export default TopAlbums;
