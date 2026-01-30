"use client";

import Link from "next/link";
import { useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    text:
      "The laddus taste exactly like my grandmother used to make. Truly authentic and delicious!",
    name: "Lakshmi Devi",
    location: "Rajahmundry",
  },
  {
    text:
      "Best quality pickles I have ever tasted. The Avakaya is absolutely amazing!",
    name: "Venkat Rao",
    location: "Hyderabad",
  },
  {
    text:
      "The cow ghee is pure and aromatic. My whole family loves it. Highly recommended!",
    name: "Padma Kumari",
    location: "Vijayawada",
  },
  {
    text:
      "Fresh and tasty snacks. The mixture and janthikalu are our favorites for evening tea.",
    name: "Suresh Kumar",
    location: "Kakinada",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((index + 1) % reviews.length);

  return (
    <section className="testimonials">
      <span className="test-pill">Testimonials</span>
      <h2>What Our Customers Say</h2>

      <div className="testimonial-card">
        <div className="stars">★★★★★</div>

        <p className="review-text">"{reviews[index].text}"</p>

        <div className="reviewer">
          <strong>{reviews[index].name}</strong>
          <span>{reviews[index].location}</span>
        </div>
      </div>

      <div className="controls">
        <button onClick={prev}>‹</button>

        <div className="dots">
          {reviews.map((_, i) => (
            <span key={i} className={i === index ? "active" : ""} />
          ))}
        </div>

        <button onClick={next}>›</button>
      </div>

      <Link href="/reviews" className="see-all">See All Reviews</Link>
    </section>
  );
}
