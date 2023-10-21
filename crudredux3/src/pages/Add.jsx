import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts2, productSelectors } from "../features/productSlice";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts2());
  }, [dispatch]);
  console.log(products);

  return (
    <>
      <form className="box mt-5">
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
        </div>
      </form>
    </>
  );
};

export default Add;
