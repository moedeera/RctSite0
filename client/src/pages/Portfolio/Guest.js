import React from "react";
import pic from "../../blank-avatar.png";
import { Edit } from "../../utils/Edit";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar";
import { usePosts } from "../../utils/PostAuth";

export const Guest = ({ Friend, SetFriend }) => {
  const { user, setUser } = useContext(UserContext);
  const { edit, setEdit } = Edit();

  const [formData, setFormData] = useState({
    nickname: user.nickname,
    location: user.location,
    description: user.description,
    age: user.age,
    header: user.header,
    about: user.about,
  });
  const { nickname, location, description, age, header, about } = formData;

  useEffect(() => {
    setUser({
      id: 1,
      name: "Jennifer Smith",
      nickname: "Jenny",
      location: "Toronto, ON",
      description: "Night Owl Queen",
      age: 25,
      scores: [125, 102, 55],
      header: "About this Project",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security.",
      Feed: [
        { name: "Connie Williams", type: "like", id: 2 },
        { name: "Matt Russo", type: "request", id: 3 },
        { name: "James Santos", type: "request", id: 4 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 26,
      login: true,
      Notifications: 2,
      Friends: [2, 3, 4],
      Posts: [6, 5, 1],
    });
    console.log(user);
    return () => {
      console.log("you left Guest Component");
    };
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { posts, likeCount } = usePosts();

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

  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      {user && user.login ? (
        <div className="Layout-Main">
          <div>
            {" "}
            <div className="MainCard">
              <div className="Upper-Half">
                <div className="Profile-Pic Logged-in">
                  <img src={user.profilePic} alt="new" />
                  <div className="PhotoEdit">Change Photo</div>
                </div>

                <div className="AboutMe">
                  <div className="UpperAM">
                    <div className="AMU-Name">
                      <h4>
                        {!edit ? (
                          user.name
                        ) : (
                          <input
                            type="text"
                            value={user.name}
                            onChange={(e) => onChange(e)}
                          />
                        )}
                      </h4>
                      <p id="first">{user.description}</p>
                      <p>{user.location}</p>
                    </div>
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
                          "Save"
                        ) : (
                          <div onClick={() => setEdit(!edit)}>
                            {" "}
                            <i className="fas fa-user-circle"></i>Edit
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
                          Cancel
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="lowerAM">
                    <div className="LeftLowerAM">
                      <h3>{user.header}</h3>
                      <p>{user.about}</p>
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
                        name="textValue"
                        placeholder="Create a Post"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Feed">
                <div className="Post-Feed">
                  {posts.map((Post) => (
                    <div className="Posts">
                      <img src={Post.postPic} alt="" className="PostPic" />
                      <div className=" Poster">
                        {" "}
                        <div className="PosterInfo">
                          <img src={Post.PosterPic} alt="" />
                          {Post.PosterName}
                        </div>
                        {Post.text}
                      </div>
                      <div className="Interactions">
                        <div>{Post.date}</div>
                        <div onClick={() => likeCount(Post.id)}>
                          {Post.likes}{" "}
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
                          name="textValue"
                          placeholder="Comment"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="main-side">
            <div className="promotions">
              {" "}
              <img src={pic2} alt="" className="Meetup" />
              Connect with local social groups in your area
            </div>
            <div className="friends-side">
              <div className="header">
                <i className="fas fa-user-friends fa-2x"></i>Online Friends
              </div>
              <div className="Friends-List">
                <div className="friend">
                  Jenny{" "}
                  <div>
                    {" "}
                    <img src={user.profilePic} alt="" className="images" />
                  </div>
                </div>
              </div>
              <div className="settings">
                <i className="fas fa-cog fa-2x"></i>
              </div>
            </div>
          </div> */}
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submission", formData);
        }}
      >
        <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic Logged-in">
              <img src={user.profilePic} alt="new" />
              <div className="PhotoEdit">Change Photo</div>
            </div>

            <div className="AboutMe">
              <div className="UpperAM">
                <div className="AMU-Name">
                  <h4>
                    {!edit ? (
                      user.nickname
                    ) : (
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => onChange(e)}
                      />
                    )}
                  </h4>
                  <p id="first">{user.description}</p>
                  <p>{user.location}</p>
                </div>
                <div className="AMU-stats">
                  <div>
                    {" "}
                    {user.scores[0]}
                    <i className="fa fa-heart" style={{ color: "crimson" }}></i>
                  </div>
                  <div>
                    {" "}
                    {user.scores[1]}
                    <i className="far fa-user-circle"></i>
                  </div>
                  <div>
                    {" "}
                    {user.scores[2]}
                    <i class="fas fa-star" style={{ color: "goldenrod" }}></i>
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
                        <i className="fas fa-user-circle"></i>Edit
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
                  <h3>{user.header}</h3>
                  <p>{user.about}</p>
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
        </div>
      </form>
    </div>
  );
};
