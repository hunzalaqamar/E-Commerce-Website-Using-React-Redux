import { ActionTypes } from "../constants/action-type";
const intialState = {
  products: [],
  filtered: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.FILTERED_PRODUCTS:
      return { ...state, filtered: payload};

    default:
      return state;
  }
};
