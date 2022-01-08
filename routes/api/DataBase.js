var DataBase = [
  {
    id: 1,
    name: "Jen Smith",
    age: 25,
    Feed: [
      { name: "Connie Williams", type: "like" },
      { name: "Baker Smith", type: "request" },
      { name: "James Santos", type: "request" },
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
      { name: "Jen Smith", type: "like" },
      { name: "James Johnson", type: "request" },
      { name: "Jen Smith", type: "Challenge" },
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
      { name: "Connie Williams", type: "like" },
      { name: "James Johnson", type: "request" },
      { name: "Jen Smith", type: "Challenge" },
    ],
    profilePic:
      "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 14,
    login: false,

    Friends: [1, 2, 5],
  },
];

var Users = [
  { id: 1, email: "js@g", password: "123" },
  { id: 2, email: "cw@g", password: "123" },
  { id: 3, email: "mr@g", password: "123" },
  { id: 4, email: "js@g", passowrd: "123" },
];

module.exports = { DataBase, Users };
