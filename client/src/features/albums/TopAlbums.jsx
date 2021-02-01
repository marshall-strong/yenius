import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopAlbums } from "./albumsAsyncThunks";

import { selectTopAlbums } from "./albumsSlice";

import NotFound from "../../app/NotFound";
import TopAlbumsRow from "./TopAlbumsRow";

const TopAlbumsContent = () => {
  const albums = useSelector((state) => selectTopAlbums(state));
  const rows = albums.map((album) => (
    <TopAlbumsRow album={album} key={album.rank} />
  ));
  return <div>{rows}</div>;
};

const TableRow = (album) => (
  <tr>
    <th>
      <Link to={`/albums/${album.id}`}>{album.name}</Link>
    </th>
  </tr>
);

const Table = () => {
  const albums = useSelector((state) => selectTopAlbums(state));
  const table = (
    <table>
      <tbody>
        {albums.map((album) => (
          <TableRow album={album} key={album.id} />
        ))}
      </tbody>
    </table>
  );
  return <div className="Table">{table}</div>;
};

const TopAlbumsContainer = () => {
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
    content = <TopAlbumsContent />;
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

  return <div className="TopAlbums">{content}</div>;
};

export default TopAlbumsContainer;
