import { combineReducers } from "redux";
import { productsReducer } from "./reducers";
import basketlistReducer from "../cart/BasketReducer"
const reducers = combineReducers({
  allProducts: productsReducer,
  basket: basketlistReducer
});
export default reducers;
