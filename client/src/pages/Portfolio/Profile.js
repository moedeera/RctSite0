import React from "react";
import logo from "./profile-pic.jpeg";
import pic0 from "./pic0.jpeg";
import { useEffect } from "react";
import { useState } from "react";
export const Profile = ({ isAuth }) => {

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     MoveSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

const [slide, setSLide] = useState(1)
const MoveSlide = () =>{

if (slide === 1){
  console.log('its at 1')
  setSLide(2)
} else if (slide ===2){
  console.log('its at 2')
  setSLide(3)
} else if (slide ===3){
  console.log('its at 3')
  setSLide(2)
}

}


  console.log(isAuth);
  return (
    <div className="main-prof">
      {isAuth.isLoggedin ? (
        <div className="MainCard">
          <div className="Upper-Half">
            <div className="Profile-Pic Logged-in">
              <img src={logo} alt="" />
              <div className="PhotoEdit">Change Photo</div>
            </div>

            <div className="Info-Section">
              <div className="Name"> {isAuth.name}</div>
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
                <p className="Posts">
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

<div className="Feed">

<div className="GameScores"> 
<div> <img src={logo} alt="" /></div>
<div> <img src={pic0} alt="" /></div>

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
              <div className="Name"> {isAuth.name} Smith</div>
              <div className="Scores">
                {" "}
                <i class="far fa-heart"></i> 56 followers{" "}
              </div>
              <div className="Follow">
                <i class="fas fa-user-circle"></i>Follow
              </div>
            </div>
          </div>
          <div className="Lower-Half">
            <div className="Profile-Feed">
              <div>
                <h3> {isAuth.name}</h3>
                <p>
                  {isAuth.name} is a 35-year-old trainee doctor who enjoys
                  charity work, eating out and theatre. He is currently single.
                  His most recent romance was with a chef called Deborah Marnie
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
