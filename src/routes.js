import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";

import ProductTable from "views/ProductTable";
import CustomerTable from "views/CustomerTable";
import OrderTable from "views/OrderTable";
import ProductEditForm from "views/ProductEditForm";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/user",
    name: "Admin Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/customer-table",
    name: "Customers",
    icon: "nc-icon nc-notes",
    component: CustomerTable,
    layout: "/admin",
  },
  {
    path: "/product-table",
    name: "Products",
    icon: "nc-icon nc-notes",
    component: ProductTable,
    layout: "/admin",
  },
  {
    path: "/addProduct",
    name: "Add Product ",
    icon: "nc-icon nc-notes",
    component: ProductEditForm,
    layout: "/admin",
  },
  {
    path: "/Order-table",
    name: "Orders",
    icon: "nc-icon nc-notes",
    component: OrderTable,
    layout: "/admin",
  },
  {
    path: "/editProduct",
    name: "Product Form",
    icon: "nc-icon nc-notes",
    component: ProductEditForm,
    layout: "/admin",
  },
];

export default dashboardRoutes;
