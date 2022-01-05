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
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { PostData, GetData } from "./State/actions-creators";
import { useAuth } from "./utils/AuthLogin";
import { UserContext } from "./UserContext";

function App() {
  const account = useSelector((state) => state.account);
  const { IsAuth, SetAuth } = useAuth();
  const [profile, updateProfile] = useState({
    name: "james",
  });

  const dispatch = useDispatch();

  console.log(account);
  const { depositMoney, withDrawMoney, PostData } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    dispatch(GetData());
  }, []);

  console.log(IsAuth);

  const [user, setUser] = useState({
    msg: "hello world man",
    name: "James Johnson",
    age: 35,
    Feed: [
      { name: "Jen Smith", type: "like" },
      { name: "Connie Smith", type: "request" },
      { name: "James Santos", type: "request" },
      { name: "Jane Smith", type: "Challenge" },
    ],
    followerCount: 56,
    login: false,
  });

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

            <Route path="/Profile" element={<Profile isAuth={IsAuth} />} />
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
