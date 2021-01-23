import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopScholars } from "./usersAsyncThunks";

import { selectTopScholars } from "./usersSlice";

import NotFound from "../../NotFound";

import "../../assets/stylesheets/TopScholars.scss";

const TableRow = (user) => (
  <tr>
    <th>
      <Link to={`/users/${user.id}`}>{user.username}</Link>
    </th>
    <th>{`YeniusIQ: ${user.authoredCommentsCount}`}</th>
  </tr>
);

const Table = () => {
  const users = useSelector((state) => selectTopScholars(state));
  const table = <table>{users.map((user) => TableRow(user))}</table>;
  return <div className="Table">{table}</div>;
};

const TopScholars = () => {
  const [requestSent, setRequestSent] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!requestSent) {
      dispatch(fetchTopScholars());
      setRequestSent(true);
    }
  }, [requestSent, dispatch]);

  const fetchTopScholarsStatus = useSelector(
    (state) => state.users.status.fetchTopScholars
  );

  let content;
  if (!fetchTopScholarsStatus || fetchTopScholarsStatus === "pending") {
    content = <div className="loader" />;
  } else if (fetchTopScholarsStatus === "fulfilled") {
    content = <Table />;
  } else if (fetchTopScholarsStatus === "rejected") {
    content = (
      <div>
        fetchTopScholars was rejected!
        <br />
        <NotFound />
      </div>
    );
  } else {
    content = <div>Something unexpected happened in TopScholars...</div>;
  }

  return (
    <div className="TopScholars">
      <h1>TopScholars</h1>
      <br />
      {content}
    </div>
  );
};

export default TopScholars;
