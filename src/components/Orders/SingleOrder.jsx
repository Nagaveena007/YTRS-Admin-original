import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editOrdersAction } from "../../redux/action";
import { useParams } from "react-router-dom";

const SingleOrder = () => {
  const orders = useSelector((state) => state.orders.ordersList);
  const params = useParams();
  const [order, setOrder] = useState({
    id: "",
    price: "",
    qty: "",
    status: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    recipeInfo();
  }, []);
  const recipeInfo = async () => {
    let response = await fetch(
      `https://my-database-ytrs.herokuapp.com/orders/${params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setOrder(data);
  };

  const updateRecipe = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `https://my-database-ytrs.herokuapp.com/orders/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: order.id,
          price: order.price,
          qty: order.qty,
          status: order.status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("success");
    } else {
      alert("error");
    }
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Create New Orders </h3>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form className="forms-sample" onSubmit={updateRecipe}>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Order Id</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="id"
                    value={order.id}
                    onChange={(e) => setOrder({ ...order, id: e.target.value })}
                  />
                </Form.Group>

                <Form.Group>
                  <label htmlFor="exampleInputEmail3">Amount</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputEmail3"
                    placeholder="€"
                    value={order.price}
                    onChange={(e) =>
                      setOrder({ ...order, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail3">Items Qty</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputEmail3"
                    placeholder="qty"
                    value={order.qty}
                    onChange={(e) =>
                      setOrder({ ...order, qty: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <label htmlFor="exampleInputCity1">Status</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Status"
                    value={order.status}
                    onChange={(e) =>
                      setOrder({ ...order, status: e.target.value })
                    }
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Submit
                </Button>
                <Button type="reset" className=" mr-2" variant="danger">
                  Reset
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
