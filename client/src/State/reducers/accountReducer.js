import axios from "axios";

const initialState = { name: "", count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      console.log(action.payload);
      return action.payload;
    case "deposit":
      return { ...state, count: state.count + action.payload };
    case "withdraw":
      return { ...state, count: state.count - action.payload };
    case "POST_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
