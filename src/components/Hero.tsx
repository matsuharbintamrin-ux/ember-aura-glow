import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-factory.jpg";
import { Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact"); // arahkan ke halaman contact
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground font-medium">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              Produsen Terpercaya
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Pabrik Arang & Briket
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Berkualitas Premium
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Memproduksi arang dan briket berkualitas tinggi dengan standar internasional.
            Ramah lingkungan, efisien, dan terpercaya untuk kebutuhan industri maupun rumah tangga.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-primary transition-all duration-300 hover:scale-105"
              onClick={handleContactClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
