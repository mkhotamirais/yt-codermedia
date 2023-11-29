import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMe } from "./roleSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.roles);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/rolesProducts/login");
    }
  }, [isError, navigate]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(`http://localhost:3000/roleProducts`);
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:3000/roleProducts/${productId}`);
    getProducts();
  };
  return (
    <div>
      <h1 className="title">products</h1>
      <h2 className="subtitle">List of products</h2>
      <Link to="add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.RoleUser.name}</td>
              <td>
                <Link to={`edit/${product.uuid}`} className="button is-small is-info">
                  Edit
                </Link>
                <button onClick={() => deleteProduct(product.uuid)} className="button is-small is-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
