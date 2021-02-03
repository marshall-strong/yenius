import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loginUser } from "./sessionSliceThunks";

import "../../stylesheets/FancySignUp.scss";
import "../../stylesheets/SessionContainer.scss";

const FancyLogin = () => {
  // const [showForm, setShowForm] = useState(false);
  // const toggleShowForm = () =>
  //   showForm ? setShowForm(false) : setShowForm(true);
  // const showFormKlass = showForm ? "show_sign_up_form" : "hide_sign_up_form";

  const [username, setUsername] = useState("");
  const onUsernameChanged = (e) => setUsername(e.target.value);

  // const [email, setEmail] = useState("");
  // const onEmailChanged = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const sessionErrors = useSelector((state) => state.session.errors);

  const userCredentials = {
    username: username,
    // email: email,
    password: password,
  };

  const demoUserCredentials = {
    username: "demo",
    password: "demo1234",
  };

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userCredentials));
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(demoUserCredentials));
  };

  return (
    <div className="SessionContainer inherit">
      <div className="sign_up_unit">
        {/* <div className={showFormKlass}> */}
        <div className="sign-up-header">
          {/* <h1>Sign up</h1>
            <h2>and show off your genius</h2> */}
          <h2>Sign In</h2>
        </div>

        {/* <a
            href="/auth/facebook"
            className="identity_connect_button facebook_button"
            data-method="post"
            target="_top"
          >
            Sign in with Facebook
          </a> */}

        {/* <a
            href="/auth/twitter"
            className="identity_connect_button twitter_button"
            data-method="post"
            target="_top"
          >
            Sign in with Twitter
          </a> */}

        {/* <a
            href="/auth/google"
            className="identity_connect_button google_button"
            data-method="post"
            target="_top"
          >
            Sign in with Google
          </a> */}

        {/* <button
            href="#"
            className="sign_in_with_email toggle_target identity_connect_button pressed"
            data-focus="#user_login"
            data-show-with-class="show_sign_up_form"
            data-target=".sign_up_unit"
            onClick={toggleShowForm}
          >
            Sign up with email
          </button> */}

        <div className="sign_up_form_unit">
          <form
            onSubmit={handleLogin}
            acceptCharset="UTF-8"
            // action="/account"
            className="new_user"
            id="new_user"
            // method="post"
          >
            {/* <div style="margin:0;padding:0;display:inline">
                <input
                  name="authenticity_token"
                  type="hidden"
                  value="fFO7D6bsU3uDT19sUSZC8iYkTkjTreDW9pCQ9v05XCY="
                />
              </div> */}
            <input
              name="authenticity_token"
              type="hidden"
              value="fFO7D6bsU3uDT19sUSZC8iYkTkjTreDW9pCQ9v05XCY="
            />

            <label htmlFor="user_login">Genius Nickname</label>
            <input
              className="required"
              id="user_login"
              name="user[login]"
              onChange={onUsernameChanged}
              size="30"
              tabIndex="1"
              title="Enter a nickname"
              type="text"
            />

            {/* <label htmlFor="user_email">Email</label>
              <input
                className="required email"
                id="user_email"
                name="user[email]"
                onChange={onEmailChanged}
                size="30"
                tabIndex="2"
                title="Enter your email address"
                type="text"
              /> */}

            <label htmlFor="user_password">Password</label>
            <input
              className="required"
              id="user_password"
              name="user[password]"
              onChange={onPasswordChanged}
              size="30"
              tabIndex="3"
              title="Enter a password"
              type="password"
            />

            {/* <p className="message">
                By clicking “Create Account”, you are indicating that you have
                read and agree to the{" "}
                <a href="/static/terms" target="_blank">
                  Terms of Service
                </a>
                .
              </p> */}

            <input
              id="user_submit"
              name="commit"
              tabIndex="4"
              type="submit"
              value="Login"
            />
          </form>
        </div>

        <button
          href="#"
          className="sign_in_with_email toggle_target identity_connect_button pressed"
          data-focus="#user_login"
          data-show-with-class="show_sign_up_form"
          data-target=".sign_up_unit"
          onClick={handleDemoLogin}
        >
          Sign in as a Demo user
        </button>

        <p className="callout">
          Don't have an account?{" "}
          <Link to="/signup" className="link" rel="nofollow">
            Sign up here.
          </Link>
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FancyLogin;
