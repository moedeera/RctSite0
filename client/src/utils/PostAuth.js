import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const getPosts = async (array) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(array);
      const res = await axios.post("/api/post", body, config);
      console.log(res.data);
      setPosts(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const likeCount = async (id) => {
    let newPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: ++post.likes } : post
    );

    console.log(newPosts);
    setPosts(newPosts);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newPosts);
      const res = await axios.post("/api/post/update", body, config);
      console.log(res.data);
      // setPosts(res.data);
    } catch (error) {
      console.log(error);
    }

    getPosts(user.Posts);
  };

  useEffect(() => {
    getPosts(user.Posts);
  }, []);

  return { posts, likeCount };
};
