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
      <div
        className="MainCard"
        style={{ marginTop: "120px", background: "whitesmoke" }}
      >
        <div style={{ fontWeight: "bold" }}>
          {user.Notices.length > 1
            ? "You have some notifications!"
            : "You are all up to date"}
        </div>
        {user.Notices.map((notice) =>
          notice.type === "message" ? (
            <>
              <div className=" Poster notice">
                {" "}
                <div className="PosterInfo">
                  <img src={notice.picture ? notice.picture : pic} alt="" />
                  {notice.from}
                </div>
                <div className="msg-text">
                  {" "}
                  <div>{notice.text}</div> <div className="msg-rsp">Reply</div>
                </div>
                <div className="message">
                  {notice.Date ? notice.Date : "March 2 22"}
                </div>
                <div className="msg">Inbox</div>
              </div>
            </>
          ) : notice.type === "post" ? (
            "Post"
          ) : (
            <div className=" Poster notice">
              {" "}
              <div className="PosterInfo">
                <img src={notice.picture ? notice.picture : pic} alt="" />
                {notice.from}
              </div>
              <div className="msg-text">
                {" "}
                <div>{notice.text}</div> <div className="msg-rsp">Reply</div>
              </div>
              <div className="message">
                {notice.Date ? notice.Date : "March 2 22"}
              </div>
              <div className="msg">Inbox</div>
            </div>
          )
        )}
        <>
          {" "}
          <div className=" Poster notice">
            {" "}
            <div className="PosterInfo">
              <img src={user.profilePic} alt="" />
              {user.nickname}
            </div>
            <div className="msg-text">
              {" "}
              <div>Pray for Ukraine</div> <div>just made a post !</div>{" "}
              <div className="pst-link">Go to Post</div>
            </div>
            <div className="message">"March 2 22"</div>
            <div className="pst">Feed</div>
          </div>
        </>
      </div>
      ;
    </div>
  );
};
