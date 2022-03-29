import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import IngredientsAdd from "./IngredientsAdd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { editProductsAction } from "../../redux/action";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = useSelector((state) => state.products.productsList);
  const params = useParams();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    name: "",
    price: "",
    stock: "",
    cookingTime: "",
    img: "",
    url: "",
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
      `https://my-database-ytrs.herokuapp.com/recipes/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: product.id,
          stock: product.stock,
          name: product.name,
          price: product.price,
          cookingTime: product.cookingTime,
          img: product.img,
          url: product.url,
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
              <form className="forms-sample" onSubmit={updateRecipe}>
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
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Image"
                    value={product.img}
                    onChange={(e) =>
                      setProduct({ ...product, img: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputCity1">Video URL</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputCity1"
                    placeholder="Video"
                    value={product.url}
                    onChange={(e) =>
                      setProduct({ ...product, url: e.target.value })
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

export default SingleProduct;
