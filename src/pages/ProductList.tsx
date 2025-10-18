import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Sparkles } from "lucide-react";

const BASE_URL = "http://localhost:4000";

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
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Produk Kami</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Pilih produk terbaik sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {products.map((product) => {
            const productIcon =
              product.slug === "briket-arang" ? (
                <Flame className="h-6 w-6 text-white" />
              ) : (
                <Sparkles className="h-6 w-6 text-white" />
              );

            return (
              <Card
                key={product.id}
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
                  <h3 className="font-bold text-2xl mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.shortDesc}
                  </p>
                  <Badge>Produk Premium</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductList;
