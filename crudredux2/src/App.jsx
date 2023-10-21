import AddProduct from "./pages/AddProduct";
import ShowProducts from "./pages/ShowProducts";

const App = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProducts />
        </div>
      </div>
    </div>
  );
};

export default App;
