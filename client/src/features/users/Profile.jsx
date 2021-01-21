import React from "react";
import { useSelector } from "react-redux";

import { selectUserById } from "./usersSlice";

const UserProfile = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById(state, userId));

  let profile;
  if (user) {
    profile = (
      <section>
        <h2>User {user.id}</h2>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>authored_comments_count: {user.authoredCommentsCount}</p>
      </section>
    );
  } else {
    profile = (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return profile;
};

export default UserProfile;
