import { Route, Routes } from "react-router-dom";
import UserList from "./pages/users/UsersList";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";
import Navbar from "../components/Navbar";
import ProductsList from "./pages/products/ProductsList";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default App;
