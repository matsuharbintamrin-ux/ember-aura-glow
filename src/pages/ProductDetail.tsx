import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import briquetteImage from "@/assets/product-briquette.jpg";
import charcoalImage from "@/assets/product-charcoal.jpg";
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Package, 
  Truck, 
  Shield,
  Phone,
  Mail,
  ArrowLeft,
  Factory,
  Leaf,
  Award
} from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    "briket-arang": {
      name: "Briket Arang Premium",
      image: briquetteImage,
      icon: <Flame className="h-8 w-8" />,
      shortDesc: "Briket arang berkualitas tinggi dengan bentuk seragam, tahan lama, dan panas stabil",
      fullDesc: "Briket arang premium kami diproduksi menggunakan teknologi modern dan bahan baku pilihan. Setiap briket dirancang untuk memberikan pembakaran yang optimal dengan panas yang konsisten, cocok untuk berbagai keperluan industri dan komersial.",
      features: [
        "Pembakaran 3-4 jam",
        "Kalori tinggi 6500-7500 kcal/kg",
        "Minimal asap dan bau",
        "Ramah lingkungan",
        "Bentuk seragam",
        "Mudah dinyalakan"
      ],
      specifications: [
        { label: "Kadar Air", value: "< 8%" },
        { label: "Kadar Abu", value: "< 5%" },
        { label: "Nilai Kalori", value: "6500-7500 kcal/kg" },
        { label: "Waktu Bakar", value: "3-4 jam" },
        { label: "Bentuk", value: "Hexagonal / Persegi" },
        { label: "Ukuran", value: "Custom sesuai pesanan" }
      ],
      applications: [
        "Restoran dan café",
        "Industri BBQ dan panggang",
        "Industri makanan",
        "Shisha lounge",
        "Rumah tangga"
      ],
      packaging: [
        "Karung 20 kg",
        "Karung 25 kg",
        "Box 10 kg",
        "Kemasan custom"
      ]
    },
    "arang-tempurung": {
      name: "Arang Tempurung Kelapa",
      image: charcoalImage,
      icon: <Sparkles className="h-8 w-8" />,
      shortDesc: "Arang dari tempurung kelapa pilihan dengan kualitas premium dan pembakaran optimal",
      fullDesc: "Arang tempurung kelapa kami diproduksi dari tempurung kelapa pilihan yang diproses melalui sistem karbonisasi modern. Menghasilkan arang berkualitas tinggi dengan daya bakar optimal dan emisi rendah, ideal untuk kebutuhan ekspor dan industri.",
      features: [
        "100% alami",
        "Tanpa bahan kimia",
        "Panas merata dan stabil",
        "Kualitas ekspor",
        "Low ash content",
        "Fixed carbon tinggi"
      ],
      specifications: [
        { label: "Kadar Air", value: "< 6%" },
        { label: "Kadar Abu", value: "< 3%" },
        { label: "Fixed Carbon", value: "> 80%" },
        { label: "Volatile Matter", value: "< 15%" },
        { label: "Nilai Kalori", value: "7000-8000 kcal/kg" },
        { label: "Ukuran", value: "2-8 cm (custom)" }
      ],
      applications: [
        "Industri activated carbon",
        "Industri metalurgi",
        "BBQ premium",
        "Water filtration",
        "Ekspor internasional"
      ],
      packaging: [
        "Karung jumbo 500 kg",
        "Karung 50 kg",
        "Karung 25 kg",
        "Kontainer ekspor"
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-white/10"
            onClick={() => navigate("/#products")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Produk
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-3 rounded-full">
                  {product.icon}
                </div>
                <Badge variant="secondary" className="text-sm">
                  Produk Premium
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                {product.fullDesc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-primary">
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="h-5 w-5 mr-2" />
                  Minta Penawaran
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Keunggulan <span className="text-primary">Produk</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {product.features.map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Factory className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-bold">
                Spesifikasi <span className="text-secondary">Teknis</span>
              </h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                      <span className="font-semibold text-muted-foreground">{spec.label}</span>
                      <span className="font-bold text-lg">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications & Packaging */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Applications */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold">Aplikasi Penggunaan</h3>
                </div>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Packaging */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Pilihan Kemasan</h3>
                </div>
                <ul className="space-y-3">
                  {product.packaging.map((pack, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{pack}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mengapa Memilih <span className="text-secondary">Produk Kami?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Terjamin Kualitas</h3>
                  <p className="text-sm text-muted-foreground">
                    Produk telah tersertifikasi dan lolos quality control ketat
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold mb-2">Pengiriman Cepat</h3>
                  <p className="text-sm text-muted-foreground">
                    Pengiriman tepat waktu ke seluruh Indonesia
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Harga Kompetitif</h3>
                  <p className="text-sm text-muted-foreground">
                    Harga terbaik dengan kualitas premium
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              <Mail className="h-5 w-5 mr-2" />
              Request Katalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
