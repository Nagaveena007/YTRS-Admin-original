import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductsAction, getProductsAction } from "../../redux/action";

const ProductTable = () => {
  const products = useSelector((state) => state.products.productsList);
  const dispatch = useDispatch();
  const params = useParams();

  console.log("products", products);
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
                  <tbody className="">
                    {products.map((p, i) => {
                      return (
                        <tr key={i} className="" style={{ lineHeight: "3" }}>
                          <td> {p.id} </td>
                          <td>{p.name} </td>
                          <td> {p.stock} </td>
                          <td> € {p.price} </td>
                          <td>
                            <Link to={"/products/" + p.id}>
                              <CreateIcon className="mr-2" />
                            </Link>
                            <DeleteIcon
                              onClick={() =>
                                dispatch(deleteProductsAction(p.id))
                              }
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

export default ProductTable;
