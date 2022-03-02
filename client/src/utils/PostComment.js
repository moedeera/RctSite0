import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export const PostComment = () => {
  const [comment, setComment] = useState([]);

  return { comment, setComment };
};
