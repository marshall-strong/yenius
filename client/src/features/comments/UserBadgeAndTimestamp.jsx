import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectUserById } from "../users/usersSlice";

import TimeAgo from "./TimeAgo";

// import "../../stylesheets/UserBadgeAndTimestamp.scss";

// https://iconmonstr.com/media-control-50-svg/
export const svgSquareStop = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M2 2h20v20h-20z" />
  </svg>
);

const UserBadgeAndTimestamp = ({ userId, createdAt }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  const username = user.username;
  const userIQ = user.authoredCommentsCount;
  const userColor = user.myColor;

  return (
    <div className="user_badge_and_timestamp">
      <div className="user_badge_and_timestamp-badge">
        <user-badge>
          <Link className="user_badge" to={`/users/${userId}`}>
            <div className="iconmonstr" style={{ fill: userColor }}>
              {svgSquareStop}
            </div>
            <div className="user_badge-text">
              <div className="user_badge-login_and_iq">
                <span className="user_badge-login">
                  {username}
                  {"    "}
                </span>
                <role-icon>
                  <span className="user_badge-role_icon user_badge-role_icon--contributor">
                    <svg
                      src="role_icon_contributor_equilateral_triangle.svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 10 10"
                    >
                      <polygon points="5,1 10,9 0,9"></polygon>
                    </svg>
                  </span>
                </role-icon>
                <span className="user_badge-iq--one_line">{userIQ}</span>
              </div>
            </div>
          </Link>
        </user-badge>
      </div>
      <div className="user_badge_and_timestamp-created_at">
        <TimeAgo timestamp={createdAt} />
      </div>
    </div>
  );
};

export default UserBadgeAndTimestamp;
