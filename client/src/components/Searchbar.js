import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = ({ setAuth }) => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const LoadUsers = async () => {
      const response = await axios.get("http://localhost:9700/api/users");
      setUsers(response.data);
      console.log(response.data);
    };
    LoadUsers();
  }, []);
  const onChangeText = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex);
      });
    }
    console.log(matches);
    setSuggestions(matches);
    setText(text);
  };

  const FriendsProfile = async (id) => {
    console.log("hey");

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const string = `http://localhost:9700/api/users/profiles/${id}`;
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
    <div className="Search">
      <div className="searchBar">
        <i class="fas fa-search" style={{ color: "grey" }}></i>

        <div>
          {" "}
          <input
            type="text"
            placeholder="Search for people"
            name="text"
            onChange={(e) => onChangeText(e.target.value)}
          />
          {suggestions
            ? suggestions.map((result, i) => (
                <Link to="/Friends" onClick={() => FriendsProfile(result.id)}>
                  <div className="options" key={i}>
                    <div> {result.name}</div>
                    <div>
                      {" "}
                      <img src={result.profilePic} alt="" className="images" />
                    </div>
                  </div>
                </Link>
              ))
            : ""}
        </div>
      </div>
      <div className="friends">
        Friends
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="filter">
        <i class="fas fa-sliders-h"></i>
      </div>
    </div>
  );
};

export default Searchbar;
