import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts, productsSelector } from "./productsSlice";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const products = useSelector(productsSelector.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <section className="container">
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className="button is-info is-small">
                    Edit
                  </Link>
                  <button className="button is-danger is-small" onClick={() => dispatch(deleteProduct(product.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShowProducts;
