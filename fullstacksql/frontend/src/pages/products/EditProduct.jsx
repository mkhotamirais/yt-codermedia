import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    setName(response.data.name);
    setImage(response.data.image);
    setPreview(response.data.url);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const loadImage = (e) => {
    const imageTarget = e.target.files[0];
    setImage(imageTarget);
    setPreview(URL.createObjectURL(imageTarget));
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    try {
      await axios.patch(`http://localhost:3000/products/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input type="file" className="file-input" onChange={loadImage} />
                  <span className="file-cta">
                    <span className="file-label">Choose a file</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success" type="submit">
                Edit
              </button>
              <Link to="/products" className="button is-light ml-3">
                Back
              </Link>
            </div>
          </div>
          {preview && (
            <figure className="image is-128x128">
              <img src={preview} alt="preview image" />
            </figure>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
