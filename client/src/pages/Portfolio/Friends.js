import React from "react";

export const Friends = ({ isAuth }) => {
  return (
    <div className="main-prof" >


      <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic Logged-in">
              <img src={isAuth.profilePic} alt="new" />
              
            </div>

            <div className="Info-Section">
              <div className="Name"> {isAuth.name}</div>
              <div className="Scores">
                {" "}
                <i class="far fa-heart"></i>{" "}
                <div>{isAuth.followerCount} followers</div>{" "}
                <i class="fas fa-gamepad"></i> 178 Score
              </div>
              <div className="Follow" style={{ backgroundColor: "green" }}>
                <i class="fas fa-user-circle"></i>Message
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

            <div className="Game-Feed">
              <h3>Skills</h3>
              <i class="fas fa-glass-cheers fa-2x"></i>
              <i class="fas fa-running fa-2x"></i>
              <i class="fas fa-motorcycle fa-2x"></i>
              <i class="fas fa-gamepad fa-2x"></i>
            </div>
          </div>

          <div className="Feed">
        
          </div>
        </div>



    </div>
  );
};
