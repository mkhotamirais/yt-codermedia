import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveProduct } from "../features/productSlice";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createProduct = (e) => {
    e.preventDefault();
    dispatch(saveProduct({ title, price }));
    navigate("/show");
  };

  return (
    <>
      <div className="box mt-5">
        <form onSubmit={createProduct}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Submit
            </button>
            <Link to="/show" className="button">
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
AddProduct.propTypes;

export default AddProduct;
