import React from "react";
import Searchbar from "../../components/Searchbar";
import { usePosts } from "../../utils/PostAuth";
import pic from "../../blank-avatar.png";
import { UserContext } from "../../UserContext";
import { useContext, useState } from "react";

export const Notifications = ({ Friend, SetFriend }) => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      <div className="MainCard">
        <div style={{ fontWeight: "bold" }}>Notices</div>
        {user.Notices.map((notice) =>
          notice.type === "message" ? (
            <>
              <div className=" Poster notice">
                {" "}
                <div className="PosterInfo">
                  <img src={notice.picture ? notice.picture : pic} alt="" />
                  {notice.from}
                </div>
                <div> {notice.text}</div>
                <div className="message">Message</div>
              </div>
            </>
          ) : (
            ""
          )
        )}
      </div>
      ;
    </div>
  );
};
