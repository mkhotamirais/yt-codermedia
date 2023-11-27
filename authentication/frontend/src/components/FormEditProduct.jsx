import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FormEditProduct = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, { name, price });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Update Product</h2>
      <div className="card is-shadowless">
        <div className="card-conent">
          <div className="content">
            <form onSubmit={updateProduct} className="box">
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
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditProduct;
