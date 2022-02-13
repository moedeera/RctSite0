import { useState } from "react";

import React from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  return { posts, setPosts };
};
