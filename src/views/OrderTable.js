import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
const orders = [
  {
    orderId: 12543,
    price: 15,
    qty: 2,
    status: "pending",

    lable: "badge-danger",
  },
  {
    orderId: 1352,
    price: 15,
    qty: 5,
    status: "progress",
    lable: "badge-warning",
  },
  {
    orderId: 1352,
    price: 15,
    qty: 5,
    status: "progress",
    lable: "badge-success",
  },
  {
    orderId: 1352,
    price: 15,
    qty: 5,
    status: "progress",
    lable: "badge-info",
  },
  {
    orderId: 1352,
    price: 15,
    qty: 5,
    status: "progress",
    lable: "badge-danger",
  },
  {
    orderId: 1352,
    price: 15,
    qty: 5,
    status: "progress",
    lable: "badge-primary",
  },
];
export class OrderTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> All Orders </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>OrderId</th>
                        <th>Amount</th>
                        <th>Items Qty</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(({ orderId, price, qty, status, lable }) => {
                        return (
                          <tr>
                            <td>{orderId}</td>
                            <td>{price}</td>
                            <td className="text-dark">
                              {qty} <i className="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label className={`badge text-white ${lable} `}>
                                {status}
                              </label>
                            </td>
                            <td>
                              <CreateIcon />
                              <DeleteIcon />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderTable;
