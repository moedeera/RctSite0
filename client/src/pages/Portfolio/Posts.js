import React from "react";
import Searchbar from "../../components/Searchbar";
import { usePosts } from "../../utils/PostAuth";
import pic from "../../blank-avatar.png";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export const Posts = ({ Friend, SetFriend }) => {
  const { posts, likeCount, comments, postComment } = usePosts();
  const [formComment, setFormComment] = useState([]);
  const [postID, setPostID] = useState([]);
  const { user } = useContext(UserContext);

  const { postPage } = useContext(UserContext);

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

  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      <div className="MainCard">
        <div className="Post-Feed">
          {posts.map((Post) =>
            Post.id === postPage.id ? (
              <div className="Posts" id={Post.id}>
                {Post.postPic !== "" ? (
                  <div className="InterPic">
                    {" "}
                    <div className="ImageIP">
                      <img src={Post.postPic} alt="" className="PostPic" />
                    </div>
                    <div className="InteractionsIP">
                      <div>{Post.date}</div>
                      <div onClick={() => likeCount(Post.id)}>
                        {Post.likers.length}{" "}
                        <i
                          className="fas fa-heart fa-3x"
                          style={{ color: "red" }}
                        ></i>
                      </div>
                      <div>
                        {" "}
                        {Post.comments.length}
                        <i
                          className="fas fa-comment fa-3x"
                          style={{ color: "goldenrod" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className=" Poster">
                  {" "}
                  <div className="PosterInfo">
                    <img src={Post.PosterPic} alt="" />
                    {Post.PosterName}
                  </div>
                  {Post.text}
                </div>

                <div style={{ fontWeight: "bold" }}>Comments</div>
                {comments.map((comment) =>
                  comment.post === Post.id ? (
                    <>
                      <div className=" Poster">
                        {" "}
                        <div className="PosterInfo">
                          <img src={comment.picture} alt="" />
                          {comment.name}
                        </div>
                        {comment.text}
                      </div>
                    </>
                  ) : (
                    ""
                  )
                )}

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
                          postComment(formComment, user, Post.id);
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
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};
