import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopScholars } from "./usersAsyncThunks";

import NotFound from "../../NotFound";

import "../../assets/stylesheets/TopScholars.scss";

const TopScholars = () => {
  return (
    <div className="TopScholars">
      <h1>SUCCESS!!</h1>
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
