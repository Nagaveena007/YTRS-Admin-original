import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Navbar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NotFound from "./components/NotFoundPage/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/Admin";
import CustomerTable from "./components/Customers/CustomerTable";
import OrderTable from "./components/Orders/OrderTable";
import ProductTable from "./components/Product/ProductTable";
import SingleProduct from "./components/Product/SingleProduct";
import AddProduct from "./components/Product/AddProduct";
import SingleOrder from "./components/Orders/SingleOrder";
import OrderEditTable from "./components/Orders/OrderEditTable";

const drawerWidth = 240;

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
function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Container fluid className={classes.root}>
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/customers" element={<CustomerTable />} />
              <Route path="/orders" element={<OrderEditTable />} />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/orders/:id" element={<SingleOrder />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
