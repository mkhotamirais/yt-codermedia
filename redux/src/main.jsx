import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import "bulma/css/bulma.css";
import { Provider } from "react-redux";
import { store } from "../app/store.js";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import ShowProducts from "../features/products/ShowProducts.jsx";
import AddProduct from "../features/products/AddProduct.jsx";
import EditProduct from "../features/products/EditProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ShowProducts />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
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
