import { NavLink } from "react-router-dom";


function NavBar () {
  return (
    <nav className="NavBar">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/chip">
        Chips
      </NavLink>
      <NavLink to="/soda">
        Soda
      </NavLink>
      <NavLink to="/sardine">
        Sardines
      </NavLink>
    </nav>
  );
}
export default NavBar;
