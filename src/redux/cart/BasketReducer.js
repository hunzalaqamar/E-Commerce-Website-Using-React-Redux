import { RESET_BASKET, ADD_TO_BASKET_ITEM, REMOVE_ROW } from "./BasketListType";

const initOrder = {
  orderNumber: Math.floor(Math.random() * 100),
  numberOfUnits: 0,
  totalSum: 0,
  unitArray: [],
};

const basketlistReducer = (state = initOrder, action) => {
  switch (action.type) {
    case ADD_TO_BASKET_ITEM:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + 1,
        totalSum: Math.floor(state.totalSum + action.bought),
        unitArray: state.unitArray.concat(action.payload)
      };
    case REMOVE_ROW:
      return {
        ...state,
        unitArray: state.unitArray.filter((item) => item !== action.payload),
        totalSum: Math.floor(state.totalSum - action.payload.price)
      };
    case RESET_BASKET:
      return {
        ...initOrder,
      };
    default:
      return state;
  }
};

export default basketlistReducer;
