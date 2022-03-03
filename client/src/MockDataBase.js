import React from "react";

export const MockDataBase = () => {
  var DataBase = [
    {
      id: 1,
      name: "Jennifer Smith",
      nickname: "Jenny",
      location: "Toronto, ON",
      description: "Night Owl Queen",
      age: 25,
      scores: [125, 102, 55],
      header: "Mom to 2 cats and a Dog",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security",
      Feed: [
        { name: "Connie Williams", type: "like", id: 2 },
        { name: "Matt Russo", type: "request", id: 3 },
        { name: "James Santos", type: "request", id: 4 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 26,
      login: true,
      Notifications: 2,
      Friends: [2, 3, 4],
      Posts: [6, 5, 1],
    },
    {
      id: 2,
      name: "Connie Williams",
      nickname: "Connie",
      location: "Saskatoon, SK",
      description: "Master Procrastinator",
      age: 21,
      scores: [85, 42, 35],
      header: "Future Nurse in the making",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security",

      Feed: [
        { name: "Jen Smith", type: "like", id: 1 },
        { name: "James Johnson", type: "request", id: 5 },
        { name: "Jen Smith", type: "Challenge", id: 1 },
      ],
      profilePic:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 23,
      login: true,
      Notifications: 11,
      Friends: [1, 3, 5],
      Posts: [5],
    },
    {
      id: 3,
      name: "Matthew Russo",
      nickname: "Matt",
      location: "Edmonton, AB",
      description: "Slightly pretentious",
      age: 32,
      scores: [15, 19, 25],
      header: "Misunderstood Genius",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security",

      Feed: [
        { name: "Connie Williams", type: "like", id: 2 },
        { name: "James Johnson", type: "request", id: 5 },
        { name: "Jen Smith", type: "Challenge", id: 1 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 14,
      login: false,
      Notifications: 1,
      Friends: [1, 2, 5],
      Posts: [6],
    },
    {
      id: 4,
      name: "James Santos",
      nickname: "James",
      location: "Saskatoon, SK",
      description: "Accountant at BMC",
      age: 25,
      scores: [45, 22, 15],
      header: "I am all about the numbers ",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security",

      Feed: [
        { name: "Jen Smith", type: "like", id: 1 },
        { name: "Connie Williams", type: "request", id: 2 },
        { name: "James Johnson", type: "request", id: 5 },
        { name: "Jen Smith", type: "Challenge", id: 1 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 56,
      login: false,
      Notifications: 0,
      Friends: [1, 4],
      Posts: [1],
    },
    {
      id: 5,
      name: "James Johnson",
      nickname: "Jimmy",
      location: "Regina, SK",
      description: "Foreman at SG-Buildings",
      age: 35,
      scores: [15, 12, 25],
      header: "Lorem Ipsum",
      about:
        "This is a full stack social media website that allows comments, likes, friends, and posts that can all be stored in real time in a MongoDB database. The user is stored in a local session once logged in and JWT technology ensures safe data transfer for security",

      Feed: [
        { name: "Jen Smith", type: "like", id: 1 },
        { name: "Connie Williams", type: "request", id: 2 },
        { name: "James Santos", type: "request", id: 4 },
        { name: "Jen Smith", type: "Challenge", id: 1 },
      ],
      profilePic:
        "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      followerCount: 56,
      login: false,
      Notifications: 3,
      Friends: [1, 2, 3],
      Posts: [1, 6],
    },
    {
      id: 6,
      name: "Mitchell Wisnewski",
      nickname: "Mitch Wiz",
      location: "Lloydminister, SK",
      description: "Lorem Ipsum",
      age: 29,
      scores: [51, 19, 95],
      header: "Just Got Married...",
      about: "Sorry ladies, I am off the market",

      Feed: [
        { name: "Connie Williams", type: "like", id: 2 },
        { name: "James Santos", type: "like", id: 4 },
      ],
      profilePic:
        "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
      followerCount: 6,
      login: false,
      Notifications: 3,
      Friends: [1, 2, 3, 4],
      Posts: [1, 6],
    },
  ];

  return <div>MockDataBase</div>;
};
