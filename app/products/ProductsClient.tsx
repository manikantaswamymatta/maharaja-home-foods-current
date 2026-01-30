"use client";

import React, { useState, useEffect } from "react";
import productsData from "@/src/data/products.json";
import { useCart } from "@/src/context/CartContext";
import "./ProductsClient.css";

export default function ProductsClient() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSize, setSelectedSize] = useState<Record<number, string>>({});
  const [addedNotification, setAddedNotification] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ensure component only renders on client
  useEffect(() => {
    try {
      setIsClient(true);
    } catch (err) {
      setError("Failed to load products. Please refresh the page.");
      console.error(err);
    }
  }, []);

  const categories = [
    "All Items",
    ...productsData.categories.map((c) => c.category),
  ];

  const allProducts = productsData.categories.flatMap((c) =>
    c.items.map((i) => ({ ...i, category: c.category }))
  );

  const filtered =
    selectedCategory === "All Items"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const getSelectedSize = (productIndex: number): string => {
    if (!selectedSize[productIndex]) {
      const sizes = Object.keys(filtered[productIndex]?.prices || {});
      return sizes[0] || "250g";
    }
    return selectedSize[productIndex];
  };

  const handleSizeChange = (productIndex: number, size: string) => {
    setSelectedSize({ ...selectedSize, [productIndex]: size });
  };

  const handleAddToCart = (product: any, index: number) => {
    const selectedWeight = getSelectedSize(index);
    const price = product.prices[selectedWeight as keyof typeof product.prices];

    addToCart({
      name: product.name,
      image: product.image,
      price: price,
      weight: selectedWeight,
      category: product.category,
    });

    setAddedNotification(index);
    setTimeout(() => setAddedNotification(null), 2000);
  };

  const closeSidebar = () => {
    setShowFilters(false);
  };

  return (
    <div className="products-page">
      <div className="products-header-section">
        <h1 className="products-main-title">Our Products</h1>
        <p className="products-main-subtitle">
          Authentic homemade Indian sweets, snacks, and pickles
        </p>
      </div>

      {error && (
        <div style={{ textAlign: "center", padding: "40px", color: "#d32f2f", fontSize: "16px" }}>
          {error}
        </div>
      )}

      {!isClient ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
          Loading products...
        </div>
      ) : (
        <div className="products-container">
          <div
            className="sidebar-wrapper"
            style={
              showFilters ? { opacity: 1, pointerEvents: "auto" } : undefined
            }
          >
            <div className="sidebar-overlay" onClick={closeSidebar}></div>

            <div className="products-sidebar">
              <div className="sidebar-header">
                <h3>Categories</h3>
                <button className="sidebar-close-btn" onClick={closeSidebar}>
                  ✕
                </button>
              </div>

              <div className="categories-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="products-main">
            <div className="products-top-bar">
              <button
                className="show-filters-btn"
                onClick={() => setShowFilters(true)}
              >
                ☰ Filters
              </button>
              <p className="product-count">Showing {filtered.length} products</p>
            </div>

            <div className="products-grid">
              {filtered.length === 0 ? (
                <div className="no-products-message">
                  No products found in {selectedCategory}
                </div>
              ) : (
                filtered.map((product, index) => {
                  const sizes = Object.keys(product.prices);
                  const selectedSizeKey = getSelectedSize(index);
                  return (
                    <div
                      key={`${product.name}-${index}`}
                      className="product-card"
                    >
                      <div className="product-image-container">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-image"
                        />
                      </div>

                      <div className="product-content">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-description">
                          {product.description || ""}
                        </p>

                        <div className="size-options">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              className={`size-option ${
                                selectedSizeKey === size ? "active" : ""
                              }`}
                              onClick={() => handleSizeChange(index, size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>

                        <div className="product-footer">
                          <div className="product-price">
                            ₹
                            {
                              product.prices[
                                selectedSizeKey as keyof typeof product.prices
                              ]
                            }
                          </div>
                          <button
                            className={`add-product-btn ${
                              addedNotification === index ? "added" : ""
                            }`}
                            onClick={() => handleAddToCart(product, index)}
                          >
                            {addedNotification === index
                              ? "✓ Added"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
