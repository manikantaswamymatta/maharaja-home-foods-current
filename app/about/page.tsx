import Footer from "../../src/components/Footer";
import "./AboutPage.css";


export const metadata = {
  title: "About Us | Maharaja Home Foods",
  description:
    "Learn about Maharaja Home Foods – authentic homemade Indian sweets crafted with love and tradition.",
};

export default function AboutPage() {
  return (
    <>
      {/* ================= OUR STORY ================= */}
      <section className="about-hero">
        <div className="about-text">
          <span className="pill">Our Story</span>
          <h1>The Royal Taste of Tradition</h1>

          <p>
            Welcome to Maharaja Home Foods, where every bite tells a story of
            tradition, love, and the finest ingredients. We are a family-owned
            business dedicated to bringing you the authentic flavors of
            traditional Indian cuisine.
          </p>

          <p>
            Our journey began in the heart of Draksharama, Andhra Pradesh, with a
            simple mission: to share the taste of home-cooked goodness with
            everyone. What started as making sweets for family gatherings has
            grown into a beloved brand serving customers across the region.
          </p>
        </div>

        <div className="about-image">
          <img src="/logo.jpg" alt="Maharaja Home Foods" />
          <div className="badge">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="values">
        <span className="pill center">Our Values</span>
        <h2>What Makes Us Special</h2>

        <div className="values-grid">
          <div className="value-card">
            <span className="icon">❤️</span>
            <h3>Made with Love</h3>
            <p>
              Every product is crafted with care and passion, just like homemade
              food should be.
            </p>
          </div>

          <div className="value-card">
            <span className="icon">🌿</span>
            <h3>Pure Ingredients</h3>
            <p>
              We use only the finest natural ingredients with no artificial
              additives or preservatives.
            </p>
          </div>

          <div className="value-card">
            <span className="icon">🏅</span>
            <h3>Quality Assured</h3>
            <p>
              Our products maintain the highest standards of quality and
              hygiene.
            </p>
          </div>

          <div className="value-card">
            <span className="icon">👨‍👩‍👧‍👦</span>
            <h3>Family Recipes</h3>
            <p>
              Traditional recipes passed down through generations, preserved
              for your enjoyment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="journey">
        <span className="pill center">Our Journey</span>
        <h2>A Decade of Delicious Memories</h2>

        <div className="timeline">
          <div>
            <h3>2014</h3>
            <strong>The Beginning</strong>
            <p>
              Started making sweets and snacks for family and friends.
            </p>
          </div>

          <div>
            <h3>2016</h3>
            <strong>Growing Demand</strong>
            <p>
              Word spread about our authentic taste, and orders started coming
              in.
            </p>
          </div>

          <div>
            <h3>2019</h3>
            <strong>Expanding Range</strong>
            <p>
              Added pickles, ghee, and honey to our product line.
            </p>
          </div>

          <div>
            <h3>2024</h3>
            <strong>Serving Thousands</strong>
            <p>
              Now proudly serving customers across Andhra Pradesh and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT (IMPROVED) ================= */}
      <section className="commitment">
        <div className="commitment-left">
          <span className="pill">Our Commitment</span>
          <h2>Quality You Can Trust</h2>

          <ul className="commitment-list">
            <li>Freshly prepared for every order</li>
            <li>Only premium quality ingredients</li>
            <li>Strict hygiene standards maintained</li>
            <li>No artificial colors or preservatives</li>
            <li>Traditional recipes, authentic taste</li>
            <li>Carefully packed for safe delivery</li>
          </ul>

          <button className="primary-btn">
            Explore Our Products →
          </button>
        </div>

        <div className="commitment-right">
          <div className="home-icon">🏠</div>
          <h3>Homemade with Love</h3>
          <p>From our kitchen to your home</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
