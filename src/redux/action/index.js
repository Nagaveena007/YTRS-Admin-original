import { Alert, AlertTitle } from "@material-ui/lab";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const EDIT_PRODUCTS = "EDIT_PRODUCTS";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";
export const GET_ORDERS = "GET_ORDERS";
export const PUT_ORDERS = "PUT_ORDERS";
export const DELETE_ORDERS = "DELETE_ORDERS";
export const GET_USERS = "GET_USERS";
export const PUT_USERS = "PUT_USERS";
export const DELETE_USERS = "DELETE_USERS";
export const GET_SINGLEPRODUCT = "GET_SINGLEPRODUCT";

export const getProductsAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://my-database-ytrs.herokuapp.com/recipes",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        const food = await resp.json();
        console.log("total products", food);
        dispatch({
          type: GET_PRODUCTS,
          payload: food,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getSingleProductAction = (id, productData) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://my-database-ytrs.herokuapp.com/recipes/${id}`,
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.ok) {
        const food = await resp.json();
        dispatch({
          type: GET_SINGLEPRODUCT,
          payload: food,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editProductsAction = async (id, productData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://my-database-ytrs.herokuapp.com/recipes/${id}`,
        productData,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const food = await response.json();
        dispatch({
          type: EDIT_PRODUCTS,
          payload: food,
        });
        alert("Successfully added new Product");
      }
    } catch (e) {
      alert(e);
    }
  };
};

export const addProductsAction = (productData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://my-database-ytrs.herokuapp.com/recipes`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
          // body: JSON.stringify({ title: `POST request` }),
        }
      );
      if (response.ok) {
        const food = await response.json();
        dispatch({
          type: ADD_PRODUCTS,
          payload: food,
        });
        alert("Successfully added new Product");
      }
    } catch (e) {
      alert(e);
    }
  };
};

export const deleteProductsAction = (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://my-database-ytrs.herokuapp.com/recipes/${id}`,
        {
          method: "DELETE",
        }
      );
      if (resp.ok) {
        //  const food = await resp.json();
        dispatch({
          type: DELETE_PRODUCTS,
          payload: id,
        });
        alert("successfully deleted the product");
        /*  <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>; */
        /*   <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          successfully deleted a product — <strong>check it out!</strong>
        </Alert>; */
      } else {
        alert("Faild to delete Product");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrdersAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://my-database-ytrs.herokuapp.com/orders");
      if (resp.ok) {
        const orders = await resp.json();
        dispatch({
          type: GET_ORDERS,
          payload: orders,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUsersAction = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch("https://my-database-ytrs.herokuapp.com/users");
      if (resp.ok) {
        const users = await resp.json();
        dispatch({
          type: GET_USERS,
          payload: users,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
