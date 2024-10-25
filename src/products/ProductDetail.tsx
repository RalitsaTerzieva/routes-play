import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParameters] = useSearchParams();
  
  const color = searchParameters.get("color");
  const size = searchParameters.get("size");

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Color: {color || "N/A"}</p>
      <p>Size: {size || "N/A"}</p>
    </div>
  );
};

export default ProductDetail;