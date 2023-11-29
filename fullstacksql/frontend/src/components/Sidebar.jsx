import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoHome, IoLogOut, IoPerson, IoPricetag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../pages/roles/roleSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.roles);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/rolesProducts/login");
  };

  return (
    <section className="columns" style={{ minHeight: "100vh" }}>
      <div className="column is-2">
        <aside className="menu s-shadow pl-2 pt-3">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <NavLink to="/rolesProducts">
                <IoHome /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="products">
                <IoPricetag /> Products
              </NavLink>
            </li>
          </ul>
          {user && user.role === "admin" && (
            <>
              <p className="menu-label">Admin</p>
              <ul className="menu-list">
                <li>
                  <NavLink to="users">
                    <IoPerson /> Users
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          <p className="menu-label">Settings</p>
          <ul className="menu-list">
            <li>
              <button onClick={logout} className="button is-white">
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </aside>
      </div>
      <div className="column has-background-light">
        <Outlet />
      </div>
    </section>
  );
};

export default Sidebar;
