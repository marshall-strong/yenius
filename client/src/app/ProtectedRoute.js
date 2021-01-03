import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const ProtectedRoute = ({ path, component: Component }) => {
  const currentUserId = useSelector((state) => state.session.currentUserId);
  return (
    <Route
      path={path}
      render={(props) => {
        if (!currentUserId) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
