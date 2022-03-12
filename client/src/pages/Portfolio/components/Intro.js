import React from "react";

export const Intro = ({ user }) => {
  return (
    <div className="welcome">
      <div className="profile-picture">
        <img src={user.profilePic} alt="new" />
      </div>
      <div>
        <h4>Welcome back {user.nickname}</h4>
        {user.Notifications ? (
          <div>You have {user.Notices.length} notifications</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
