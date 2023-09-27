import { useSelector } from "react-redux";

const ShowProduct = () => {
  const { title, price } = useSelector((state) => state.product);
  return (
    <div className="container">
      <div className="box mt-5">
        <h4 className="titl is-4">title: {title}</h4>
        <h4 className="titl is-4">price: {price}</h4>
      </div>
    </div>
  );
};

export default ShowProduct;
