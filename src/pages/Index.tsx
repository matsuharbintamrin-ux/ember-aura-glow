import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LiveChat } from "@/components/LiveChat"; // <- named import

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Konten halaman */}
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Contact />
      <Footer />

      {/* Live Chat selalu muncul di atas halaman */}
      <LiveChat />
    </div>
  );
};

export default Index;
