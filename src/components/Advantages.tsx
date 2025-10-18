import { CheckCircle2, TrendingUp, Shield, Clock, Truck, ThumbsUp } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Produk Bersertifikat",
      description: "Semua produk telah lolos uji standar kualitas nasional dan internasional"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Harga Kompetitif",
      description: "Harga terbaik di kelasnya dengan kualitas premium yang terjamin"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Pengiriman Cepat",
      description: "Layanan pengiriman ke seluruh Indonesia dengan packaging aman"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Stok Tersedia",
      description: "Kapasitas produksi besar dengan stok yang selalu ready untuk dikirim"
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: "Pelayanan Terbaik",
      description: "Customer service profesional siap membantu kebutuhan Anda 24/7"
    },
    {
      icon: <CheckCircle2 className="h-10 w-10" />,
      title: "Garansi Kualitas",
      description: "Jaminan produk berkualitas atau uang kembali 100%"
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mengapa Memilih <span className="text-accent">Kami?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kepercayaan pelanggan adalah prioritas utama kami. Berikut alasan mengapa ribuan 
            pelanggan memilih produk kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-accent/10 text-accent p-4 rounded-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-muted-foreground font-medium">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
              5000+
            </div>
            <div className="text-muted-foreground font-medium">Pelanggan Puas</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-muted-foreground font-medium">Garansi Kualitas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
