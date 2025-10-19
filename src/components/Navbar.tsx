import { Button } from "@/components/ui/button";
import { Factory, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "#about" },
    { name: "Pabrik", href: "/factory" },
    { name: "Produk", href: "#products" },
    { name: "Keunggulan", href: "#advantages" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleContactClick = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Factory className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-lg leading-none">Surya Griise</div>
              <div className="text-xs text-muted-foreground">
                Briket Premium
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary hover:bg-primary-dark shadow-primary"
              onClick={handleContactClick}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              )
            )}
            <div className="px-4 pt-2">
              <Button
                className="w-full bg-primary hover:bg-primary-dark shadow-primary"
                onClick={handleContactClick}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
