import { Factory, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Factory className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold">Pabrik Arang</div>
                <div className="text-xs text-muted-foreground">Briket Premium</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Produsen arang dan briket berkualitas tinggi untuk kebutuhan industri dan komersial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Produk</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Briket Arang Premium</li>
              <li className="text-muted-foreground">Arang Tempurung Kelapa</li>
              <li className="text-muted-foreground">Arang Kayu</li>
              <li className="text-muted-foreground">Custom Packaging</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-muted-foreground">+62 812-3456-7890</div>
                  <div className="text-muted-foreground">+62 821-9876-5432</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <div className="text-muted-foreground">info@suryagrisse.com</div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-muted-foreground">
                  Cangaan, Kec. Ujungpangkah<br />
                        subInfo: "Kabupaten Gresik, Jawa Timur 61154, Indonesia",
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pabrik Arang & Briket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
