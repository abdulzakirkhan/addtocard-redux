// combining all reducers
import { combineReducers } from "redux";
import cartItems from "./reducers";


export default combineReducers({
  cartItems,
});
