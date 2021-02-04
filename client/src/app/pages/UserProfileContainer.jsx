import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "../../features/users/usersSliceThunks";

import { selectUserById } from "../../features/users/usersSlice";

import ProfileEdit from "../components/UserProfileEdit";
import Profile from "../components/UserProfile";
import PageNotFound from "./PageNotFound";

// import "../.././stylesheets/ProfileContainer.scss";

const ProfileContainer = ({ match }) => {
  const userId = parseInt(match.params.userId);
  const [lastUserFetched, setLastUserFetched] = useState(null);

  const fetchUserProfileStatus = useSelector(
    (state) => state.users.status.fetchUserProfile
  );
  const user = useSelector((state) => selectUserById(state, userId));
  const currentUser = useSelector((state) => state.session.currentUser);

  let content = <div>User Profile component</div>;
  if (!user && fetchUserProfileStatus === "pending") {
    content = <div className="loader" />;
  }
  if (!user && fetchUserProfileStatus === "rejected") {
    content = (
      <div>
        <h2>User not found!</h2>
        <PageNotFound />
      </div>
    );
  }
  if (user && fetchUserProfileStatus === "fulfilled") {
    if (currentUser && currentUser.id === user.id) {
      content = <ProfileEdit match={match} />;
    } else {
      content = <Profile match={match} />;
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (userId && lastUserFetched !== userId) {
      dispatch(fetchUserProfile(userId));
      setLastUserFetched(userId);
    }
  }, [userId, lastUserFetched, dispatch]);

  return <section className="ProfileContainer">{content}</section>;
};

export default ProfileContainer;
