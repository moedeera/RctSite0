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
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { useAuth } from "./utils/AuthLogin";
import { UserContext } from "./UserContext";
import { Friends } from "./pages/Portfolio/Friends";

function App() {
  const account = useSelector((state) => state.account);
  const { IsAuth, SetAuth } = useAuth();
  const [user, setUser] = useState({
    id: 4,
    name: "James Santos",
    age: 19,
    Feed: [
      { name: "Jen Smith", type: "like" },
      { name: "Connie Williams", type: "request" },
      { name: "James Johnson", type: "request" },
      { name: "Jen Smith", type: "Challenge" },
    ],
    profilePic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 56,
    login: false,

    Friends: [1, 4],
  });

  React.useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("user-info", JSON.stringify(user));
  });

  const dispatch = useDispatch();

  console.log(account);

  console.log(IsAuth);

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
            <Route path="/RT" element={<RT />} />
            <Route path="*" element={<RT />} />
            <Route path="/Friends" element={<Friends isAuth={IsAuth} />} />
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
