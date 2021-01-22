import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTopScholars } from "./usersAsyncThunks";

import { selectTopScholars } from "./usersSlice";

import NotFound from "../../NotFound";

import "../../assets/stylesheets/TopScholars.scss";

const TopScholars = () => {
  const users = useSelector((state) => selectTopScholars(state));
  const scholar = (user) => {
    const profileLink = <Link to={`/users/${user.id}`}>{user.username}</Link>;
    return (
      <div>
        <span>
          {`Username: `}
          {profileLink}
          {"......"}
        </span>
        <span>{`YeniusIQ: ${user.authoredCommentsCount}`}</span>
      </div>
    );
  };
  const topScholars = users.map((user) => scholar(user));
  return (
    <div className="TopScholars">
      <h1>SUCCESS!!</h1>
      {topScholars}
    </div>
  );
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
  let content = <div>TopScholars</div>;

  if (!fetchTopScholarsStatus || fetchTopScholarsStatus === "pending") {
    content = <div className="loader" />;
  }

  if (fetchTopScholarsStatus === "fulfilled") {
    content = <TopScholars />;
  }

  if (fetchTopScholarsStatus === "rejected") {
    content = (
      <div>
        Error fetching TopScholars!!!
        <br />
        <NotFound />
      </div>
    );
  }

  return (
    <div className="TopScholarsContainer">
      <h1>TopScholars</h1>
      <br />
      {content}
    </div>
  );
};

export default TopScholarsContainer;
