import React from "react";
import Searchbar from "../../components/Searchbar";

export const Friends = ({ isAuth, SetAuth }) => {
  console.log(isAuth);
  if (!isAuth) {
    return null;
  }
  return (
    <div className="main-prof">
      <Searchbar setAuth={SetAuth} />

      <div className="MainCard" style={{backgroundColor:'white',  marginTop:'210px'}} >
        <div className="Upper-Half">
          <div className="Profile-Pic Logged-in">
            <img src={isAuth.profilePic} alt="new" />
          </div>

          <div className="AboutMe">
            <div className="UpperAM">
              <div className="AMU-Name">
                <h4>{isAuth.name}</h4>
                <p id="first">{isAuth.description}</p>
                <p>{isAuth.location}</p>
              </div>
              <div className="AMU-stats">
                <div>
                  {" "}
                  {/* {isAuth.scores[0]} */} 23
                  <i className="fa fa-heart" style={{ color: "crimson" }}></i>
                </div>
                <div>
                  {" "}
                  {/* {isAuth.scores[1]} */}50
                  <i className="far fa-user-circle"></i>
                </div>
                <div>
                  {" "}
                  {/* {isAuth.scores[2]} */}44
                  <i class="fas fa-star" style={{ color: "goldenrod" }}></i>
                </div>
              </div>
              <div className="Follow">
                <i className="fas fa-user-circle"></i>Message
              </div>
            </div>
            <div className="lowerAM">
              <div className="LeftLowerAM">
                <h3>{isAuth.header}</h3>
                <p>{isAuth.about}</p>
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
              <h3> {isAuth.name}'s latest activity</h3>

              {/* {user.Feed.map((person) =>
                  person.type === "like" ? (
                    <Link to="/Friends" onClick={() => FriendsProfile(person.id)}>
                      {" "}
                      <p style={{ color: "black" }}>
                        <i
                          class="fas fa-heart"
                          style={{ color: "crimson" }}
                        ></i>{" "}
                        {person.name} Liked your post
                      </p>
                    </Link>
                  ) : person.type === "request" ? (
                    <Link to="/Friends"  onClick={() => FriendsProfile(person.id)}>
                      <p style={{ color: "black" }}>
                        <i class="far fa-user-circle"></i>
                        {person.name} requested to follow you
                      </p>
                    </Link>
                  ) : (
                    person.type === "Challenge" && (
                      <Link to="/Friends"  onClick={() => FriendsProfile(person.id)}>
                        <p style={{ color: "black" }}>
                          {" "}
                          <i class="fas fa-gamepad "></i>
                          {person.name} Challenged you to a game
                        </p>
                      </Link>
                    )
                  )
                )} */}
            </div>
          </div>
        </div>

        <div className="Feed"></div>
      </div>
    </div>
  );
};
