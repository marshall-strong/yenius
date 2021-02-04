import React from "react";
import { useSelector } from "react-redux";

import { selectUserById } from "../../features/users/usersSlice";

const UserProfile = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById(state, userId));

  let profile;
  if (user) {
    const authoredComments = user.authoredCommentsCount || "0";
    profile = (
      <section>
        <h1>{user.username}'s Page</h1>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <p>authored_comments_count: {authoredComments}</p>
        <div style={{ backgroundColor: `${user.myColor}` }}>
          <br />
          <p>myColor: {user.myColor}</p>
          <br />
        </div>
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
