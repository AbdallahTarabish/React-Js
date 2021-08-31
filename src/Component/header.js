import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/api">API</Link>
      <Link to="/laravel">Laravel</Link>
      <Link to="/php">PHP</Link>
    </div>
  );
}

export default Header;
