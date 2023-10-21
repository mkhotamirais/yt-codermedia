import Add from "./pages/Add";
import Show from "./pages/Show";

const App = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <Add />
        </div>
        <div className="column">
          <Show />
        </div>
      </div>
    </div>
  );
};

export default App;
