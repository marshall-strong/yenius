import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUserById } from "../users/usersSlice";

const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => selectUserById(state, userId));

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
        <Link to={`/users`} className="button muted-button">
          Back to Users List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>User {user.id}</h2>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <Link to={`/users`} className="button muted-button">
        Back to Users List
      </Link>
    </section>
  );
};

export default UserPage;
