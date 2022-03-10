import React from "react";
import { useState, useEffect, useContext, useMemo } from "react";

import { UserContext } from "../UserContext";
import axios from "axios";

export const ProfileManagement = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const { user } = useContext(UserContext);
  console.log(user);

  const Filter = async (filter) => {
    var method;
    if (filter === "friends") {
      method = user.Friends;
    } else if (filter === "following") {
      method = user.following;
    } else if (filter === "followers") {
      method = user.followers;
    } else if (filter === "all") {
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      var all = [...user.Friends, ...user.followers, ...user.following];
      method = all.filter(onlyUnique);
    }
    console.log(filter, method, profiles);
    var matches = [];

    for (var j = 0; j < profiles.length; j++) {
      for (var k = 0; k < method.length; k++) {
        if (profiles[j].id === method[k]) {
          matches.push(profiles[j]);
        }
      }
    }

    setFilteredProfiles(matches);
    console.log(matches, filteredProfiles);
  };

  const RetrieveAll = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/api/profiles", config);
      console.log("retrieved all", res.data);

      setProfiles(res.data);
      Filter("friends");
      setFilteredProfiles(res.data);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    RetrieveAll();
  }, []);

  return {
    profiles,
    filteredProfiles,
    Filter,
  };
};
