import {
  GET_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  ADD_PRODUCTS,
} from "../action";
import { initialState } from "../store";

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        productsList: state.productsList.concat(action.payload),
        /*         return state.productsList.concat([action.data]);*/
      };
    case EDIT_PRODUCTS:
      return {
        ...state,
        productsList: state.productsList.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                stock: action.payload.stock,
                price: action.payload.price,
                url: action.payload.url,
                img: action.payload.img,
                cookingTime: action.payload.cookingTime,
              }
            : content
        ),
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        productsList: state.productsList.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};
export default productReducer;
