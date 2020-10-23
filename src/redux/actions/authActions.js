import { actionTypes } from "../constants";
import { users } from "../reducers/userData";

export const loginUser = (item) => {
  let result = false;
  let allUsers = users;
  if (sessionStorage.getItem("users")) {
    allUsers = JSON.parse(sessionStorage.getItem("users"));
  }

  allUsers.forEach((user) => {
    if (user.email === item.email) {
      sessionStorage.setItem("isLoggedIn", true);
      result = true;
    }
  });
  return result;
};

export const registerUser = (item) => {
  let newUsers = [...users, item];
  sessionStorage.setItem("users", JSON.stringify(newUsers));
};

export const logOut = (item) => {
  sessionStorage.removeItem("isLoggedIn");
};
