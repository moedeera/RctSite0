import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { set } from "express/lib/application";
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
      const newUser = {
        name,
        email,
        password,
        Feed: [
          { name: "Jen Smith", type: "like" },
          { name: "Connie Smith", type: "request" },
          { name: "James Santos", type: "request" },
          { name: "Jane Smith", type: "Challenge" },
        ],
        followerCount: 2,
        login: true,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          "http://localhost:9700/api/users/register",
          body,
          config
        );
        j = res;
        console.log(res);
        setUser(newUser);
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
            What is EConnect? EConnect is a platform designed to connect 
            people in a more interactive sense. EConnect 
            understands you socialize differently with people based on their
            relationship with you.
            Your social energy is limited and you dont
            socialize with family the same way you socialize with coworkers. As a result, 
            our website adjust your feed accordingly and encourages you to socialize 
            with people in a timely fashion. Challenge your coworkers with games, setup
            events with your friends, and the occasional video call with family to keep tabs.
            EConnect helps you manage your online experience by making sure you never lose 
            sight of the important things in life.
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
