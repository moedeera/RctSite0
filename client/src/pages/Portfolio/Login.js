import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    var Data;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(formData);
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
      Data = res.data;
      // if (res.data){}
    } catch (err) {
      console.error(err);
    }
    if (Data === "Incorrect Password") {
      console.log("password issue");
    } else if (Data === "No User with that Email") {
      console.log("user issue");
    } else {
      setUser(Data);
      navigate("../profile");
    }
  };

  return (
    <div className="Container">
      {/* <h2 onClick={() => testAuthLog()}>Set to True</h2> */}

      <div className="Showcase Quiz">
        <div className="SideCase upper">
          <i
            class="fab fa-algolia fa-8x"
            style={{ transform: " rotate(20deg)" }}
          ></i>{" "}
          <h1 style={{ lineHeight: "1.8em" }}>Are you up for the Challenge?</h1>
          <form className="QuizForm" onSubmit={(e) => onSubmit(e)}>
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

            <button type="submit">Login</button>
          </form>
          <small style={{ color: "black" }}>
            Don't have an account?{" "}
            <a href="/Register" style={{ color: "black" }}>
              Register
            </a>{" "}
          </small>
        </div>

        <div className="SideCase lower">
          <div className="SideImage lower">
            {" "}
            <i
              class="fas fa-users fa-8x"
              style={{ transform: " rotate(20deg)" }}
            ></i>{" "}
            <h1>EConnect</h1>{" "}
            <div className="SideText">
              What is EConnect? EConnect is a platform designed to connect
              people in a more interactive sense. EConnect understands you
              socialize differently with people based on their relationship with
              you. Your social energy is limited and you dont socialize with
              family the same way you socialize with coworkers. As a result, our
              website adjust your feed accordingly and encourages you to
              socialize with people in a timely fashion. Challenge your
              coworkers with games, setup events with your friends, and the
              occasional video call with family to keep tabs. EConnect helps you
              manage your online experience by making sure you never lose sight
              of the important things in life.
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
    </div>
  );
};

export default Login;
