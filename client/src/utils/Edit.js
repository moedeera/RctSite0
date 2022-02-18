import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export const Edit = () => {
  const [edit, setEdit] = useState(false);

  return { edit, setEdit };
};
