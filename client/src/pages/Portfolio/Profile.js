import React from "react";
import logo from "./profile-pic.jpeg";
import pic0 from "./pic0.jpeg";
import pic1 from "./pic1.jpeg";
import { useContext, useEffect } from "react";
import { useState, useCallback } from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Profile = ({ isAuth }) => {
  const { user, setUser } = useContext(UserContext);
  const [slide, setSLide] = useState(1);
  const navigate = useNavigate();
  var Posts = user.Feed;
  const names = [
    { name: "Bruce", type: "like" },
    { name: "Clark", type: "like" },
    { name: "Diana", type: "request" },
  ];
  const MoveSlide = () => {
    if (slide === 1) {
      console.log("its at 1 and now set to 2");
      setSLide(2);
    } else if (slide === 2) {
      console.log("its at 2 and now set to 3 ");
      setSLide(3);
    }
    if (slide === 3) {
      console.log("its at 3 and now set back to 1");
      setSLide(1);
    }
  };

  const FriendsProfile = (friend) => {
    navigate("../Friends");
  };

  console.log(user.Feed);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     MoveSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  console.log(user.login, user.name, user.Feed);
  return (
    <div className="main-prof">
      {user.login ? (
        <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic Logged-in">
              <img src={logo} alt="" />
              <div className="PhotoEdit">Change Photo</div>
            </div>

            <div className="Info-Section">
              <div className="Name"> {user.name}</div>
              <div className="Scores">
                {" "}
                <i class="far fa-heart"></i> 56 followers{" "}
                <div className="Game-Score">
                  {" "}
                  <i class="fas fa-gamepad"></i> 578 Score
                </div>
              </div>
              <div className="Follow">
                <i class="fas fa-user-circle"></i>Account
              </div>
            </div>
          </div>
          <div className="Lower-Half">
            <div className="Profile-Feed ">
              <div>
                <h3> Welcome back {isAuth.name}</h3>
                {/* <p className="Posts">
                  {" "}
                  <i class="fas fa-heart" style={{ color: "crimson" }}></i> Jane
                  Smith liked your Post!{" "}
                </p>
                <p className="Posts">
                  {" "}
                  <i class="far fa-user-circle"></i> Amanda Stevens requested to
                  follow you!{" "}
                </p>
                <p className="Posts">
                  {" "}
                  <i class="far fa-user-circle"></i> Blake Wise requested to
                  follow you!{" "}
                </p>
                <p className="Posts">
                  {" "}
                  <i class="fas fa-gamepad "></i> Jane Smith challenged you to a
                  game of Chess{" "}
                </p> */}
                {Posts.map((person) =>
                  person.type === "like" ? (
                    <Link to="/Friends">
                      {" "}
                      <p style={{ color: "black" }}>
                        {person.name} Liked your post bbb
                      </p>
                    </Link>
                  ) : person.type === "request" ? (
                    <p>{person.name} is following you</p>
                  ) : (
                    person.type === "Challenge" && (
                      <p>{person.name} Challenged you to a game</p>
                    )
                  )
                )}
                {/* {Feed.map((feed) =>
                  feed.type === "like" ? (
                    <p>{feed.name} liked a post</p>
                  ) : feed.type === "request" ? (
                    <p>{feed.name} made request</p>
                  ) : feed.type === "Challenge" ? (
                    <p>{feed.name} challenged you</p>
                  ) : (
                    ""
                  )
                )} */}
              </div>
              {user.login && <p>True</p>}
            </div>

            <div className="Game-Feed">
              <h3>Skills</h3>
              <i class="fas fa-stethoscope fa-2x"></i>
              <i class="fas fa-code fa-2x"></i>
              <i class="fas fa-gamepad fa-2x"></i>
            </div>
          </div>

          <div className="Feed">
            <div className="GameScores">
              <div className="ImageFeed">
                <img src={logo} alt="" />
              </div>
              <div className="ImageFeed">
                <img src={pic0} alt="" />
              </div>
              <div className="ImageFeed">
                <img src={pic1} alt="" />
              </div>
            </div>

            <div className="Friends"> Hello </div>

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
                <i class="far fa-heart"></i> {user.followerCount} followers{" "}
              </div>
              <div className="Follow">
                <i class="fas fa-user-circle"></i>Follow
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
              <i class="fas fa-stethoscope fa-2x"></i>
              <i class="fas fa-code fa-2x"></i>
              <i class="fas fa-gamepad fa-2x"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
