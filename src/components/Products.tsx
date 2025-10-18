import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:4000";

interface ProductType {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  iconType: "flame" | "sparkles";
}

const Products = ({ limit = 2 }: { limit?: number }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Gagal mengambil produk");
        const data: ProductType[] = await res.json();
        setProducts(limit ? data.slice(0, limit) : data); // ambil sesuai limit
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  if (loading) return <p className="text-center py-12">Loading...</p>;

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produk <span className="text-secondary">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Produk arang dan briket berkualitas tinggi yang telah dipercaya oleh ribuan pelanggan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`${BASE_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  {product.iconType === "flame" ? <Flame className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    Keunggulan Produk
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {f}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-4 group"
                    onClick={() => navigate(`/product/${product.slug}`)} // pakai slug
                  >
                    Lihat Detail Produk
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {limit && products.length >= limit && (
          <div className="mt-12 text-center">
            <Button onClick={() => navigate("/products")}>Lihat Semua Produk</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
