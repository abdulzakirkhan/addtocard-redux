import { ADD_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
      break;

    default:
      return state;
  }
}
