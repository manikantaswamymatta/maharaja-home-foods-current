import Link from "next/link";
import "./ReadyToOrder.css";
import config from "@/src/data/config.json";

export default function ReadyToOrder() {
  const whatsappLink = `https://wa.me/${config.businessInfo.whatsappNumber}?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(config.businessInfo.name)}%20products.`;
  const phoneLink = `tel:${config.businessInfo.phone}`;

  return (
    <section className="cta">
      <h2>Ready to Order?</h2>
      <p>
        Experience the authentic taste of traditional Indian foods. Order now and get fresh homemade delicacies delivered to your doorstep.
      </p>

      <div className="cta-buttons">
        <Link href="/products" className="cta-btn">Browse Products</Link>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-btn">Order on WhatsApp</a>
        <a href={phoneLink} className="cta-btn">Call Now</a>
      </div>
    </section>
  );
}
