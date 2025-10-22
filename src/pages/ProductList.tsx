import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Flame, Sparkles, Search } from "lucide-react";

// const BASE_URL = "http://farihul-server.space:4000";
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // contoh: http://farihul-server.space:4000

interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Gagal memuat produk");
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Produk Kami
          </motion.h1>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pilih produk terbaik sesuai kebutuhan Anda
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Search className="absolute left-3 top-3.5 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 text-lg bg-white/90 backdrop-blur-md border border-border rounded-xl shadow-md focus:ring-2 focus:ring-primary"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
              const productIcon =
                product.slug === "briket-arang" ? (
                  <Flame className="h-6 w-6 text-white" />
                ) : (
                  <Sparkles className="h-6 w-6 text-white" />
                );

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  <Card
                    className="cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    onClick={() => navigate(`/product/${product.slug}`)}
                  >
                    <div className="relative h-80 overflow-hidden rounded-t-xl group">
                      <img
                        src={`${BASE_URL}${product.image}`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary p-3 rounded-full shadow-lg">
                        {productIcon}
                      </div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-2xl mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.shortDesc}
                      </p>
                      <Badge>Produk Premium</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              className="col-span-full text-center text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Tidak ada produk yang cocok dengan pencarian Anda.
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductList;
