import { users } from "userData.js";
import { actionTypes } from "../constants";

const INITIAL_STATE = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      console.log("from user reducer", action.payload);
      return {
        ...state,
        currentUser: state.users.find((user) => user.id === action.payload.id),
        isLoggedIn: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: state.users.find((user) => user.id === action.payload.id),
        isLoggedIn: false,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
