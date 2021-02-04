import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopScholars } from "./usersSliceThunks";

import { selectTopScholars } from "./usersSlice";

import NotFound from "../../app/pages/NotFound";
import TopScholarsRow from "./TopScholarsRow";

// import "../.././stylesheets/TopScholars.scss";

const TopScholarsContent = () => {
  const users = useSelector((state) => selectTopScholars(state));
  const rows = users.map((user, idx) => (
    <TopScholarsRow user={user} rank={idx + 1} key={idx} />
  ));
  return <div>{rows}</div>;
};

const TopScholarsContainer = () => {
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
    content = <TopScholarsContent />;
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

  return <div className="TopScholars">{content}</div>;
};

export default TopScholarsContainer;
