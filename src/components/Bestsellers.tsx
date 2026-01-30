import "./BestSellers.css";
import ProductCard from "./ProductCard";
import productsData from "@/src/data/products.json";

export default function BestSellers() {
  // Get first 8 products across all categories
  const allProducts = productsData.categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );
  const featuredProducts = allProducts.slice(0, 8);

  return (
    <section className="bestsellers">
      <span className="pill">Featured Products</span>
      <h2>Our Bestsellers</h2>

      <div className="bestseller-grid">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <a href="/products" className="view-all">
        View All Products
      </a>
    </section>
  );
}
