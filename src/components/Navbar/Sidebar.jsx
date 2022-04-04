import "./Sidebar.css";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Header from "../Header/Header";

/* 
imports form Sidebar.jsx */
import Avatar from "@material-ui/core/Avatar";

import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FlagIcon from "@material-ui/icons/Flag";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
const drawerWidth = 240;

const iconName = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    link: "",
  },
  {
    icon: <PersonIcon />,
    name: "Admin",
    link: "admin",
  },

  {
    icon: <PeopleIcon />,
    name: "Customers",
    link: "customers",
  },

  {
    icon: <ListAltIcon />,
    name: "Orders",
    link: "orders",
  },
  {
    icon: <AccountTreeIcon />,
    name: "Products",
    link: "products",
  },
  {
    icon: <LibraryAddIcon />,
    name: "AddProduct",
    link: "addProduct",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Sidebar = () => {
  const [selected__menu, setSelected__menu] = useState(false);
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  console.log("location", location);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return location.pathname === "/login" || location.pathname === "/register" ? (
    <></>
  ) : (
    <>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <div>
              <MenuIcon
                style={{
                  width: "28px",
                  height: "42px",
                  marginTop: "8px",
                  marginRight: "8px",
                  marginLeft: "-8px",
                  color: "#757575",
                }}
              />
              <Link to={"/"}>
                <img className="" src="/logo1.PNG" style={{ width: "120px" }} />

                {/*    <span style={{ color: "black" }}>Y-T RecipeStore</span> */}
              </Link>
            </div>
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* header is placed */}
            <Header />
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} className="">
            <>
              {theme.direction === "rtl" ? (
                <MenuIcon
                  style={{ width: "28px", height: "42px", marginTop: "8px" }}
                />
              ) : (
                <MenuIcon
                  style={{ width: "28px", height: "42px", marginTop: "8px" }}
                />
              )}
            </>
          </IconButton>
          <div style={{ paddingRight: "36px", paddingLeft: "12px" }}>
            <Link to={"/"}>
              <img
                className="mr-2"
                src="/logo1.PNG"
                style={{ width: "120px" }}
              />
              {/* <span style={{ color: "black", fontSize: "large" }}>
                Y-T RecipeStore
              </span> */}
            </Link>
          </div>
        </div>

        <Divider />
        <List selected__menu={selected__menu}>
          {iconName.map(({ name, index, icon, link }) => {
            return (
              <Link to={link} key={name}>
                <ListItem button>
                  <ListItemIcon>
                    <span fontSize="large" className="menu__item">
                      {" "}
                      {icon}
                    </span>
                  </ListItemIcon>

                  <ListItemText
                    className={
                      location.pathname === `/${link}`
                        ? " selected__menu"
                        : "menu__single"
                    }
                    onClick={(e) => setSelected__menu(true)}
                    primary={name}
                    style={{ color: "black" }}
                  />
                </ListItem>
              </Link>
            );
          })}
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
