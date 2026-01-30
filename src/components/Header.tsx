"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaTruck, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCart } from "@/src/context/CartContext";
import "./Header.css";
import config from "@/src/data/config.json";

export default function Header() {
  const pathname = usePathname();
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCartCount(getTotalItems());
    setIsLoaded(true);
  }, [getTotalItems]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Offer Bar */}
      <div className="top-bar">
        <FaTruck className="truck-icon" />
        <span>
          Orders above <strong>₹{config.delivery.freeDeliveryThreshold}</strong> get{" "}
          <span className="free-badge">FREE DELIVERY</span>
        </span>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            <img src="/logo.png" alt="Maharaja Home Foods" />
            <div>
              <h1>Maharaja</h1>
              <p>Home Foods</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Cart */}
          <Link href="/cart" className="cart-link">
            <div className="cart">
              <FaShoppingCart />
              {isLoaded && cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}
