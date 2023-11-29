import { Link, NavLink } from "react-router-dom";
import Logout from "../pages/usersAuth/Logout";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar is-bordered is-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </NavLink>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/users" className="navbar-item">
              User
            </NavLink>
            <NavLink to="/products" className="navbar-item">
              Products
            </NavLink>
            <NavLink to="/usersAuth" className="navbar-item">
              UsersAuth
            </NavLink>
            <NavLink to="/rolesProducts" className="navbar-item">
              RolesProducts
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/login" className="button is-light">
                  Login UsersAuth
                </Link>
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
