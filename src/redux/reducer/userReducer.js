import { GET_USERS, PUT_USERGET_USERS, DELETE_USERGET_USERS } from "../action";
import { initialState } from "../store";

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
