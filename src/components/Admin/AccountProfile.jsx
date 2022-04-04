import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import "./Admin.css";
import { Link } from "react-router-dom";
import photo from "../../assets/images/me-discord.jpg";

const user = {
  avatar: "./images/me.jpg",
  city: "Berlin",
  country: "Germany",
  jobTitle: "Frontend Developer",
  name: "Nagaveena Hallikeri",
  timezone: "UTC+1",
};

export const AccountProfile = () => (
  <>
    <Card /* style={{ width: "22rem", height: "22rem" }} */>
      <CardContent className="card__collection clear-fix">
        <div className="cards cards--two__tri">
          <p>Phone</p>
        </div>
        <div className="cards cards--two">
          <img
            src={photo}
            style={{ height: "100%", width: "100%" }}
            className="img-responsive"
            alt=""
          />
          <span className="cards--two__rect"></span>
          <span className="cards--two__tri"></span>
          <p className="mb-0">Nagaveena Hallikeri</p>
          <ul className="cards__list mb-0 ml-5">
            <li>
              <a
                style={{ color: "white" }}
                href="https://github.com/Nagaveena007"
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/nagaveena-hallikeri-3b7a42146/"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/nagaveena-hallikeri-3b7a42146/"
              >
                <EmailIcon />
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://www.linkedin.com/in/nagaveena-hallikeri-3b7a42146/"
              >
                <PhoneIcon />
              </a>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </>
);
