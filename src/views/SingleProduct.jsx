import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SingleProduct = () => {
  const [product, setProduct] = useState({
    category: "",
    design: "",
    name: "",
    price: "",
    color: "",
    origin: "",
    composition: "",
    image: "",
  });

  const params = useParams();

  useEffect(() => {
    productInfo();
  }, []);

  const productInfo = async () => {
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

  const updateProduct = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `https://my-database-ytrs.herokuapp.com/recipes/${product.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          category: product.category,
          design: product.design,
          name: product.name,
          price: product.price,
          origin: product.origin,
          composition: product.composition,
          image: product.image,
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
    <Container fluid id="admin-singleProduct-container">
      <Row className="justify-content-center">
        <Col md={8} className="d-flex justify-content-center">
          <Form onSubmit={(e) => updateProduct(e)}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Suitable for</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.design}
                  onChange={(e) =>
                    setProduct({ ...product, design: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.color}
                  onChange={(e) =>
                    setProduct({ ...product, color: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Origin Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.origin}
                  onChange={(e) =>
                    setProduct({ ...product, origin: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Composition</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.composition}
                  onChange={(e) =>
                    setProduct({ ...product, composition: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={product.image.img1}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                />
              </Form.Group>
              <Button
                className="admin-save-btn"
                as={Col}
                md="6"
                onClick={updateProduct}
                type="submit"
              >
                Save
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
