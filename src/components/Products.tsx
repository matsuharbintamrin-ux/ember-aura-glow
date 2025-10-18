import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import briquetteImage from "@/assets/product-briquette.jpg";
import charcoalImage from "@/assets/product-charcoal.jpg";
import { Flame, Sparkles, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Briket Arang Premium",
      image: briquetteImage,
      description: "Briket arang berkualitas tinggi dengan bentuk seragam, tahan lama, dan panas stabil",
      features: [
        "Pembakaran 3-4 jam",
        "Kalori tinggi",
        "Minimal asap",
        "Ramah lingkungan"
      ],
      icon: <Flame className="h-6 w-6" />,
      color: "primary"
    },
    {
      name: "Arang Tempurung Kelapa",
      image: charcoalImage,
      description: "Arang dari tempurung kelapa pilihan dengan kualitas premium dan pembakaran optimal",
      features: [
        "100% alami",
        "Tanpa bahan kimia",
        "Panas merata",
        "Kualitas ekspor"
      ],
      icon: <Sparkles className="h-6 w-6" />,
      color: "secondary"
    },
  ];

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
            untuk berbagai kebutuhan industri dan komersial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 right-4 bg-${product.color} text-${product.color}-foreground p-3 rounded-full shadow-lg`}>
                  {product.icon}
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
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold">
            <Sparkles className="h-5 w-5" />
            Tersedia dalam berbagai ukuran dan kemasan sesuai kebutuhan
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
