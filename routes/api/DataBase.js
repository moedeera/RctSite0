var DataBase = [
  {
    id: 1,
    name: "Jen Smith",
    age: 25,
    Feed: [
      { name: "Connie Williams", type: "like", id:2 },
      { name: "Matt Russo", type: "request", id:3},
      { name: "James Santos", type: "request", id:4 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 26,
    login: false,

    Friends: [2, 3],
  },
  {
    id: 2,
    name: "Connie Williams",
    age: 21,
    Feed: [
      { name: "Jen Smith", type: "like", id:1 },
      { name: "James Johnson", type: "request", id:5 },
      { name: "Jen Smith", type: "Challenge", id:1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 23,
    login: false,

    Friends: [1, 3, 5],
  },
  {
    id: 3,
    name: "Matt Russo",
    age: 32,
    Feed: [
      { name: "Connie Williams", type: "like", id:2 },
      { name: "James Johnson", type: "request", id:5 },
      { name: "Jen Smith", type: "Challenge", id:1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 14,
    login: false,

    Friends: [1, 2, 5],
  },{
    id: 4,
    name: "James Santos",
    age: 19,
    Feed: [
      { name: "Jen Smith", type: "like", id:1 },
      { name: "Connie Williams", type: "request", id:2 },
      { name: "James Johnson", type: "request", id:5 },
      { name: "Jen Smith", type: "Challenge", id:1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 56,
    login: false,

    Friends: [1, 4],
  },
  {
    id: 5,
    name: "James Johnson",
    age: 35,
    Feed: [
      { name: "Jen Smith", type: "like", id:1 },
      { name: "Connie Williams", type: "request", id:2 },
      { name: "James Santos", type: "request", id:4 },
      { name: "Jen Smith", type: "Challenge", id:1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 56,
    login: false,

    Friends: [1, 2, 3],
  },
];

var Users = [
  { id: 1, email: "js@g", password: "123" },
  { id: 2, email: "cw@g", password: "123" },
  { id: 3, email: "mr@g", password: "123" },
  { id: 4, email: "js@g", passowrd: "123" },
];

module.exports = { DataBase, Users };
