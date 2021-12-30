import axios from "axios";
//// ADD MONEY TO ACCOUNT
export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};
//// WITH DRAW MONEY FROM ACCOUNT
export const withDrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
/// FETCH DATA
export const GetData = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:9700/api/users");
    console.log("it worked ", response.data);
    dispatch({
      type: "FETCH_DATA",
      payload: response.data,
    });
  };
};

export const PostData = (num) => {
  return async (dispatch, getState) => {
    const newUser = {
      count: num,
      name: "James",
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(newUser);
    const response = await axios.post(
      "http://localhost:9700/api/users/update",
      body,
      config
    );

    console.log("it worked ", response.data);
    dispatch({
      type: "POST_DATA",
      payload: response.data,
    });
  };
};
