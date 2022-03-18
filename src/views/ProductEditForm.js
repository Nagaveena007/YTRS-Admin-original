import React, { Component } from "react";
import { Form } from "react-bootstrap";
import IngredientsAdd from "./IngredientsAdd";
//import DatePicker from "react-datepicker";
//import bsCustomFileInput from "bs-custom-file-input";

export class ProductEditForm extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  componentDidMount() {
    // bsCustomFileInput.init();
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Upload New Product </h3>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Product Id</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="id"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Product Name</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Stock</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Stock"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail3">Price</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="€"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail3">Cooking Time</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="min"
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
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputCity1">Video URL</label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      id="exampleInputCity1"
                      placeholder="Location"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Product Details</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea1"
                      rows="4"
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
                  <button
                    type="submit"
                    className="btn btn-gradient-primary mr-2"
                  >
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
  }
}

export default ProductEditForm;
