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

  if (data) {
    console.log(data);
    return JSON.parse(data);
  }
}
function App() {
  const { friend, setFriend } = useAuth();

  /// Comments
  /// Shares
  //  Messages
  const [user, setUser] = useState(getUserInfo());
  const [guest, setGuest] = useState({ login: "true" });

  useEffect(() => {
    console.log("it changed", user);
    if (user) {
      sessionStorage.setItem("user-info", JSON.stringify(user));
    }
  }, [user]);

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
