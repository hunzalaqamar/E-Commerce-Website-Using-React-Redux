import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { FetchProduct } from "./FetchProduct";

function ProductCategory() {
  FetchProduct();
  const products = useSelector((state) => state.allProducts.products);
  const filter = useSelector((state) => state.allProducts.filtered);
  if (filter.length < 1) {
    return <ProductCard productArray={products} />;
  } else {
    return <ProductCard productArray={filter} />;
  }
}
export default ProductCategory;
