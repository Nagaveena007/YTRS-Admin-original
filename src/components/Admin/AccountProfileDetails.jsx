import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import { Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Nav } from "react-bootstrap";

export const AccountProfileDetails = () => {
  return (
    <form>
      <Card>
        <CardHeader
          variant="h5"
          title="Contact Details"
          style={{
            marginLeft: "60px",
          }}
        />
        <Divider />
        <div
          className=""
          style={{
            marginTop: "90px",
            marginBottom: "90px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 className="card-text ml-2 pl-1 mb-3">Nagaveena Hallikeri</h5>
            <h5 className="card-text ml-2 pl-1 mb-3" style={{ color: "blue" }}>
              veenahallikeri123@gmail.com
            </h5>

            <h5 className="card-title">
              <GitHubIcon
                className="ml-2 mr-2 mb-2"
                style={{ width: "40px", height: "42px" }}
              />
              https://github.com/Nagaveena007
            </h5>
            <h5 className="card-title">
              <LinkedInIcon
                className="ml-2 mr-2 "
                style={{ width: "48px", height: "50px" }}
              />
              https://www.linkedin.com/in/nagaveena-hallikeri-3b7a42146/
            </h5>
          </div>
        </div>

        <Divider />
      </Card>
    </form>
  );
};
