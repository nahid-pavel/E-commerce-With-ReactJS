import { actionTypes } from "../constants";

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const deleteFromCart = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: item,
  };
};

export const toggleCart = (item) => {
  return {
    type: actionTypes.TOGGLE_CART,
  };
};
