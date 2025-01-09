import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink to="/" className="myList">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/chisiamo" className="myList">
            Chi siamo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="myList">
            Posts
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
