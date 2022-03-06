import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../redux/action";
/* const productTable = [
  {
    productId: 12543,
    name: "pizza",
    price: 25,
    stock: 25,
  },
  {
    productId: 12543,
    name: "pizza",
    price: 25,
    stock: 25,
  },
  {
    productId: 12543,
    name: "pizza",
    price: 25,
    stock: 25,
  },
  {
    productId: 12543,
    name: "pizza",
    price: 25,
    stock: 25,
  },
  {
    productId: 12543,
    name: "pizza",
    price: 25,
    stock: 25,
  },
]; */
const ProductTable = () => {
  const products = useSelector((state) => state.products.productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Product Table </h3>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ProductId</th>
                      <th>Name</th>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, index) => {
                      return (
                        <tr key={index}>
                          <td> {p.id} </td>
                          <td>{p.name} </td>
                          <td> {p.stock} </td>
                          <td> {p.price} </td>
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
};

export default ProductTable;
