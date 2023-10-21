import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Show from "./pages/Show.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Show />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
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
