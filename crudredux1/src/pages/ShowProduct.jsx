import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  getProducts,
  productSelectors,
} from "../features/productSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="box mt-5">
      <Link to="/add" className="button is-success">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product.id}>
              <td>{i + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/edit/${product.id}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="button is-danger is-small"
                >
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;