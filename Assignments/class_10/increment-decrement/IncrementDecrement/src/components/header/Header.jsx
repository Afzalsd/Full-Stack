import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="nav justify-content-center bg-secondary fs-4">
        <li className="nav-item">
          <Link to="parent" className="nav-link text-white">
            Parent
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
