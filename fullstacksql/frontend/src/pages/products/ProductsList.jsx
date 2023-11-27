import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(`http://localhost:3000/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const renderedProducts = products.map((product) => (
    <div className="column is-one-quarter" key={product.id}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={product.url} alt="image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.name}</p>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={`/editProduct/${product.id}`} className="card-footer-item">
            Edit
          </Link>
          <a className="card-footer-item" onClick={() => deleteProduct(product.id)}>
            Delete
          </a>
        </footer>
      </div>
    </div>
  ));
  return (
    <section className="container mt-5">
      <Link to="/addProduct" className="button is-success mb-3">
        Add
      </Link>
      <div className="columns is-multiline">{renderedProducts}</div>
    </section>
  );
};

export default ProductsList;
