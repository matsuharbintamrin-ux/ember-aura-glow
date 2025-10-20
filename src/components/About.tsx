import { Award, Leaf, Factory, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Produksi Efisien",
      description: "Fasilitas produksi yang tertata rapi dengan sistem kerja yang efektif.",
      color: "primary"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Peduli Lingkungan",
      description: "Proses pembuatan arang dilakukan secara ramah lingkungan dan berkelanjutan.",
      color: "secondary"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Mutu Terjamin",
      description: "Setiap produk melewati pengawasan ketat untuk menjaga kualitas terbaik.",
      color: "accent"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tim Handal",
      description: "Setiap proses dijalankan oleh orang-orang berpengalaman yang mengutamakan kualitas.",
      color: "primary"
    },

  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-primary">Perusahaan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami adalah produsen arang terkemuka yang berkomitmen menghadirkan 
            produk berkualitas tinggi dengan proses produksi yang ramah lingkungan dan berkelanjutan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}/10 text-${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-3xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Pengalaman Lebih dari 10 Tahun</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Melayani ribuan pelanggan di seluruh Indonesia dengan kepuasan dan kepercayaan 
            sebagai prioritas utama kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
