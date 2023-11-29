import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts, productsSelector, updateProduct } from "./productsSlice";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productsSelector.selectById(state, id));

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
    if ((title, price)) {
      await dispatch(updateProduct({ id, title, price }));
      navigate("/");
    }
  };
  return (
    <section className="container">
      <form className="box mt-5" onSubmit={handleUpdate}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input type="number" className="input" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <button className="button is-success" type="submit">
            Edit
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
