import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__link">
        <NavLink to="/women">Women</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/men">Men</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/collection">Collection</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/outlet">Outlet</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
