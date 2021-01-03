import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signupUser, loginUser } from "./sessionAsyncThunks";

import "../../assets/stylesheets/SessionForms.scss";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const onUsernameChanged = (e) => setUsername(e.target.value);

  const [email, setEmail] = useState("");
  const onEmailChanged = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const onPasswordChanged = (e) => setPassword(e.target.value);
  
  const sessionErrors = useSelector((state) => state.session.errors);

  const userCredentials = {
    username: username,
    email: email,
    password: password,
  };

  const demoUserCredentials = {
    username: "demo",
    password: "demo1234"
  };

  const dispatch = useDispatch();
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(userCredentials));
  };  
  const handleDemoLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(demoUserCredentials));
  };
  const displayErrors = (
    <ul className="session-errors">
      {sessionErrors.map((error, idx) => (
        <li key={idx}> {error} </li>
      ))}
    </ul>
  );

  const usernameInput = (
    <input
      type="text"
      value={username}
      className="session-input"
      onChange={onUsernameChanged}
      placeholder="Username"
      required
    />
  );

  const emailInput = (
    <input
      type="email"
      value={email}
      className="session-input"
      onChange={onEmailChanged}
      placeholder="Email"
      required
    />
  );

  const passwordInput = (
    <input
      type="password"
      value={password}
      className="session-input"
      onChange={onPasswordChanged}
      placeholder="Password"
      required
    />
  );

  const signupForm = (
    <form id="from-header" onSubmit={handleSignup}>
      <div className="session-heading">
        <span>SignupForm</span>
      </div>
      <br />
      {displayErrors}
      {usernameInput}
      {emailInput}
      {passwordInput}
      <br />
      <div className="finger">
        <button type="submit">SIGN UP</button>
      </div>
    </form>
  );

  return (
    <div className="SessionForm">
      {signupForm}
      <div className="sess-links finger">
        <button onClick={handleDemoLogin}>Login as Demo user</button>
      </div>
    </div>
  );
};

export default SignupForm;
