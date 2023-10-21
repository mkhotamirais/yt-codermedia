import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/productSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProduct({ title, price }));
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={addProduct} className="box mt-5">
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
            Submit
          </button>
          <Link to="/" className="button">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
