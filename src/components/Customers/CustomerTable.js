import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import face7 from "../../assets/images/faces/face7.jpg";
import face6 from "../../assets/images/faces/face6.jpg";
import face5 from "../../assets/images/faces/face5.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face2 from "../../assets/images/faces/face2.jpg";
import face1 from "../../assets/images/faces/face1.jpg";
import Avatar from "@material-ui/core/Avatar";

const userTable = [
  {
    Userimg: face1,
    name: "Chandra",
    variant: "danger",
    now: 25,
    email: "chandra@gmail.com",
    password: "Chandra123",
  },
  {
    Userimg: face6,
    name: "Veena",
    variant: "success",
    now: 100,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face5,
    name: "Akshu",
    variant: "info",
    now: 90,
    email: "akshu@gmail.com",
    password: "Akshu",
  },
  {
    Userimg: face4,
    name: "Akshay",
    variant: "info",
    now: 75,
    email: "akshay@gmail.com",
    password: "Akshay",
  },
  {
    Userimg: face3,
    name: "Avishu",
    variant: "success",
    now: 100,
    email: "avishu@gmail.com",
    password: "Avishu",
  },
  {
    Userimg: face2,
    name: "Anchu",
    variant: "warning",
    now: 50,
    email: "anchu@gmail.com",
    password: "Anchu",
  },
  {
    Userimg: face7,
    name: "Sachin",
    variant: "danger",
    now: 25,
    email: "sachin@gmail.com",
    password: "Sachin",
  },
  {
    Userimg: face1,
    name: "Chandra",
    variant: "danger",
    now: 25,
    email: "chandra@gmail.com",
    password: "Chandra123",
  },
  {
    Userimg: face6,
    name: "Veena",
    variant: "success",
    now: 100,
    email: "veena@gmail.com",
    password: "veena",
  },
  {
    Userimg: face5,
    name: "Akshu",
    variant: "info",
    now: 90,
    email: "akshu@gmail.com",
    password: "Akshu",
  },
  {
    Userimg: face4,
    name: "Akshay",
    variant: "info",
    now: 75,
    email: "akshay@gmail.com",
    password: "Akshay",
  },
  {
    Userimg: face3,
    name: "Avishu",
    variant: "success",
    now: 100,
    email: "avishu@gmail.com",
    password: "Avishu",
  },
  {
    Userimg: face2,
    name: "Anchu",
    variant: "warning",
    now: 50,
    email: "anchu@gmail.com",
    password: "Anchu",
  },
  {
    Userimg: face7,
    name: "Sachin",
    variant: "danger",
    now: 25,
    email: "sachin@gmail.com",
    password: "Sachin",
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
                            <tr key={indexedDB} style={{ lineHeight: "3" }}>
                              <td className="py-1">
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
