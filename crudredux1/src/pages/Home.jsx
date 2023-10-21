import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Link to="add" className={"mr-3"}>
          Add Product
        </Link>
        <Link to="show" className={"mr-3"}>
          Show Product
        </Link>
        <Link to="counter" className={"mr-3"}>
          Counter
        </Link>
        <Link to="counter2" className={"mr-3"}>
          Counter2
        </Link>
        <Link to="addShow" className={"mr-3"}>
          Add Show
        </Link>
        <Link to="edit" className={"mr-3"}>
          Edit
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
