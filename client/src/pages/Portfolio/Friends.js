import React from "react";

export const Friends = ({ isAuth }) => {
  return (
    <div style={{ color: "white" }}>
      <div> {isAuth.name}</div>
      <div>
        {" "}
        <img src={isAuth.profilePic} alt="new" />
      </div>
      <div> {isAuth.followerCount}</div>
    </div>
  );
};
