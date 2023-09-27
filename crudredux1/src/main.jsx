import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ShowProduct from "./components/ShowProduct";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ShowProduct />} />
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
