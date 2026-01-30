import Link from "next/link";
import "./Footer.css";
import config from "@/src/data/config.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{config.businessInfo.name}</h3>
          <p>
            {config.businessInfo.tagline}
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>📞 {config.businessInfo.phone}</p>
          <p>✉️ {config.businessInfo.email}</p>
          <p>📍 {config.businessInfo.address}</p>
          <p>📸 {config.businessInfo.instagram}</p>
        </div>

        <div>
          <h4>Business Hours</h4>
          <p>{config.businessHours.weekdays}</p>
          <p>{config.businessHours.saturday}</p>
          <p>{config.businessHours.sunday}</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 {config.businessInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
