import { GET_ORDERS, PUT_ORDERS, DELETE_ORDERS } from "../action";
import { initialState } from "../store";

const orderReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        ordersList: action.payload,
      };

    default:
      return state;
  }
};
export default orderReducer;
