import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import face7 from "../assets/images/faces/face7.jpg";
import face6 from "../assets/images/faces/face6.jpg";
import face5 from "../assets/images/faces/face5.jpg";
import face4 from "../assets/images/faces/face4.jpg";
import face3 from "../assets/images/faces/face3.jpg";
import face2 from "../assets/images/faces/face2.jpg";
import face1 from "../assets/images/faces/face1.jpg";
import Avatar from "@material-ui/core/Avatar";

const userTable = [
  {
    Userimg: face1,
    name: "Veena",
    variant: "success",
    now: 25,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face6,
    name: "Veena",
    variant: "danger",
    now: 75,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face5,
    name: "Veena",
    variant: "warning",
    now: 90,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face4,
    name: "Veena",
    variant: "success",
    now: 75,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face3,
    name: "Veena",
    variant: "danger",
    now: 90,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face2,
    name: "Veena",
    variant: "info",
    now: 50,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face7,
    name: "Veena",
    variant: "warning",
    now: 50,
    email: "veena@gmail.com",
    password: "veena",
  },
];
export class CustomerTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Customer Table </h3>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                {/*  <h4 className="card-title">Striped Table</h4> */}

                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> password </th>
                        <th> email </th>
                        <th> Order Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userTable.map(
                        ({
                          Userimg,
                          name,
                          index,
                          password,
                          email,
                          variant,
                          now,
                        }) => {
                          return (
                            <tr key={indexedDB}>
                              <td className="py-1">
                                {/*   <img src={Userimg} /> */}
                                <Avatar alt="Userimg" src={Userimg} />
                              </td>
                              <td>{name} </td>
                              <td> {password} </td>
                              <td> {email} </td>
                              <td>
                                <ProgressBar variant={variant} now={now} />
                              </td>
                            </tr>
                          );
                        }
                      )}

                      {/*      {userTable.map((u, i) => {
                        <tr key={i}>
                          <td className="py-1">
                            <img src={u.Userimg} />
                          </td>
                          <td>{u.name} </td>
                          <td> {u.password} </td>
                          <td> {u.email} </td>
                          <td>
                            <ProgressBar variant={u.variant} now={u.now} />
                          </td>
                        </tr>;
                      })} */}

                      {/*    <tr>
                        <td className="py-1">
                          <img src={face2} />
                        </td>
                        <td> Messsy Adam </td>
                        <td>
                          <ProgressBar variant="danger" now={75} />
                        </td>
                        <td> $245.30 </td>
                        <td> July 1, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={face3} />
                        </td>
                        <td> John Richards </td>
                        <td>
                          <ProgressBar variant="warning" now={90} />
                        </td>
                        <td> $138.00 </td>
                        <td> Apr 12, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={face4} />
                        </td>
                        <td> Peter Meggik </td>
                        <td>
                          <ProgressBar variant="primary" now={50} />
                        </td>
                        <td> $ 77.99 </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={face5} />
                        </td>
                        <td> Edward </td>
                        <td>
                          <ProgressBar variant="danger" now={60} />
                        </td>
                        <td> $ 160.25 </td>
                        <td> May 03, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={face6} />
                        </td>
                        <td> John Doe </td>
                        <td>
                          <ProgressBar variant="info" now={65} />
                        </td>
                        <td> $ 123.21 </td>
                        <td> April 05, 2015 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <img src={face7} />
                        </td>
                        <td> Henry Tom </td>
                        <td>
                          <ProgressBar variant="warning" now={20} />
                        </td>
                        <td> $ 150.00 </td>
                        <td> June 16, 2015 </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerTable;
