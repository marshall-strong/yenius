import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUsers } from "./usersAsyncThunks";
import { selectUserIds, selectUserById } from "./usersSlice";

const UsersListItem = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  return (
    <article className="list-item" key={user.id}>
      <h3>User {user.id}</h3>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <Link to={`/users/${user.id}`} className="button muted-button">
        View User
      </Link>
    </article>
  );
};

const UsersList = () => {
  const dispatch = useDispatch();
  const userIds = useSelector(selectUserIds);
  const usersStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  let content;

  if (usersStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (usersStatus === "succeeded") {
    content = userIds.map((userId) => (
      <UsersListItem key={userId} userId={userId} />
    ));
  } else if (usersStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>Users</h2>
      {content}
    </section>
  );
};

export default UsersList;
