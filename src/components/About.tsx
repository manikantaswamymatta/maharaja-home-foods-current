"use client";

import Link from "next/link";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/logo.jpg" alt="Maharaja Home Foods" />

          <div className="experience-badge">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-pill">About Us</span>

          <h2>The Royal Taste of Tradition</h2>

          <p>
            At Maharaja Home Foods, we bring you the authentic flavors of
            traditional Indian cuisine, crafted with love and the finest
            ingredients. Our recipes have been passed down through generations,
            ensuring that every bite takes you back to the warmth of home
            cooking.
          </p>

          <ul className="about-points">
            <li>Traditional recipes passed down through generations</li>
            <li>100% natural and pure ingredients</li>
            <li>No artificial preservatives or colors</li>
            <li>Hygienically prepared with care</li>
            <li>Made fresh for every order</li>
          </ul>

          <Link href="/about" className="about-btn">
            Read Our Story <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
