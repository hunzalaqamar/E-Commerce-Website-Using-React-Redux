import { RESET_BASKET, ADD_TO_BASKET_ITEM, REMOVE_ROW } from "./BasketListType";

const initOrder = {
  numberOfUnits: 0,
  totalSum: 0.0,
  unitArray: [],
};

const basketlistReducer = (state = initOrder, action) => {
  switch (action.type) {
    case ADD_TO_BASKET_ITEM:
      return {
        ...state,
        numberOfUnits: state.numberOfUnits + 1,
        totalSum: parseFloat(state.totalSum + action.payload.price),
        unitArray: state.unitArray.concat(action.payload),
      };
    case REMOVE_ROW:
      return {
        ...state,
        unitArray: state.unitArray.filter((item) => item !== action.payload),
        totalSum: parseFloat(state.totalSum - action.payload.price),
        numberOfUnits: state.numberOfUnits - 1,
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
