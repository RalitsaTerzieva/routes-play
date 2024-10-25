import { Link } from "react-router-dom";

export default function Second() {
  return (
    <div>
      <p>Feature 1, page 2</p>
      <Link to="/products/2?color=blue&size=large">View Product 2 (Blue, Large)</Link>
    </div>
  );
}