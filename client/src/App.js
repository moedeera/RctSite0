import Homepage from "./components/Homepage";
import Portfolio from "./pages/Portfolio";
import Table from "./components/Table";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Econnect } from "./pages/Portfolio/Econnect";
import Profile from "./pages/Portfolio/Profile";
import RT from "./components/RT";
import Login from "./pages/Portfolio/Login";
import { SportsTable } from "./pages/Portfolio/SportsTable";
import { Notifications } from "./pages/Portfolio/Notifications";
import { Connections } from "./pages/Portfolio/FriendsPage";
import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { useAuth } from "./utils/AuthLogin";
import { UserContext } from "./UserContext";
import { Friends } from "./pages/Portfolio/Friends";
import { Guest } from "./pages/Portfolio/Guest";
import { Posts } from "./pages/Portfolio/Posts";
function getUserInfo() {
  var data = sessionStorage.getItem("user-info");
  if (data) {
    var User = JSON.parse(data);
    return User;
  } else {
    var profile = {
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
      Notices: [
        {
          id: 50,
          type: "message",
          user: 2,
          from: "Connie",
          date: new Date("2022-03-01"),
          Date: "March 1 22",
          picture:
            "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          text: "Hey do you wanna go skiing tomorrow?",
          pending: true,
        },
        {
          id: 20,
          type: "message",
          user: 6,
          from: "Mitch Wiz",
          date: new Date("2022-02-25"),
          Date: "March 3 22",
          text: "Thanks for the gift yo sent!",
          picture:
            "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",

          pending: true,
        },
      ],
      Friends: [2, 3, 4],
      followers: [5, 6],
      following: [7],
      Posts: [6, 5, 1],
    };
    User = JSON.stringify(profile);
    sessionStorage.setItem("user-info", User);

    return profile;
  }
}
function App() {
  const { friend, setFriend } = useAuth();

  /// Comments
  /// Shares
  //  Messages
  const [user, setUser] = useState(getUserInfo());
  const [guest, setGuest] = useState({ login: "true" });
  const [postPage, setPostpage] = useState();

  useEffect(() => {
    const data = JSON.stringify(user);
    sessionStorage.setItem("user-info", data);
  }, [user]);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider
          value={{ user, setUser, guest, setGuest, postPage, setPostpage }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Econnect" element={<Econnect />} />

            <Route path="/SportsTable" element={<SportsTable />} />

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
            <Route
              path="/Posts"
              element={<Posts Friend={friend} SetFriend={setFriend} />}
            />
            <Route
              path="/Notifications"
              element={<Notifications Friend={friend} SetFriend={setFriend} />}
            />
            <Route
              path="/Connections"
              element={<Connections setFriend={setFriend} />}
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
