import React from "react";
import ChartistGraph from "react-chartist";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import GroupIcon from "@material-ui/icons/Group";
import "./Dashboard.css";
// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <div>
          <div className="page-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary text-white mr-2">
                <i className="mdi mdi-home"></i>
              </span>{" "}
              Dashboard{" "}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                  {/*   <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                /> */}

                  <ShowChartIcon
                    className="card-img-absolute  mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Sales{" "}
                    <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">$ 15,0000</h2>
                  <h6 className="card-text">Increased by 60%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder text-white">
                <div className="card-body">
                  {/*  <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                /> */}

                  <BookmarkBorderIcon
                    className="card-img-absolute  mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Orders{" "}
                    <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">45,6334</h2>
                  <h6 className="card-text">Decreased by 10%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder text-white">
                <div className="card-body">
                  {/*  <img
                    src="../../assets/images/dashboard/circle.svg"
                    
                    alt="circle"
                  /> */}
                  <GroupIcon
                    className="card-img-absolute mr-5 mt-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h4 className="font-weight-normal mb-3">
                    Visitors Online{" "}
                    <i className="mdi mdi-diamond mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">95,5741</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row>
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
                  $568.958
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
                <div className="stats d-flex justify-content-center">5</div>
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
                <div className="stats d-flex justify-content-center">12</div>
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
                <div className="stats d-flex justify-content-center">3</div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Email Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["40%", "20%", "40%"],
                      series: [40, 20, 40],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
