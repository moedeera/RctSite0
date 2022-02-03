import React from "react";
import Searchbar from "../../components/Searchbar";
import { useAuth } from "../../utils/AuthLogin";

export const Friends = ({ isAuth }) => {
  const { IsAuth, SetAuth } = useAuth();
  if (!IsAuth) {
    return null;
  }
  return (
    <div className="main-prof">
      <Searchbar setAuth={SetAuth} />

      <div className="MainCard">
        <div className="Upper-Half">
          <div className="Profile-Pic Logged-in">
            <img src={IsAuth.profilePic} alt="new" />
          </div>

          <div className="Info-Section">
            <div className="Name"> {IsAuth.name}</div>
            <div className="Scores">
              {" "}
              <i className="far fa-heart"></i>{" "}
              <div>{IsAuth.followerCount} followers</div>{" "}
              <i className="fas fa-gamepad"></i> 178 Score
            </div>
            <div className="Follow" style={{ backgroundColor: "green" }}>
              <i className="fas fa-user-circle"></i>Message
            </div>
          </div>
        </div>
        <div className="Lower-Half">
          <div className="Profile-Feed ">
            <div>
              <h3> {IsAuth.name}'s latest activity</h3>

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

          <div className="Game-Feed">
            <h3>Skills</h3>
            <i className="fas fa-glass-cheers fa-2x"></i>
            <i className="fas fa-running fa-2x"></i>
            <i className="fas fa-motorcycle fa-2x"></i>
            <i className="fas fa-gamepad fa-2x"></i>
          </div>
        </div>

        <div className="Feed"></div>
      </div>
    </div>
  );
};
