import AddProduct from "../features/products/AddProduct";
import ShowProducts from "../features/products/ShowProducts";

const App = () => {
  return (
    <main className="container">
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProducts />
        </div>
      </div>
    </main>
  );
};

export default App;
