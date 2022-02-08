import Homepage from "./components/Homepage";
import Portfolio from "./pages/Portfolio";
import Table from "./components/Table";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Econnect } from "./pages/Portfolio/Econnect";
import Profile from "./pages/Portfolio/Profile";
import RT from "./components/RT";
import Login from "./pages/Portfolio/Login";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { useAuth } from "./utils/AuthLogin";
import { UserContext } from "./UserContext";
import { Friends } from "./pages/Portfolio/Friends";

function getUserInfo() {
  const data = sessionStorage.getItem("user-info");

  if (data) {
    console.log(data);
    return JSON.parse(data);
  }
  return null;
}
function App() {
  const account = useSelector((state) => state.account);
  const { IsAuth, SetAuth } = useAuth();
  const [user, setUser] = useState(getUserInfo());

  React.useEffect(() => {
    console.log("it changed", user);
    if (user) {
      sessionStorage.setItem("user-info", JSON.stringify(user));
    }
  }, [user]);

  const dispatch = useDispatch();

  console.log(user);

  return (
    <Router>
      <div className="App">
        {/* {IsAuth.Idle ? "" : <Searchbar setAuth={SetAuth} />} */}
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
            <Route path="/Friends" element={<Friends isAuth={IsAuth} />} />

            <Route path="/RT" element={<RT />} />
            <Route path="*" element={<RT />} />
          </Routes>
        </UserContext.Provider>
        {/* <h3>{account.count}</h3>
        <h3>{account.name}</h3>

        <button onClick={() => depositMoney(1000)}>Add</button>
        <button onClick={() => withDrawMoney(1000)}>Subtract</button>
        <button onClick={() => PostData(0)}>Reset</button> */}
      </div>
    </Router>
  );
}

export default App;
