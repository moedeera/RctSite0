import React from "react";
import logo from "./profile-pic.jpeg";
import pic0 from "./pic0.jpeg";
import pic1 from "./pic1.jpeg";
import pic from "../../blank-avatar.png";
import { useContext, useEffect } from "react";
import { useState, useCallback } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Searchbar from "../../components/Searchbar";

export const Profile = ({ isAuth, setAuth }) => {
  const { user, setUser } = useContext(UserContext);
  const [slide, setSLide] = useState(1);
  const navigate = useNavigate();

  console.log(user.profilePic);
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
      setAuth(res.data);
    } catch (error) {
      console.log(error);
    }

    // navigate("../Friends");
  };

  console.log(user);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     MoveSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="main-prof">
      <Searchbar setAuth={setAuth} />
      {user.login ? (
        <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic Logged-in">
              <img src={user.profilePic} alt="new" />
              <div className="PhotoEdit">Change Photo</div>
            </div>

            <div className="Info-Section">
              <div className="Name"> {user.name}</div>
              <div className="Scores">
                {" "}
                <i className="far fa-heart"></i>{" "}
                <div>{user.followerCount} followers</div>{" "}
                <i className="fas fa-gamepad"></i> 578 Score
              </div>
              <div className="Follow">
                <i className="fas fa-user-circle"></i>Account
              </div>
            </div>
          </div>
          <div className="Lower-Half">
            <div className="Profile-Feed ">
              <div>
                <h3> Welcome back {user.name}</h3>

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

            <div className="Game-Feed">
              <h3>Skills</h3>
              <i className="fas fa-stethoscope fa-2x"></i>
              <i className="fas fa-code fa-2x"></i>
              <i className="fas fa-gamepad fa-2x"></i>
            </div>
          </div>

          <div className="Feed">
            <div className="Post-Feed">
              <div>
                <img src={logo} alt="" />
                <p>James was just enjoying the view</p>
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
              <div className="Posts">
                <img src={pic0} alt="" />
                <p>Piece and Quite</p>
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
              <div>
                <img src={pic1} alt="" />
              </div>
            </div>

            <div className="Interests">Hello </div>
          </div>
        </div>
      ) : (
        <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic">
              <img src={logo} alt="" />
            </div>
            <div className="Info-Section">
              <div className="Name"> {user.name}</div>
              <div className="Scores">
                {" "}
                <i className="far fa-heart"></i> {user.followerCount} followers{" "}
              </div>
              <div className="Follow">
                <i className="fas fa-user-circle"></i>Follow
              </div>
            </div>
          </div>
          <div className="Lower-Half">
            <div className="Profile-Feed">
              <div>
                <h3> {user.name}</h3>
                <p>
                  {user.name} is a 35-year-old trainee doctor who enjoys charity
                  work, eating out and theatre. He is currently single. His most
                  recent romance was with a chef called Deborah Marnie
                  Macdonald, who was 16 years older than him. They broke up
                  because Deborah wanted somebody less dastardly.
                </p>
              </div>
            </div>

            <div className="Game-Feed">
              <h3>Skills</h3>
              <i className="fas fa-stethoscope fa-2x"></i>
              <i className="fas fa-code fa-2x"></i>
              <i className="fas fa-gamepad fa-2x"></i>
            </div>
          </div>
        </div>
      )}
      <div className="Layout-Main">
        <div>
          {" "}
          <div className="MainCard">
            <div className="Upper-Half">
              <div className="Profile-Pic Logged-in">
                <img src={user.profilePic} alt="new" />
                <div className="PhotoEdit">Change Photo</div>
              </div>

              <div className="Info-Section">
                <div className="Name"> {user.name}</div>
                <div className="Scores">
                  {" "}
                  <i className="far fa-heart"></i>{" "}
                  <div>{user.followerCount} followers</div>{" "}
                  <i className="fas fa-gamepad"></i> 578 Score
                </div>
                <div className="Follow">
                  <i className="fas fa-user-circle"></i>Account
                </div>
              </div>
            </div>
            <div className="Lower-Half">
              <div className="Profile-Feed ">
                <div>
                  <h3> Welcome back {user.name}</h3>

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

              <div className="Game-Feed">
                <h3>Skills</h3>
                <i className="fas fa-stethoscope fa-2x"></i>
                <i className="fas fa-code fa-2x"></i>
                <i className="fas fa-gamepad fa-2x"></i>
              </div>
            </div>

            <div className="Feed">
              <div className="Post-Feed">
                <div>
                  <img src={logo} alt="" />
                  <p>James was just enjoying the view</p>
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
                <div className="Posts">
                  <img src={pic0} alt="" />
                  <p>Piece and Quite</p>
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
                <div>
                  <img src={pic1} alt="" />
                </div>
              </div>

              <div className="Interests">Hello </div>
            </div>
          </div>
        </div>
        <div className="main-side">
          <div className="promotions">
            {" "}
            <img src={pic0} alt="" />
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
        </div>
      </div>
    </div>
  );
};
export default Profile;
