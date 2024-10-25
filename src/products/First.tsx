import { Link } from "react-router-dom";

export default function First() {
  return (
    <div>
      <p>Feature 1, page 1</p>
      <Link to="/products/1?color=red&size=medium">View Product 1 (Red, Medium)</Link>
    </div>
  );
}