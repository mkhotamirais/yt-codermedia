import AddProduct from "./AddProduct";
import ShowProduct from "./ShowProduct";

const AddShow = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};
AddShow.propTypes;

export default AddShow;
