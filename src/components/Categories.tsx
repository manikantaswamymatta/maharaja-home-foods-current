import Link from "next/link";
import "./Categories.css";
import categories from "@/src/data/categories.json";

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories-container">
        <span className="pill">Our Collection</span>
        <h2>Explore Our Categories</h2>
        <p>
          Discover the authentic taste of traditional Indian foods crafted with love and the finest ingredients
        </p>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/products?category=${encodeURIComponent(cat.name)}`}
              className="category-card"
            >
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <h3>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
