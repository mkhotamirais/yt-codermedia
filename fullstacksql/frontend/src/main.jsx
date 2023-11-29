import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import "bulma/css/bulma.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/roles/Login.jsx";
import Layout from "./Layout.jsx";
import ProductsList from "./pages/products/ProductsList.jsx";
import UserList from "./pages/users/UsersList.jsx";
import Register from "./pages/usersAuth/Register.jsx";
import axios from "axios";
import HomeUsersAuth from "./pages/usersAuth/HomeUsersAuth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddUser from "./pages/users/AddUser.jsx";
import EditUser from "./pages/users/EditUser.jsx";
import AddProduct from "./pages/products/AddProduct.jsx";
import EditProduct from "./pages/products/EditProduct.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Sidebar from "./components/Sidebar.jsx";
import Welcome from "./pages/roles/Welcome.jsx";
import Users from "./pages/roles/Users.jsx";
import Products from "./pages/roles/Products.jsx";
import AddUserRole from "./pages/roles/AddUserRole.jsx";
import EditUserRole from "./pages/roles/EditUserRole.jsx";
import AddProductRole from "./pages/roles/AddProductRole.jsx";
import EditProductRole from "./pages/roles/EditProductRole.jsx";

axios.defaults.withCredentials = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="usersAuth" element={<HomeUsersAuth />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/edit/:id" element={<EditUser />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="rolesProducts" element={<Sidebar />}>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<AddUserRole />} />
          <Route path="users/edit/:id" element={<EditUserRole />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProductRole />} />
          <Route path="products/edit/:id" element={<EditProductRole />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
