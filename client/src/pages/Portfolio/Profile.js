import React from "react";
import pic from "../../blank-avatar.png";
import { Edit } from "../../utils/Edit";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar";
import { usePosts } from "../../utils/PostAuth";

export const Profile = ({ Friend, SetFriend }) => {
  const { user, setUser, setPostpage } = useContext(UserContext);
  const { edit, setEdit } = Edit();
  const { posts, likeCount, postComment, CreatePost } = usePosts();
  const onLinkClick = (postID) => {
    setPostpage({ id: postID });
  };
  const [formData, setFormData] = useState({
    name: user.name,
    nickname: user.nickname,
    location: user.location,
    description: user.description,
    age: 25,
    header: user.header,
    about: user.about,
  });
  const { nickname, location, description, header, about } = formData;
  const [formComment, setFormComment] = useState([]);
  const [formPost, setFormPost] = useState([]);
  const [postID, setPostID] = useState([]);
  const [postText, setPostText] = useState({
    PstText: "",
    picture: "",
  });

  const { PstText, PstPicture } = postText;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const FriendsProfile = async (id) => {
    console.log("hey", id);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const string = `/api/users/profiles/${id}`;
      console.log(string, id);
      const res = await axios.get(string);
      console.log(res.data);
      SetFriend(res.data);
    } catch (error) {
      console.log(error);
    }

    // navigate("../Friends");
  };
  // Comment Submission
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
  // Post Submission
  const onPostSubmission = (e) => {
    e.preventDefault();
    CreatePost(postText);
    setPostText({ ...postText, PstText: "", PstPicture: "" });
  };
  const onSubmission = (e) => {
    e.preventDefault();

    // setUser({...user,[e.target.name]:e.target.value})
    setUser({
      ...user,
      nickname: formData.nickname,
      location: formData.location,
      header: formData.header,
      description: formData.description,
      about: formData.about,
    });
    setEdit(!edit);
  };
  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      {user && user.login ? (
        <div className="Layout-Main">
          <div>
            {" "}
            <form onSubmit={(e) => onSubmission(e)}>
              <div className="MainCard">
                <div className="Upper-Half">
                  <div className="Profile-Pic Logged-in">
                    <img src={user.profilePic} alt="new" />
                    <div className="PhotoEdit">Change Photo</div>
                  </div>

                  <div className="AboutMe">
                    <div className="UpperAM">
                      {!edit ? (
                        <div className="AMU-Name">
                          <h4>{user.nickname}</h4>
                          <p id="first">{user.description}</p>
                          <p>{user.location}</p>
                        </div>
                      ) : (
                        <div className="AMU-NameEdit">
                          <input
                            type="text"
                            name="nickname"
                            value={nickname}
                            onChange={(e) => onChange(e)}
                            style={{ fontSize: "16px", width: "50%" }}
                          />
                          <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                            style={{ marginTop: "-15px", width: "40%" }}
                          />
                          <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => onChange(e)}
                            style={{ marginTop: "-10px", width: "40%" }}
                          />
                        </div>
                      )}

                      <div className="AMU-stats">
                        <div>
                          {" "}
                          {user.scores[0]}
                          <i
                            className="fa fa-heart"
                            style={{ color: "crimson" }}
                          ></i>
                        </div>
                        <div>
                          {" "}
                          {user.scores[1]}
                          <i className="far fa-user-circle"></i>
                        </div>
                        <div>
                          {" "}
                          {user.scores[2]}
                          <i
                            class="fas fa-star"
                            style={{ color: "goldenrod" }}
                          ></i>
                        </div>
                      </div>
                      <div className="EditBtn">
                        <div className="Follow">
                          {" "}
                          {edit ? (
                            <button type="submit">Save</button>
                          ) : (
                            <div onClick={() => setEdit(!edit)}>
                              {" "}
                              <i className="fas fa-user-circle EditButton"></i>
                              Edit
                            </div>
                          )}{" "}
                        </div>
                        {edit ? (
                          <div
                            onClick={() => setEdit(!edit)}
                            className="Follow"
                            style={{ backgroundColor: "red" }}
                          >
                            {" "}
                            <button>Cancel</button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="lowerAM">
                      <div className="LeftLowerAM">
                        {!edit ? (
                          <>
                            <h3>{user.header}</h3>
                            <p>{user.about}</p>
                          </>
                        ) : (
                          <>
                            <h3>
                              <input
                                className="AMU-NameEdit"
                                style={{
                                  fontSize: "18.72px",
                                  width: "50%",
                                  fontWeight: "bold",
                                }}
                                type="text"
                                name="header"
                                value={header}
                                onChange={(e) => onChange(e)}
                              />
                            </h3>
                            <p>
                              <textarea
                                type="text"
                                name="about"
                                value={about}
                                rows="10"
                                cols="50"
                                // style={{ height:'150px',width:'400px' }}
                                onChange={(e) => onChange(e)}
                              />
                            </p>
                          </>
                        )}
                      </div>
                      <div className="RightLowerAM">
                        <div className="Game-Feed">
                          <h3>Skills</h3>
                          <i className="fas fa-stethoscope fa-2x"></i>
                          <i className="fas fa-code fa-2x"></i>
                          <i className="fas fa-gamepad fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Lower-Half">
                  <div className="Profile-Feed ">
                    <div>
                      <h3> Welcome back {user.nickname}</h3>

                      {user.Feed.map((person) =>
                        person.type === "like" ? (
                          <Link
                            key={person.id}
                            to="/Friends"
                            onClick={() => FriendsProfile(person.id)}
                          >
                            {" "}
                            <p style={{ color: "black" }}>
                              <i
                                className="fas fa-heart"
                                style={{ color: "crimson" }}
                              ></i>{" "}
                              {person.name} Liked your post
                            </p>
                          </Link>
                        ) : person.type === "request" ? (
                          <Link
                            key={person.id}
                            to="/Friends"
                            onClick={() => FriendsProfile(person.id)}
                          >
                            <p style={{ color: "black" }}>
                              <i className="far fa-user-circle"></i>
                              {person.name} requested to follow you
                            </p>
                          </Link>
                        ) : (
                          person.type === "Challenge" && (
                            <Link
                              key={person.id}
                              to="/Friends"
                              onClick={() => FriendsProfile(person.id)}
                            >
                              <p style={{ color: "black" }}>
                                {" "}
                                <i className="fas fa-gamepad "></i>
                                {person.name} Challenged you to a game
                              </p>
                            </Link>
                          )
                        )
                      )}
                      <div className="Create-Post">
                        {" "}
                        <img src={pic} alt="" />
                        <input
                          type="textarea"
                          name="comment"
                          className="PostComment"
                          value={postText.PstText}
                          onChange={(e) => {
                            setPostText({
                              ...postText,
                              PstText: e.target.value,
                            });
                          }}
                        />
                        <div></div>
                        {PstText !== "" ? (
                          <>
                            {" "}
                            <div className="SubmitComment">
                              <button
                                className="SCButton"
                                onClick={(e) => {
                                  onPostSubmission(e);
                                }}
                              >
                                Post
                              </button>
                            </div>
                            <div> </div>
                            <input
                              type="text"
                              name="url"
                              className="PostComment"
                              value={PstPicture}
                              placeholder="Enter Image Url"
                              onChange={(e) => {
                                setPostText({
                                  ...postText,
                                  PstPicture: e.target.value,
                                });
                              }}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Feed">
                  <div className="Post-Feed">
                    {posts.map((Post) => (
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
                            <img
                              src={Post.postPic}
                              alt=""
                              className="PostPic"
                            />
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
                          <div onClick={() => likeCount(Post.id, user.id)}>
                            {Post.likers.length}{" "}
                            <i
                              className="fas fa-heart"
                              style={{ color: "red" }}
                            ></i>
                          </div>

                          <div>
                            {" "}
                            {Post.comments.length}
                            <i
                              className="fas fa-comment"
                              style={{ color: "grey" }}
                            ></i>
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
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="MainCard">
          <div>
            {" "}
            You are not logged in click{" "}
            <Link to="/Login" style={{ color: "green" }}>
              here to login
            </Link>{" "}
          </div>
          <div>Or</div>
          <div>
            {" "}
            click{" "}
            <Link to="/Register" style={{ color: "green" }}>
              here to Register
            </Link>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
