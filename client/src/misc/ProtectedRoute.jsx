import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});

// only accessible if user IS logged in
function Protected({ loggedIn, path, component: Component }) {
  return (
    <Route
      path={path}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
}

const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export default ProtectedRoute;
