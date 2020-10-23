import { actionTypes } from "../constants";

const INITIAL_STATE = {
  cartItems: [],
  showCart: false,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        showCart: true,
      };
    case actionTypes.DELETE_ITEM:
      let newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: newItems,
      };

    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};

export default postReducer;
