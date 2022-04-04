import { initialState } from "../store";
import { GET_ORDERS, EDIT_ORDERS, DELETE_ORDERS, ADD_ORDERS } from "../action";

const productReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        ordersList: action.payload,
      };

    case ADD_ORDERS:
      return {
        ...state,
        ordersList: [...state.ordersList, action.payload],
      };
    case EDIT_ORDERS:
      return {
        ...state,
        ordersList: state.ordersList.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                orderId: action.payload.orderId,
                price: action.payload.price,
                qty: action.payload.qty,
                status: action.payload.status,
              }
            : content
        ),
      };
    case DELETE_ORDERS:
      return {
        ...state,
        ordersList: state.ordersList.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};
export default productReducer;
