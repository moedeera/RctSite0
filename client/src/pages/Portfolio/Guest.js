import React from "react";
import pic from "../../blank-avatar.png";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar";
import { usePosts } from "../../utils/PostAuth";

export const Guest = ({ Friend, SetFriend }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({
      id: 1,
      name: "Jennifer Smith",
      nickname: "Jenny",
      age: 25,
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
                      <h4>{user.name}</h4>
                      <p id="first">Night Owl Queen</p>
                      <p>Toronto, ON</p>
                    </div>
                    <div className="AMU-stats">
                      <div>
                        {" "}
                        125
                        <i
                          className="fa fa-heart"
                          style={{ color: "crimson" }}
                        ></i>
                      </div>
                      <div>
                        {" "}
                        102
                        <i className="far fa-user-circle"></i>
                      </div>
                      <div>
                        {" "}
                        55
                        <i
                          class="fas fa-star"
                          style={{ color: "goldenrod" }}
                        ></i>
                      </div>
                    </div>
                    <div className="Follow">
                      <i className="fas fa-user-circle"></i>Edit
                    </div>
                  </div>
                  <div className="lowerAM">
                    <div className="LeftLowerAM">
                      <h3>About this Project</h3>
                      <p>
                        This is a full stack social media website that allows
                        comments, likes, friends, and posts that can all be
                        stored in real time in a MongoDB database This is a full
                        stack social media website that allows comments, likes,
                        friends, and posts that can all be stored in real time
                        in a MongoDB database
                      </p>
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
    </div>
  );
};
