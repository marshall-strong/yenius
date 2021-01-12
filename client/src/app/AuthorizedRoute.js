import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const AuthorizedRoute = ({ path, component: Component }) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  return (
    <Route
      path={path}
      render={(props) => {
        if (currentUser) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default withRouter(AuthorizedRoute);
