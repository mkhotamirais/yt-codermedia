import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./roleSlice";

const AddProductRole = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

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

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      if ((name, price)) {
        await axios.post(`http://localhost:3000/roleProducts`, { name, price });
        navigate("/rolesProducts/products");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Add New Product</h2>
      <div className="card is-shadowless">
        <div className="card-conent">
          <div className="content">
            <form className="box">
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    placeholder="name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="text"
                    placeholder="price"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="field mt-5">
                <div className="control">
                  <button onClick={saveProduct} className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductRole;
