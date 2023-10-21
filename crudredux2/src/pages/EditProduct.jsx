import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  getProducts,
  productSelectors,
  updateProduct,
} from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct({ id, title, price }));
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleUpdate} className="box mt-5">
        <div className="field">
          <label htmlFor="title" className="label">
            Title
          </label>
          <div className="control">
            <input
              type="text"
              name="title"
              id="title"
              className="input"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="title" className="label">
            Price
          </label>
          <div className="control">
            <input
              type="text"
              name="title"
              id="title"
              className="input"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success" type="submit">
            Edit
          </button>
          <Link to="/" className="button">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
