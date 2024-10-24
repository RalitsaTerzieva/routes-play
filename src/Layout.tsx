import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Main</Link>
        <span> | </span>
        <Link to="/products">Products</Link>
        <span> | </span>
        <Link to="/details">Details</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default Layout;