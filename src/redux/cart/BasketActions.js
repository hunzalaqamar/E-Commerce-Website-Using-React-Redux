import {
    RESET_BASKET,
    ADD_TO_BASKET_ITEM,
    REMOVE_ROW
  } from "./BasketListType";

  
  export const addToBasketItem = (product, price) => {
    return {
      type: ADD_TO_BASKET_ITEM,
      payload: product,
      bought:price,
    };
  };
  
  export const removeRow = product => {
    return {
      type: REMOVE_ROW,
      payload: product
    };
  };
  
  export const resetBasket = () => {
    return {
      type: RESET_BASKET
    };
  };
  