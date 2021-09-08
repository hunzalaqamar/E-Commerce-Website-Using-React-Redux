import { ActionTypes } from "../constants/action-type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const filteredProducts = (product, productId) => {
  return {
    type: ActionTypes.FILTERED_PRODUCTS,
    payload:[
      productId,
      product
    ]
  };
};
