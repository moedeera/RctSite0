import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../UserContext";

export const Econnect = () => {
  var j = "";
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match");
    } else {
      const key = Math.floor(Math.random() * 1000 + 1);
      const newProfile = {
        id: key,
        name: name,
        nickname: name,
        age: 25,
        Feed: [
          { name: "Matt Russo", type: "request", id: 3 },
          { name: "James Santos", type: "request", id: 4 },
        ],
        profilePic:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        followerCount: 0,
        login: true,
        Notifications: 0,
        Friends: [],
      };
      const newUser = {
        id: key,
        email: email,
        password: password,
      };

      const Info = {
        User: newUser,
        Profile: newProfile,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(Info);
        const res = await axios.post(
          "http://localhost:9700/api/users/register",
          body,
          config
        );
        j = res;
        console.log(res);
        setUser(newProfile);
      } catch (err) {
        console.error(err);
      }
    }

    navigate("../profile");
  };

  return (
    <div className="Container">
      <div className="Showcase Quiz">
        <div className="SideCase upper">
          <div className="mobileImage">
            {" "}
            <i
              class="fab fa-algolia fa-8x"
              style={{ transform: " rotate(20deg)" }}
            ></i>{" "}
          </div>

          <h1 style={{ lineHeight: "1.8em" }}>Connect and Share</h1>
          <h2>Register today {j}</h2>
          <small>Site is currently undergoing changes</small>
          <form className="QuizForm" onSubmit={(e) => onSubmit(e)}>
            <label></label>
            <input
              type="name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />

            <label>password</label>
            <input
              type="password"
              placeholder="Enter a password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />

            <label>Re-enter password</label>
            <input
              type="password"
              placeholder="Enter a password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />

            <button type="submit"> Register</button>
            <small style={{ color: "black" }}>
              Have an account already?{" "}
              <a href="/Login" style={{ color: "black" }}>
                Login
              </a>{" "}
            </small>
          </form>
        </div>

        <div className="SideCase lower">
          <div className="SideImage">
            {" "}
            <i
              class="fab fa-algolia fa-8x"
              style={{ transform: " rotate(20deg)" }}
            ></i>{" "}
            <h1>EConnect</h1>{" "}
          </div>
          <div className="SideText">
            EConnect is a platform designed to connect people in a more
            interactive sense. Your social energy is limited and you dont
            socialize with family the same way you socialize with coworkers. As
            a result, our website adjusts your feed accordingly and encourages
            you to socialize with people in a timely fashion. Challenge your
            coworkers with games, setup events with your friends, and the
            occasional video call with family to keep tabs. EConnect helps you
            manage your online experience by making sure you never lose sight of
            the important things in life.
            <div className="social-media">
              <i class="fab fa-facebook-f fa-2x"></i>
              <i class="fab fa-google-plus-g fa-2x"></i>
              <i class="fab fa-twitter fa-2x"></i>
              <i class="fab fa-behance fa-2x"></i>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Econnect;
