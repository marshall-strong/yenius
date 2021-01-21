import React from "react";
import { useSelector } from "react-redux";

import { selectUserById } from "./usersSlice";

const CurrentUserProfile = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById(state, userId));
  const currentUser = useSelector((state) => state.session.currentUser);
  let profile;
  if (user) {
    const authoredComments = user.authoredCommentsCount || "0";
    profile = (
      <section>
        <h1>Your Profile Page</h1>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <br />
        <p>email: {currentUser.email}</p>
        <button>{"Update your email"}</button>
        <br />
        <p>authored_comments_count: {authoredComments}</p>
        <div style={{ backgroundColor: `${user.myColor}` }}>
          <br />
          <p>myColor: {user.myColor}</p>
          <br />
          <button>{"Change your color"}</button>
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

export default CurrentUserProfile;
