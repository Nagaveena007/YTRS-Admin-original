import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import GroupIcon from "@material-ui/icons/Group";
import "./Dashboard.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  getUsersAction,
  getProductsAction,
  getOrdersAction,
} from "../../redux/action";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend
);
function Dashboard() {
  const products = useSelector((state) => state.products.productsList);
  const orders = useSelector((state) => state.orders.ordersList);
  const users = useSelector((state) => state.users.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
    dispatch(getProductsAction());
    dispatch(getOrdersAction());
  }, [dispatch]);
  console.log("users", users);
  let outOfStock = 0;
  // console.log("pasta stock", products[0].stock);

  products &&
    products.forEach((item) => {
      if (item.stock == 0) {
        outOfStock += 1;
      }
    });
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#222222", "#ff0000"],
        hoverBackgroundColor: ["#b3b3b3", "#c62828"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  let totalAmount = 0;

  const lineState = {
    labels: ["Initial Stock", "Remaining Stock"],
    datasets: [
      {
        label: "TOTAL Stock",
        backgroundColor: ["red"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        borderColor: ["red"],
        data: [0, products.length],
      },
    ],
  };
  return (
    <>
      <Container fluid>
        <div>
          <div className="page-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary  mr-2">
                <i className="mdi mdi-home"></i>
              </span>{" "}
              Dashboard{" "}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder ">
                <div className="card-body">
                  <ShowChartIcon
                    className="card-img-absolute  mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Sales{" "}
                    <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">€ 650</h2>
                  <h6 className="card-text">Increased by 60%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder ">
                <div className="card-body">
                  <BookmarkBorderIcon
                    className="card-img-absolute  mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Orders{" "}
                    <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">35</h2>
                  <h6 className="card-text">Decreased by 10%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder ">
                <div className="card-body">
                  <GroupIcon
                    className="card-img-absolute mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Visitors Online{" "}
                    <i className="mdi mdi-diamond mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">45</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="mt-5 mb-5">
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <div className="numbers">
                      <p className="card-category"></p>
                      <Card.Title as="h4">Total Amount</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex justify-content-center">
                  € 2568.958
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <div className="numbers">
                      <p className="card-category"></p>
                      <Card.Title as="h4">Orders</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex justify-content-center">
                  {orders.length}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <div className="numbers">
                      <p className="card-category"></p>
                      <Card.Title as="h4">Products</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex justify-content-center">
                  {products.length}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <div className="numbers">
                      <p className="card-category"></p>
                      <Card.Title as="h4">Users</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats d-flex justify-content-center">
                  {users.length}
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <div className="ChartDoughnut">
          <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut data={doughnutState} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
