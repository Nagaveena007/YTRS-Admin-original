import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrdersAction, getOrdersAction } from "../../redux/action";

const OrderEditTable = () => {
  const orders = useSelector((state) => state.orders.ordersList);
  const dispatch = useDispatch();
  const params = useParams();
  const lable = [
    { canceled: "badge-danger" },
    { progress: "badge-warning" },
    { delivered: "badge-sucess" },
    { transition: "badge-info" },
  ];
  console.log("orders", orders);
  useEffect(() => {
    dispatch(getOrdersAction());
  }, []);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Orders Table </h3>
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
                  <tbody className="">
                    {orders.map((p, i) => {
                      return (
                        <tr key={i} className="" style={{ lineHeight: "3" }}>
                          <td> {p.id} </td>
                          <td> € {p.price} </td>
                          <td>{p.qty} </td>
                          <td>
                            {/*   {lable.map((l, i) => {
                              return (
                                <label
                                  className={`badge text-white ${l.`${p.status}`} `}
                                ></label>
                              );
                            })} */}
                            {p.status}
                          </td>
                          <td>
                            <Link to={"/orders/" + p.id}>
                              <CreateIcon className="mr-2" />
                            </Link>
                            <DeleteIcon
                              onClick={() => dispatch(deleteOrdersAction(p.id))}
                              className="ml-2"
                            />
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
};

export default OrderEditTable;
