import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orderReducer from "../reducer/orderReducer";
import productReducer from "../reducer/productReducer";
import userReducer from "../reducer/userReducer";

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  products: {
    productsList: [],
  },
  orders: {
    ordersList: [],
  },
  users: {
    usersList: [],
  },
};
const bigReducer = combineReducers({
  products: productReducer,
  orders: orderReducer,
  users: userReducer,
});

let configureStore = createStore(
  bigReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);
export default configureStore;
