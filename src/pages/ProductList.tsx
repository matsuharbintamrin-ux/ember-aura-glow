import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Flame, Sparkles, Search } from "lucide-react";

const BASE_URL = "http://farihul-server.space:4000";

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

  const filteredProducts = products.filter((product) =>
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
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Produk Kami</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Pilih produk terbaik sesuai kebutuhan Anda
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3.5 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 text-lg bg-white/90 backdrop-blur-md border border-border rounded-xl shadow-md focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
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
            })
          ) : (
            <div className="col-span-full text-center text-muted-foreground text-lg">
              Tidak ada produk yang cocok dengan pencarian Anda.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductList;
