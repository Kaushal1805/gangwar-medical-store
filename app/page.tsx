import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-col">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <AboutUs />
        <Services />
        <Categories />
        <Brands />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
