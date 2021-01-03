import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
});

// only accessible if user is NOT logged in
function Authorized ({ loggedIn, path, component: Component }) {
  return (
    <Route
      path={path}
      render={(props) => {
        if (loggedIn) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

const AuthRoute = withRouter(connect(mapStateToProps)(Authorized));

export default AuthRoute;
