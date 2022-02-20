import { useState } from "react";

import React from "react";

export const useAuth = () => {
  const [friend, setFriend] = useState({
    isLoggedin: true,
    name: "John",
    Idle: true,
  });

  return { friend, setFriend };
};
