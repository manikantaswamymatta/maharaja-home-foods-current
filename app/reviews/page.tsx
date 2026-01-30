// app/reviews/page.tsx

import Footer from "@/src/components/Footer";
import "./ReviewsPage.css";
import { reviewsSection } from "./reviewsData";

export const metadata = {
  title: "Reviews | Maharaja Home Foods",
};

export default function ReviewsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="reviews-hero">
        <span className="tag">{reviewsSection.tag}</span>
        <h1>{reviewsSection.title}</h1>
        <p>{reviewsSection.subtitle}</p>

        <div className="stats">
          {reviewsSection.stats.map((stat, index) => (
            <div key={index} className="stat">
              <h2>{stat.value}</h2>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="reviews-grid">
        {reviewsSection.reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            <p className="comment">"{review.comment}"</p>

            <div className="author">
              <div className="avatar">{review.name.charAt(0)}</div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="reviews-cta">
        <h2>Ready to Experience the Difference?</h2>
        <p>
          Join hundreds of satisfied customers and taste the authentic flavors
          of traditional Indian foods.
        </p>

        <div className="cta-buttons">
          <a href="/products" className="btn primary">
            Order Now
          </a>
          <a href="/contact" className="btn secondary">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
