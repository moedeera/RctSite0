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
import Searchbar from "./components/Searchbar";

function getUserInfo() {
  const data = sessionStorage.getItem("user-info");

  if (data) {
    console.log(data);
    return JSON.parse(data);
  }
}
function App() {
  //   const data = sessionStorage.getItem("user-info");
  const { IsAuth, SetAuth } = useAuth();
  const [user, setUser] = useState(getUserInfo());

  useEffect(() => {
    console.log("it changed", user);
    if (user) {
      sessionStorage.setItem("user-info", JSON.stringify(user));
    }
  }, [user]);

  console.log(user);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Econnect" element={<Econnect />} />
            <Route path="/Register" element={<Econnect />} />

            <Route path="/Login" element={<Login setAuth={SetAuth} />} />
            <Route
              path="/Profile"
              element={<Profile isAuth={IsAuth} setAuth={SetAuth} />}
            />
            <Route
              path="/Friends"
              element={<Friends isAuth={IsAuth} SetAuth={SetAuth} />}
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
