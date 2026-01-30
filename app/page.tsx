import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Categories from "@/src/components/Categories";
import BestSellers from "@/src/components/Bestsellers";
import AboutSection from "@/src/components/About";
import Testimonials from "@/src/components/Testimonials";
import ReadyToOrder from "@/src/components/ReadyToOrder";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <AboutSection />
      <Testimonials />
      <ReadyToOrder />
      <Footer />
    </>
  );
}
