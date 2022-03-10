import React from "react";
import Searchbar from "../../components/Searchbar";
import pic from "../../blank-avatar.png";
import { useState, useContext, useEffect } from "react";
import { ProfileManagement } from "../../utils/ProfileManagement";
import { SearchProfile } from "./components/SearchProfile";

export const Connections = ({ SetFriend }) => {
  const { profiles, filteredProfiles, Filter } = ProfileManagement();
  const [selected, setSelected] = useState(0);
  const [paramater, setParamater] = useState(0);
  console.log(profiles, filteredProfiles);

  // By default it retrieves friends profiles
  // Upon Search it switches to all
  // Upon Selection of Followers it switches to followers
  // Upon Selection of Following it switches to following

  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      <div className="ConnectMain">
        <div className="UpperConnect">
          <div className="LeftUC">
            <div className="LUCtitle">
              <h3>Users</h3>
            </div>
            <div className="UCSearch">
              <input type="text" placeholder="Search for people" name="text" />
            </div>
          </div>
          <div className="RightUC">
            <div className="UCList">
              <ul>
                <li
                  className={paramater === 0 ? "UCSelected" : ""}
                  onClick={() => {
                    Filter("all");
                    setParamater(0);
                  }}
                >
                  All
                </li>
                <li
                  className={paramater === 1 ? "UCSelected" : ""}
                  onClick={() => {
                    Filter("friends");
                    setParamater(1);
                  }}
                >
                  Friends
                </li>
                <li
                  className={paramater === 2 ? "UCSelected" : ""}
                  onClick={() => {
                    Filter("followers");
                    setParamater(2);
                  }}
                >
                  Followers
                </li>
                <li
                  className={paramater === 3 ? "UCSelected" : ""}
                  onClick={() => {
                    Filter("following");
                    setParamater(1);
                  }}
                >
                  Following
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="LowerConnect">
          {filteredProfiles.map((profile, index) => (
            <SearchProfile
              profile={profile}
              selected={selected === index}
              setSelected={setSelected}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
