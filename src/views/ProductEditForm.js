import React, { Component } from "react";
import { Form } from "react-bootstrap";
import IngredientsAdd from "./IngredientsAdd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editProductsAction } from "../redux/action";
import { useParams } from "react-router-dom";
const params = useParams();

const products = useSelector((state) => state.products.productsList);

const ProductEditForm = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    name: "",
    price: "",
    stock: "",
    cookingTime: "",
    imgURL: "",
    videoURL: "",
    productDetails: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    recipeInfo();
  }, []);
  const recipeInfo = async () => {
    let response = await fetch(
      `https://my-database-ytrs.herokuapp.com/recipes/${params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  const updateRecipe = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `https://my-database-ytrs.herokuapp.com/recipes/${product.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: product.id,
          stock: product.stock,
          name: product.name,
          price: product.price,
          cookingTime: product.cookingTime,
          imgURL: product.imgURL,
          videoURL: product.videoURL,
          productDetails: product.productDetails,
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
        <h3 className="page-title"> Upload New Product </h3>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form className="forms-sample" onSubmit={(e) => updateRecipe(e)}>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Product Id</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="id"
                    value={product.id}
                    onChange={(e) =>
                      setProduct({ ...product, id: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Product Name</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Name"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Stock</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={(e) =>
                      setProduct({ ...product, stock: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail3">Price</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputEmail3"
                    placeholder="€"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputEmail3">Cooking Time</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputEmail3"
                    placeholder="min"
                    value={product.cookingTime}
                    onChange={(e) =>
                      setProduct({ ...product, cookingTime: e.target.value })
                    }
                  />
                </Form.Group>
                <IngredientsAdd />

                <Form.Group>
                  <label htmlFor="exampleInputCity1">Image URL</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Location"
                    value={product.imgURL}
                    onChange={(e) =>
                      setProduct({ ...product, imgURL: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputCity1">Video URL</label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Location"
                    value={product.videoURL}
                    onChange={(e) =>
                      setProduct({ ...product, videoURL: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleTextarea1">Product Details</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows="4"
                    value={product.productDetails}
                    onChange={(e) =>
                      setProduct({ ...product, productDetails: e.target.value })
                    }
                  ></textarea>
                </Form.Group>
                <Form.Group>
                  <div
                    className="custom-file"
                    style={{
                      height: "5vh",
                    }}
                  >
                    <Form.Control
                      type="file"
                      className="form-control visibility-hidden"
                      id="customFileLang"
                      lang="es"
                      style={{
                        border: "transparent",
                        backgroundColor: "transparent",
                        height: "5vh",
                      }}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="customFileLang"
                      lang="es"
                      style={{
                        height: "5vh",
                      }}
                    >
                      Upload images
                    </label>
                  </div>
                </Form.Group>
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Submit
                </button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
