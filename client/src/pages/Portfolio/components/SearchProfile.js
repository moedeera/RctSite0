import React from "react";

export const SearchProfile = ({ profile, selected, setSelected, index }) => {
  console.log(profile);

  return (
    <>
      <div
        key={profile.id}
        className={selected ? "CProfile  PSelected" : "CProfile"}
        onClick={() => setSelected(index)}
      >
        <img src={profile.profilePic} alt="" className="images" />
        <div>
          <h3>{profile.nickname}</h3>
          <h5>{profile.location}</h5>
          <p className="tag" style={{ background: "green", color: "white" }}>
            message
          </p>
        </div>
      </div>
    </>
  );
};
