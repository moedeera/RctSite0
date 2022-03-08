import React from "react";
import { usePosts } from "../../utils/PostAuth";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import pic from "../../blank-avatar.png";

export const PostFeed = ({ Posts, LikeUpdate, CommentUpdate }) => {
  const { user, setPostpage } = useContext(UserContext);
  const [formComment, setFormComment] = useState([]);

  const [postID, setPostID] = useState([]);

  const onCommentChange = (e, id) => {
    setPostID(id);

    if (e.target.value.length > 0) {
      document.addEventListener("click", (e) => {
        if (
          e.target.className !== "PostComment" &&
          e.target.className !== "SCButton"
        ) {
          console.log(
            "you clicked outside",
            e.target.className,
            "you closed submit button "
          );
          setFormComment([]);
        }
      });
    }
    setFormComment(e.target.value);
  };
  const onLinkClick = (postID) => {
    setPostpage({ id: postID });
  };

  return (
    <div className="Feed">
      <div className="Post-Feed">
        {Posts.map((Post) => (
          <div className="Posts">
            <Link
              key={Post && Post.id}
              onClick={() => {
                onLinkClick(Post.id);
              }}
              style={{ color: "black" }}
              to="/Posts"
            >
              {Post && Post.postPic !== "" ? (
                <img src={Post.postPic} alt="" className="PostPic" />
              ) : (
                ""
              )}
            </Link>
            <div className=" Poster">
              <div className="PosterInfo">
                <img src={Post && Post.PosterPic} alt="" />
                {Post.PosterName}
              </div>
              {Post.text}
            </div>
            <div className="Interactions">
              <div>{Post && Post.date}</div>
              <div onClick={() => LikeUpdate(Post.id, user.id)}>
                {Post.likers.length}{" "}
                <i className="fas fa-heart" style={{ color: "red" }}></i>
              </div>

              <div>
                {" "}
                {Post.comments.length}
                <i className="fas fa-comment" style={{ color: "grey" }}></i>
              </div>
            </div>
            <div className="Create-Post">
              {" "}
              <img src={pic} alt="" />
              <input
                type="textarea"
                name="comment"
                className="PostComment"
                value={postID === Post.id ? formComment : ""}
                onChange={(e) => {
                  onCommentChange(e, Post.id);
                }}
              />
              <div></div>
              {formComment.length > 0 && postID === Post.id ? (
                <div className="SubmitComment">
                  <button
                    className="SCButton"
                    onClick={() => {
                      CommentUpdate(formComment, user, Post.id);
                      setFormComment("");
                    }}
                  >
                    Post
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
