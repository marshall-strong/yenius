import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "./usersAsyncThunks";

import { selectUserById } from "./usersSlice";

import Profile from "./Profile";
import NotFound from "../../NotFound";

import "../../assets/stylesheets/UserProfile.scss";

const ProfileContainer = ({ match }) => {
  const userId = parseInt(match.params.userId);
  const user = useSelector((state) => selectUserById(state, userId));
  const [lastUserFetched, setLastUserFetched] = useState(null);
  const fetchUserProfileStatus = useSelector(
    (state) => state.users.status.fetchUserProfile
  );

  let content = <div>User Profile component</div>;
  if (!user && fetchUserProfileStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!user && fetchUserProfileStatus === "rejected") {
    content = (
      <div>
        <h2>User not found!</h2>
        <NotFound />
      </div>
    );
  }
  if (user && fetchUserProfileStatus === "fulfilled") {
    content = <Profile match={match} />;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId && lastUserFetched !== userId) {
      dispatch(fetchUserProfile(userId));
      setLastUserFetched(userId);
    }
  }, [userId, lastUserFetched, dispatch]);

  return <section>{content}</section>;
};

export default ProfileContainer;