"use client";

const categories = [
  { name: "All Products", icon: "" },
  { name: "Sweets", icon: "🌾" },
  { name: "Hot Items / Savouries", icon: "🥘" },
  { name: "Pickles", icon: "🌶️" },
  { name: "Ghee", icon: "🥄" },
  { name: "Honey", icon: "🍯" },
];

export default function ProductCategories({
  activeCategory,
  onChange,
}: {
  activeCategory: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="categories-list">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={activeCategory === cat.name ? "category-btn active" : "category-btn"}
          onClick={() => onChange(cat.name)}
        >
          {cat.icon && <span className="category-icon">{cat.icon}</span>}
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
