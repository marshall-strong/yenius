import React from "react";

import "../../assets/stylesheets/FancySignUp.scss";

const FancySignUp = () => {
  return (
    <div className="inherit">
      <div className="sign_up_unit  show_sign_up_form">
        <div className="sign-up-header">
          <h1>Sign up</h1>
          <h2>and show off your genius</h2>
        </div>

        <a
          href="/auth/facebook"
          className="identity_connect_button facebook_button"
          data-method="post"
          target="_top"
        >
          Sign up with Facebook
        </a>

        <a
          href="/auth/twitter"
          className="identity_connect_button twitter_button"
          data-method="post"
          target="_top"
        >
          Sign up with Twitter
        </a>

        <a
          href="/auth/google"
          className="identity_connect_button google_button"
          data-method="post"
          target="_top"
        >
          Sign up with Google
        </a>

        <a
          href="#"
          className="sign_in_with_email toggle_target identity_connect_button pressed"
          data-focus="#user_login"
          data-show-with-class="show_sign_up_form"
          data-target=".sign_up_unit"
        >
          Sign up with email
        </a>

        <div className="sign_up_form_unit">
          <form
            acceptCharset="UTF-8"
            action="/account"
            className="new_user"
            id="new_user"
            method="post"
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
              size="30"
              tabIndex="1"
              title="Enter a nickname"
              type="text"
            />

            <label htmlFor="user_email">Email</label>
            <input
              className="required email"
              id="user_email"
              name="user[email]"
              size="30"
              tabIndex="2"
              title="Enter your email address"
              type="text"
            />

            <label htmlFor="user_password">Password</label>
            <input
              className="required"
              id="user_password"
              name="user[password]"
              size="30"
              tabIndex="3"
              title="Enter a password"
              type="password"
            />

            <p className="message">
              By clicking “Create Account”, you are indicating that you have
              read and agree to the{" "}
              <a href="/static/terms" target="_blank">
                Terms of Service
              </a>
              .
            </p>

            <input
              id="user_submit"
              name="commit"
              tabIndex="4"
              type="submit"
              value="Create Account"
            />
          </form>
        </div>

        <p className="callout">
          Already have an account?{" "}
          <a href="/login" className="facebox" rel="nofollow">
            Sign in here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default FancySignUp;
