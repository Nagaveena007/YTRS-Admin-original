import { GET_PRODUCTS, PUT_ORDERS, DELETE_ORDERS } from "../action";
import { initialState } from "../store";

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
