import { useState } from "react";

import React from "react";

export const useAuth = () => {
  const [IsAuth, SetAuth] = useState({
    isLoggedin: false,
    name: "John",
    Idle: true,
  });

  return { IsAuth, SetAuth };
};
