var DataBase = [
  {
    id: 1,
    name: "Jennifer Smith",
    nickname: "Jenny",
    age: 25,
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
  },
  {
    id: 2,
    name: "Connie Williams",
    nickname: "Connie",
    age: 21,
    Feed: [
      { name: "Jen Smith", type: "like", id: 1 },
      { name: "James Johnson", type: "request", id: 5 },
      { name: "Jen Smith", type: "Challenge", id: 1 },
    ],
    profilePic:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    followerCount: 23,
    login: false,
    Notifications: 11,
    Friends: [1, 3, 5],
    Posts: [5],
  },
  {
    id: 3,
    name: "Matthew Russo",
    nickname: "Matt",
    age: 32,
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
    age: 19,
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
    age: 35,
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
    age: 22,
    Feed: [
      { name: "Connie Williams", type: "like", id: 2 },
      { name: "James Santos", type: "like", id: 4 },
    ],
    profilePic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    followerCount: 6,
    login: false,
    Notifications: 3,
    Friends: [2, 4],
    Posts: [1, 6],
  },
];

var Users = [
  { id: 1, email: "js@g", password: "123" },
  { id: 2, email: "cw@g", password: "123" },
  { id: 3, email: "mr@g", password: "123" },
  { id: 4, email: "jsantos@g", password: "123" },
  { id: 5, email: "jjohnson@g", password: "123" },
  { id: 6, email: "mwiz@g", password: "123" },
];

var Posts = [
  {
    id: 1,
    Poster: 4,
    PosterName: "Jamie",
    PosterPic:
      "https://images.pexels.com/photos/1693085/pexels-photo-1693085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    postPic:
      "https://images.pexels.com/photos/1842182/pexels-photo-1842182.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    text: "Teddy was just enjoying the sun",
    date: "March 6",
    comments: [7],
    likes: 16,
  },
  {
    id: 5,
    Poster: 3,
    PosterName: "Matt",
    PosterPic:
      "https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

    postPic:
      "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    text: "Enjoying some quite time at the cabin",
    comments: [10, 11, 13, 19, 22, 33],
    date: "March 6",
    likes: 52,
  },
  {
    id: 6,
    Poster: 6,
    PosterName: "Mitch Wiz",
    PosterPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    postPic:
      "https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557_960_720.jpg",
    text: "Happy Anniversary Babe",
    date: "February 22",
    comments: [29, 42],
    likes: 12,
  },
  {},
  {},
];

module.exports = { DataBase, Users, Posts };
