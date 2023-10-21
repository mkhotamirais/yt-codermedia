import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import { Provider } from "react-redux";
import store from "./app/store.js";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Home from "./pages/Home.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ShowProduct from "./pages/ShowProduct.jsx";
import AddShow from "./pages/AddShow.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import Counter2 from "./components/Counter2.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/show" element={<ShowProduct />} />
        <Route path="/addShow" element={<AddShow />} />
      </Route>
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
