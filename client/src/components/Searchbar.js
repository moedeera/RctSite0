import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Searchbar = ({ setAuth }) => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const UserReset = () => {
    setUser({ ...user, login: false });
  };
  useEffect(() => {
    const LoadUsers = async () => {
      const response = await axios.get("/api/users");
      setUsers(response.data);
      console.log(response.data);
    };
    LoadUsers();
  }, []);
  const onChangeText = (text) => {
    let matches = [];
    if (text.length > 0) {
      document.addEventListener("click", (e) => {
        if (e.target.className !== "Searchbar") {
          Reset();
        }
      });

      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex);
      });
    }

    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };
  const Reset = () => {
    setSuggestions("");
    setText("");
  };
  const FriendsProfile = async (id) => {
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
  return (
    <div>
      {user?.login && (
        <div className="upper-sect">
          <div>
            <i className="fas fa-home fa-2x"></i>
          </div>
          <div>
            <i className="fas fa-users fa-2x"></i>
          </div>
          <div className="notifications">
            <div className="internal">
              <i className="fas fa-bell fa-2x"></i>
              <div className="number">
                {user && user.Notifications !== 0 ? user.Notifications : ""}
              </div>
            </div>
          </div>

          <div>
            <div onClick={() => UserReset()}>
              <i className="fas fa-times-circle fa-2x"></i>
            </div>
          </div>
        </div>
      )}

      <div className="Search">
        <div className="searchBar">
          <i className="fas fa-search" style={{ color: "grey" }}></i>

          <div>
            {" "}
            <input
              type="text"
              placeholder="Search for people"
              name="text"
              value={text}
              onChange={(e) => onChangeText(e.target.value)}
            />
            {suggestions
              ? suggestions.map((result, i) => (
                  <Link to="/Friends" onClick={() => FriendsProfile(result.id)}>
                    <div className="options" key={i}>
                      <div> {result.name}</div>
                      <div>
                        {" "}
                        <img
                          src={result.profilePic}
                          alt=""
                          className="images"
                        />
                      </div>
                    </div>
                  </Link>
                ))
              : ""}
          </div>
        </div>
        <div className="friends">
          Friends
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="filter">
          <i className="fas fa-sliders-h"></i>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
