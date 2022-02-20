import Homepage from "./components/Homepage";
import Portfolio from "./pages/Portfolio";
import Table from "./components/Table";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Econnect } from "./pages/Portfolio/Econnect";
import Profile from "./pages/Portfolio/Profile";
import RT from "./components/RT";
import Login from "./pages/Portfolio/Login";

import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { useAuth } from "./utils/AuthLogin";
import { UserContext } from "./UserContext";
import { Friends } from "./pages/Portfolio/Friends";
import { Guest } from "./pages/Portfolio/Guest";

function getUserInfo() {
  var data = sessionStorage.getItem("user-info");
var profile ={
  id: 1,
  name: "Jennifer Smith",
  nickname: "Jenny",
  location: "Toronto, ON",
  description: "Night Owl Queen",
  age: 25,
  scores: [125, 102, 55],
  header: "About this Project",
  about:
    "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security.",
  Feed: [
    { name: "Connie Williams", type: "like", id: 2 },
    { name: "Matt Russo", type: "request", id: 3 },
    { name: "James Santos", type: "request", id: 4 },
  ],
  profilePic:
    "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  followerCount: 26,
  login: true,
  Notifications: 2,
  Friends: [2, 3, 4],
  Posts: [6, 5, 1]}

  if (data!=null) {
    console.log(data);
    return JSON.parse(data);
  } else {return profile;}
}
function App() {
  const { friend, setFriend } = useAuth();

  /// Comments
  /// Shares
  //  Messages
  const [user, setUser] = useState(getUserInfo());
  const [guest, setGuest] = useState({ login: "true" });



  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser, guest, setGuest }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Econnect" element={<Econnect />} />
            <Route path="/Register" element={<Econnect />} />

            <Route path="/Login" element={<Login />} />
            <Route
              path="/Profile"
              element={<Profile Friend={friend} SetFriend={setFriend} />}
            />
            <Route
              path="/Guest"
              element={<Guest Friend={friend} SetFriend={setFriend} />}
            />
            <Route
              path="/Friends"
              element={<Friends isAuth={friend} SetAuth={setFriend} />}
            />

            <Route path="/RT" element={<RT />} />
            <Route path="*" element={<RT />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
