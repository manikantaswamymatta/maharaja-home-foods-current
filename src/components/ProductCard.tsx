"use client";

import { useState } from "react";
import { useCart } from "@/src/context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();
  const weightOptions = Object.keys(product.prices);
  const [selectedWeight, setSelectedWeight] = useState(
    weightOptions[1] || weightOptions[0]
  );
  const [addedNotification, setAddedNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      image: product.image,
      price: product.prices[selectedWeight],
      weight: selectedWeight,
      category: product.category || "Sweets",
    });

    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />

      <h3>{product.name}</h3>

      <p className="description">{product.description}</p>

      <div className="weights">
        {weightOptions.map((weight) => (
          <button
            key={weight}
            className={selectedWeight === weight ? "active" : ""}
            onClick={() => setSelectedWeight(weight)}
          >
            {weight}
          </button>
        ))}
      </div>

      <div className="price">
        ₹{product.prices[selectedWeight]} / {selectedWeight}
      </div>

      <button
        className={`add-btn ${addedNotification ? "added" : ""}`}
        onClick={handleAddToCart}
      >
        {addedNotification ? "✓ Added" : "Add"}
      </button>
    </div>
  );
}
