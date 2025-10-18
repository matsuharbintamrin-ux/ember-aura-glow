import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Flame, Sparkles, CheckCircle2, Package, Truck, Shield,
  Phone, Mail, Factory, Leaf, Award, ArrowLeft
} from "lucide-react";

const BASE_URL = "http://localhost:4000";

interface Specification {
  label: string;
  value: string;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specifications: Specification[];
  applications: string[];
  packaging: string[];
}

const ProductDetail = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Gagal memuat produk");
        const data: Product[] = await res.json();
        const found = data.find(p => p.slug === productSlug);
        if (!found) throw new Error("Produk tidak ditemukan");
        setProduct(found);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productSlug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error || !product) return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">{error || "Produk tidak ditemukan"}</h1>
        <Button onClick={() => navigate("/products")}>Kembali ke Produk</Button>
      </div>
    </div>
  );

  const productIcon = product.slug === "briket-arang" ? <Flame className="h-8 w-8" /> : <Sparkles className="h-8 w-8" />;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero 2 kolom */}
      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-white/10"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Produk
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Kiri: Info */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-3 rounded-full">{productIcon}</div>
                <Badge variant="secondary" className="text-sm">Produk Premium</Badge>
              </div>
              <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-8">{product.fullDesc}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-primary"><Phone className="h-5 w-5 mr-2"/> Hubungi Kami</Button>
                <Button size="lg" variant="outline"><Mail className="h-5 w-5 mr-2"/> Minta Penawaran</Button>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img src={`${BASE_URL}${product.image}`} alt={product.name} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-overlay opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Keunggulan <span className="text-primary">Produk</span></h2>
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
              <h2 className="text-3xl font-bold">Spesifikasi <span className="text-secondary">Teknis</span></h2>
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih <span className="text-secondary">Produk Kami?</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Terjamin Kualitas</h3>
                <p className="text-sm text-muted-foreground">Produk telah tersertifikasi dan lolos quality control ketat</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Pengiriman Cepat</h3>
                <p className="text-sm text-muted-foreground">Pengiriman tepat waktu ke seluruh Indonesia</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Harga Kompetitif</h3>
                <p className="text-sm text-muted-foreground">Harga terbaik dengan kualitas premium</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tertarik dengan Produk Kami?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan bisnis Anda</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg"><Phone className="h-5 w-5 mr-2"/> Hubungi Kami</Button>
            <Button size="lg" variant="outline" className="text-white border-white"><Mail className="h-5 w-5 mr-2"/> Minta Penawaran</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
