import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <ul className="nav d-flex justify-content-center gap-5  ">
        <li>
          <NavLink to="/" className="myList major-mono-display-regular">
            -Home-
          </NavLink>
        </li>

        <li>
          <NavLink to="/chisiamo" className="myList major-mono-display-regular">
            -Chi siamo-
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="myList major-mono-display-regular">
            -Posts-
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
