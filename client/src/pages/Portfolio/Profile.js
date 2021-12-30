import React from "react";

export const Profile = ({ isAuth }) => {
  console.log(isAuth);
  return <div>Hello {isAuth.name}</div>;
};
export default Profile;
