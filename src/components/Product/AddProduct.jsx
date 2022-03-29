import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import IngredientsAdd from "./IngredientsAdd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addProductsAction } from "../../redux/action";
import { useParams } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useAlert } from "react-alert";

const AddProduct = () => {
  const params = useParams();
  // const alert = useAlert();

  const [product, setProduct] = useState({
    id: null,
    name: "",
    price: null,
    stock: null,
    cookingTime: null,
    img: "",
    url: "",
    productDetails: "",
  });
  const handleInput = (fieldName, value) => {
    setProduct({
      ...product,
      [fieldName]: value,
    });
  };

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [cookingTime, setCookingTime] = useState("");
  const [img, setImages] = useState([]);
  const [url, setVideos] = useState([]);
  const [productDetails, setProductDetails] = useState("");
  const dispatch = useDispatch();

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("id", id);
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("Stock", stock);
    myForm.set("cookingTime", cookingTime);
    myForm.set("img", img);
    myForm.set("url", url);
    myForm.set("productDetails", productDetails);

    dispatch(addProductsAction(myForm));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    try {
      let response = await fetch(
        `https://my-database-ytrs.herokuapp.com/recipes`,
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Product Created Successfully");

        /*  <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          successfully added an product — <strong>check it out!</strong>
        </Alert>; */
        setProduct({
          id: null,
          name: "",
          price: null,
          stock: null,
          cookingTime: null,
          img: "",
          url: "",
          productDetails: "",
        });
      } else {
        alert("ERROR");
      }
    } catch (error) {
      console.log(error);
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
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label> Product Id</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="id"
                    value={product.id}
                    onChange={(e) => {
                      handleInput("id", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={product.name}
                    onChange={(e) => {
                      handleInput("name", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="€"
                    value={product.price}
                    onChange={(e) => {
                      handleInput("price", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Stock"
                    value={product.stock}
                    onChange={(e) => {
                      handleInput("Stock", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cooking Time</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="min"
                    value={product.cookingTime}
                    onChange={(e) => {
                      handleInput("cookingTime", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <IngredientsAdd />
                <Form.Group>
                  <Form.Label>url</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="url"
                    value={product.url}
                    onChange={(e) => {
                      handleInput("url", e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>img</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="img"
                    value={product.img}
                    onChange={(e) => {
                      handleInput("img", e.target.value);
                    }}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Product Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={product.productDetails}
                    onChange={(e) => {
                      handleInput("productDetails", e.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
                <Button type="reset" className=" mr-2" variant="danger">
                  Reset
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
