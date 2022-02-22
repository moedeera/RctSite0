import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]) 
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

      setPosts(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const FetchComments = async (array) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(array);
      const res = await axios.post("/api/post/comments", body, config);

      setComments(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };



  const likeCount = async (id) => {
    let newPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: ++post.likes } : post
    );

    setPosts(newPosts);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newPosts);
      const res = await axios.post("/api/post/update", body, config);

      // setPosts(res.data);
    } catch (error) {
      console.log(error);
    }

    getPosts(user.Posts);
  };

  useEffect(() => {
    if (user?.Posts != null) {
      getPosts(user.Posts);
      
      
    } else {
      var Mock = {
        id: 1,
        name: "Jennifer Smith",
        nickname: "Jenny",
        location: "Toronto, ON",
        description: "Night Owl Queen",
        age: 25,
        scores: [125, 102, 55],
        header: "Mom to 2 cats and a Dog",
        about:
          "Photography aficionado, GamerGirl, Outdoorsy-gal, solo-traveler. Vlogger...pretty much your average millennial",

        Feed: [
          { name: "Connie Williams", type: "like", id: 2 },
          { name: "Matt Russo", type: "request", id: 3 },
          { name: "James Santos", type: "request", id: 4 },
        ],
        profilePic:
          "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        followerCount: 26,
        login: false,
        Notifications: 2,
        Friends: [2, 3, 4],
        Posts: [6, 5, 1],
      };

      getPosts(Mock.Posts);
    }
  }, []);

useEffect(() => {
console.log(posts)
var postComments = []
for(var j=0; j<posts.length; j++){
  for (var i=0; i<posts[j].comments.length; i++){
     postComments.push(posts[j].comments[i])
  }}
 console.log(postComments)

 FetchComments(postComments)

},[posts])



  return { posts, likeCount, setPosts, comments, FetchComments };
};
