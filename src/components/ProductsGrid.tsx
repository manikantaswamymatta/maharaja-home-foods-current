"use client";

import productsData from "@/src/data/products.json";
import ProductCard from "./ProductCard";

export default function ProductsGrid({
  activeCategory,
}: {
  activeCategory: string;
}) {
  const allProducts = productsData.categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );

  const filteredProducts =
    activeCategory === "All Products"
      ? allProducts
      : allProducts.filter(
          (product) => product.category === activeCategory
        );

  return (
    <div className="products-content">
      <p>Showing {filteredProducts.length} products</p>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
