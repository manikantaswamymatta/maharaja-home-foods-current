import Footer from "@/src/components/Footer";
import "./GalleryPage.css";
import { galleryImages } from "./galleryData";

export const metadata = {
  title: "Gallery | Maharaja Home Foods",
  description:
    "Explore our traditional homemade Indian sweets, snacks, pickles, ghee and honey.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="gallery-hero">
        <h1>A Visual Journey Through Our Delicacies</h1>
        <p>
          Explore the artistry behind our traditional foods — from preparation
          to perfection.
        </p>
      </section>

      <section className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div key={item.id} className="gallery-card">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
