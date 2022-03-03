import { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const isImgLink = (url) => {
    if (typeof url !== "string") {
      return false;
    }
    return (
      url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null
    );
  };

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getPosts = async () => {
    var postIDs = [];

    if (user?.Posts != null) {
      postIDs = user.Posts;
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

      postIDs = Mock.Posts;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(postIDs);
      const res = await axios.post("/api/post", body, config);

      setPosts(res.data);
      console.log("retrieved posts", res.data);
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
  const postComment = async (comment, person, postID) => {
    console.log("postComment initiated", comment, person.nickname, postID);
    var Id = Math.floor(Math.random() * 1000 + 1);
    var CurrentDate = new Date();
    var day = JSON.stringify(days[CurrentDate.getDay()]);
    var month = JSON.stringify(months[CurrentDate.getMonth()]);
    var Year = JSON.stringify(CurrentDate.getUTCFullYear());

    const newDate =
      day.substring(1, 4) +
      " " +
      month.substring(1, 4) +
      " " +
      Year.substring(2, 4);

    var newComment = {
      id: Id,
      author: person.name,
      name: person.nickname,
      picture: person.profilePic,
      date: newDate,
      post: postID,
      text: comment,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newComment);

      const res = await axios.post("/api/post/newcomment", body, config);
      getPosts();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    /// Update the Posts state
  };

  const likeCount = async (id, userID) => {
    var newLikers = [];
    var match;
    for (var j = 0; j < posts.length; j++) {
      if (posts[j].id === id) {
        console.log(posts[j].likers);
        match = posts[j].likers.some((person) => person === userID);

        if (match) {
          newLikers = posts[j].likers.filter((person) => person !== userID);
          console.log(newLikers);
          // eslint-disable-next-line no-loop-func
          // setPosts(posts.map((post) =>post.id === id?{...post,likers:newLikers}:{post}))
        } else {
          newLikers = [...posts[j].likers, userID];
          console.log(newLikers);
        }
      }
    }

    let newPosts = posts.map((post) =>
      post.id === id ? { ...post, likers: newLikers } : post
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

  const CreatePost = async (post) => {
    var PostID = Math.floor(Math.random() * 1000 + 1);
    var CurrentDate = new Date();
    var day = JSON.stringify(days[CurrentDate.getDay()]);
    var month = JSON.stringify(months[CurrentDate.getMonth()]);
    var Year = JSON.stringify(CurrentDate.getUTCFullYear());

    const newDate =
      day.substring(1, 4) +
      " " +
      month.substring(1, 4) +
      " " +
      Year.substring(2, 4);

    const ValidImage = isImgLink(post.PstPicture);

    var Image = "";
    if (ValidImage) {
      const img = post.PstPicture;
      Image = img;
    }
    var date = new Date();
    const newPost = {
      id: PostID,
      Poster: user.id,
      PosterName: user.nickname,
      PosterPic: user.profilePic,
      postPic: Image,
      text: post.PstText,
      date: newDate,
      comments: [],
      likes: 0,
      likers: [user.id],
      datePosted: date,
    };

    console.log("post was created", newPost);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newPost);

      const res = await axios.post("/api/post/newpost", body, config);
      var newPosts = [...posts];
      newPosts.unshift(newPost);
      newPosts.sort(function (a, b) {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });

      console.log(newPosts);

      setPosts(newPosts);
      setUser({ ...user, Posts: [...user.Posts, newPost.id] });
      console.log(newPosts, posts);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    var postComments = [];
    for (var j = 0; j < posts.length; j++) {
      for (var i = 0; i < posts[j].comments.length; i++) {
        postComments.push(posts[j].comments[i]);
      }
    }

    FetchComments(postComments);
  }, [posts]);

  return {
    posts,
    likeCount,
    setPosts,
    comments,
    FetchComments,
    postComment,
    CreatePost,
  };
};
