import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUserProfile } from "./usersAsyncThunks";

import { selectUserById } from "./usersSlice";

import RefactoredDropdown from "../../app/Dropdown";

import userColors from "./userColors";

const svgChevron = (
  <svg viewBox="0 0 21.32 10.91">
    <path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
  </svg>
);

const squareStop = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M2 2h20v20h-20z" />
  </svg>
);

const ProfileEdit = ({ match }) => {
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById(state, userId));
  const currentUser = useSelector((state) => state.session.currentUser);

  const dispatch = useDispatch();
  const handleUpdateColor = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        id: currentUser.id,
        my_color: selectedColor,
      })
    );
  };

  const showCurrentColor = (
    <div style={{ backgroundColor: `${currentUser.myColor}` }}>
      <br />
      <p>currentUser's saved color</p>
      <br />
    </div>
  );

  const [selectedColor, setSelectedColor] = useState(currentUser.myColor);

  const showSelectedColor = (
    <div style={{ backgroundColor: `${selectedColor}` }}>
      <br />
      <p>myColor: {selectedColor}</p>
      <br />
    </div>
  );

  let profile;
  if (user) {
    const authoredComments = user.authoredCommentsCount || "0";
    profile = (
      <section>
        {showCurrentColor}
        <h1>Your Profile Page</h1>
        <p>id: {user.id}</p>
        <p>username: {user.username}</p>
        <p>email: {currentUser.email}</p>
        <p>authored_comments_count: {authoredComments}</p>
        {showSelectedColor}
        <RefactoredDropdown
          setContainerState={setSelectedColor}
          optionsParams={Object.values(userColors)}
        />
        <button onClick={handleUpdateColor}>Save Changes</button>
      </section>
    );
  } else {
    profile = (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return profile;
};

export default ProfileEdit;
