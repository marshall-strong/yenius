import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loginUser } from "./sessionAsyncThunks";

import ".././stylesheets/SessionForms.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const onUsernameChanged = (e) => setUsername(e.target.value);

  const [password, setPassword] = useState("");
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const sessionErrors = useSelector((state) => state.session.errors);

  const userCredentials = {
    username: username,
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

  const loginForm = (
    <form id="from-header" onSubmit={handleLogin}>
      <div className="session-heading">
        <span>LoginForm</span>
      </div>
      <br />
      {displayErrors}
      {usernameInput}
      <br />
      {passwordInput}
      <br />
      <div className="finger">
        <button type="submit">LOG IN</button>
      </div>
      <div className="sess-links finger">
        <button onClick={handleDemoLogin}>Login as Demo user</button>
      </div>
    </form>
  );

  return <div className="SessionForm">{loginForm}</div>;
};

export default LoginForm;
