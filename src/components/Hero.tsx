"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Hero.css";

interface HeroSlide {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  shopLink: string;
  learnLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: "Perfect Tea-Time Snacks",
    title: "Crispy Savouries",
    description: "Enjoy our crunchy mixture, janthikalu, and ribbon pakoda",
    image: "/savouries.png",
    shopLink: "/products",
    learnLink: "/about",
  },
  {
    id: 2,
    badge: "Made from Fresh Ingredients",
    title: "Authentic Pickles",
    description: "Traditional Andhra pickles - Avakaya, Gongura, and more",
    image: "/pickles.png",
    shopLink: "/products",
    learnLink: "/about",
  },
  {
    id: 3,
    badge: "Handcrafted with Love",
    title: "Traditional Indian Sweets",
    description: "Experience the authentic taste of homemade laddus, chikkis, and more",
    image: "/laddu.png",
    shopLink: "/products",
    learnLink: "/about",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="badge">{slide.badge}</span>

          <h1>{slide.title}</h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <Link href={slide.shopLink} className="btn-primary">
              Shop Now <span>→</span>
            </Link>
            <Link href={slide.learnLink} className="btn-outline">
              Learn More
            </Link>
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="hero-controls">
            <button
              className="arrow-btn left-arrow"
              onClick={handlePrevSlide}
              aria-label="Previous slide"
            >
              ‹
            </button>

            <div className="slide-dots">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="arrow-btn right-arrow"
              onClick={handleNextSlide}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <div className="ring">
            <img
              src={slide.image}
              alt={slide.title}
              className="slide-image"
            />
          </div>

          <div className="homemade">
            <strong>100%</strong>
            <span>Homemade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
