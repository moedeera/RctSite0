import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Econnect = () => {
  var j = "";

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
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post(
          "http://localhost:9700/api/users",
          body,
          config
        );
        j = res;
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }

    navigate("profile");
  };

  return (
    <div className="Container">
      <Navbar />

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
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            .
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
