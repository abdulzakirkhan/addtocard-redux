// combining all reducers
import { combineReducers } from "react-redux";
import cartItems from "./reducers";


export default combineReducers({
  cartItems,
});
