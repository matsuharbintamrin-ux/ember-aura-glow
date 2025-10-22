import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Flame, Sparkles, CheckCircle2, Package, Truck, Shield,
  Phone, Mail, Factory, Leaf, Award, ArrowLeft
} from "lucide-react";

//const BASE_URL = "http://localhost:4000/products";
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // contoh: http://farihul-server.space:4000

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

  const productIcon = product.slug === "briket-arang" 
    ? <Flame className="h-8 w-8" /> 
    : <Sparkles className="h-8 w-8" />;

  const handleContact = () => navigate("/contact");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <motion.section
        className="relative pt-24 pb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
            {/* Info */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-3 rounded-full">{productIcon}</div>
                <Badge variant="secondary" className="text-sm">Produk Premium</Badge>
              </div>
              <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {product.name}
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.fullDesc}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button size="lg" className="shadow-primary" onClick={handleContact}>
                  <Phone className="h-5 w-5 mr-2"/> 
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" onClick={handleContact}>
                  <Mail className="h-5 w-5 mr-2"/> 
                  Minta Penawaran
                </Button>
              </motion.div>
            </div>

            {/* Gambar */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src={`${BASE_URL}${product.image}`} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Keunggulan <span className="text-primary">Produk</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {product.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
                    <motion.div 
                      key={idx} 
                      className="flex justify-between items-center p-4 rounded-lg bg-muted/50"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-semibold text-muted-foreground">{spec.label}</span>
                      <span className="font-bold text-lg">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* APPLICATIONS & PACKAGING */}
      <motion.section
        className="py-16 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih <span className="text-secondary">Produk Kami?</span>
          </h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {[ 
              { icon: Shield, color: "primary", title: "Terjamin Kualitas", text: "Produk tersertifikasi dan lolos quality control ketat" },
              { icon: Truck, color: "secondary", title: "Pengiriman Cepat", text: "Pengiriman tepat waktu ke seluruh Indonesia" },
              { icon: Award, color: "accent", title: "Harga Kompetitif", text: "Harga terbaik dengan kualitas premium" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`bg-${item.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`h-8 w-8 text-${item.color}`} />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-gradient-primary text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="shadow-lg"
              onClick={handleContact}
            >
              <Phone className="h-5 w-5 mr-2"/> Hubungi Kami
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white"
              onClick={handleContact}
            >
              <Mail className="h-5 w-5 mr-2"/> Minta Penawaran
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
