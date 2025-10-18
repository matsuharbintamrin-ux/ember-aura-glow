import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroFactoryImage from "@/assets/hero-factory.jpg";
import factoryInteriorImage from "@/assets/factory-interior.jpg";
import processRawMaterialImage from "@/assets/process-raw-material.jpg";
import processCarbonizationImage from "@/assets/process-carbonization.jpg";
import processMoldingImage from "@/assets/process-molding.jpg";
import processQualityControlImage from "@/assets/process-quality-control.jpg";
import processPackagingImage from "@/assets/process-packaging.jpg";
import {
  Factory as FactoryIcon,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Zap,
  Shield,
  Leaf,
  Target,
  CheckCircle2,
  ArrowRight,
  Building2,
  Gauge,
  Globe
} from "lucide-react";

const Factory = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Calendar className="h-8 w-8" />, value: "15+", label: "Tahun Berpengalaman" },
    { icon: <Gauge className="h-8 w-8" />, value: "500+", label: "Ton/Bulan Kapasitas" },
    { icon: <Users className="h-8 w-8" />, value: "100+", label: "Tenaga Kerja Terampil" },
    { icon: <Globe className="h-8 w-8" />, value: "20+", label: "Negara Ekspor" }
  ];

  const productionSteps = [
    {
      number: "01",
      title: "Pemilihan Bahan Baku",
      description: "Tempurung kelapa pilihan diseleksi dengan ketat untuk memastikan kualitas optimal. Hanya bahan baku terbaik yang lolos quality control kami.",
      image: processRawMaterialImage,
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Proses Karbonisasi",
      description: "Pembakaran tempurung kelapa dalam tungku modern dengan kontrol suhu presisi. Proses ini menghasilkan arang dengan fixed carbon tinggi.",
      image: processCarbonizationImage,
      icon: <Zap className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Pencetakan & Pembentukan",
      description: "Arang yang telah diproses dibentuk menjadi briket dengan mesin press hidrolik modern. Hasil cetakan seragam dan berkualitas tinggi.",
      image: processMoldingImage,
      icon: <FactoryIcon className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Setiap batch produk melalui pengujian laboratorium ketat meliputi kadar air, abu, kalori, dan fixed carbon sesuai standar internasional.",
      image: processQualityControlImage,
      icon: <Shield className="h-6 w-6" />
    },
    {
      number: "05",
      title: "Pengemasan & Distribusi",
      description: "Produk dikemas dengan standar ekspor menggunakan material berkualitas. Sistem gudang modern memastikan produk tetap prima hingga sampai ke pelanggan.",
      image: processPackagingImage,
      icon: <CheckCircle2 className="h-6 w-6" />
    }
  ];

  const facilities = [
    {
      title: "Tungku Karbonisasi Modern",
      description: "10+ unit tungku dengan sistem kontrol suhu otomatis",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Mesin Press Hidrolik",
      description: "Kapasitas produksi 50 ton briket per hari",
      icon: <FactoryIcon className="h-6 w-6 text-secondary" />
    },
    {
      title: "Laboratorium Testing",
      description: "Peralatan uji kualitas berstandar internasional",
      icon: <Shield className="h-6 w-6 text-accent" />
    },
    {
      title: "Gudang Modern",
      description: "Area penyimpanan 5000m² dengan kontrol kelembaban",
      icon: <Building2 className="h-6 w-6 text-primary" />
    }
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "HACCP - Food Safety",
    "Sertifikat Ekspor",
    "Sertifikat Halal",
    "SNI (Standar Nasional Indonesia)"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Building2 className="h-4 w-4 mr-2" />
                Tentang Pabrik Kami
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fasilitas Produksi <span className="text-primary">Modern</span> dengan Standar <span className="text-secondary">Internasional</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Pabrik kami dilengkapi dengan teknologi terkini dan dikelola oleh tim profesional berpengalaman. Kami berkomitmen menghasilkan produk arang dan briket berkualitas premium dengan standar keamanan dan lingkungan yang ketat.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-primary">
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline">
                  <Calendar className="h-5 w-5 mr-2" />
                  Kunjungi Pabrik
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroFactoryImage} 
                  alt="Pabrik Arang Modern"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-card p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">ISO Certified</p>
                    <p className="text-sm text-muted-foreground">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Profil <span className="text-primary">Pabrik</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Pabrik kami berlokasi strategis dengan akses mudah ke pelabuhan untuk ekspor internasional
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Lokasi Strategis</h3>
                      <p className="text-muted-foreground">
                        Kawasan Industri Jl. Raya Industri No. 123, Kota Besar, Indonesia. Dekat dengan pelabuhan dan jalur distribusi utama.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>factory@charcoal-premium.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="h-full rounded-lg overflow-hidden">
                  <img 
                    src={factoryInteriorImage} 
                    alt="Interior Pabrik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                    <p className="text-white/90">
                      Menjadi produsen arang dan briket terkemuka di Asia Tenggara dengan standar kualitas internasional dan komitmen terhadap keberlanjutan lingkungan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Menghasilkan produk berkualitas tinggi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Menerapkan teknologi ramah lingkungan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Memberdayakan masyarakat lokal</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proses <span className="text-secondary">Produksi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Setiap tahap produksi dilakukan dengan standar tinggi untuk menghasilkan produk berkualitas premium
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {productionSteps.map((step, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-6xl font-bold text-primary/20">
                        {step.number}
                      </div>
                      <div className="bg-primary/10 p-3 rounded-full">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fasilitas & <span className="text-accent">Teknologi</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Peralatan modern dan fasilitas lengkap untuk mendukung produksi berkualitas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {facilities.map((facility, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-3 rounded-full flex-shrink-0">
                        {facility.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                        <p className="text-muted-foreground">{facility.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sertifikasi & <span className="text-accent">Penghargaan</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Komitmen kami terhadap kualitas dan standar internasional
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="font-semibold">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-accent text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Komitmen Lingkungan</h2>
                </div>
                <p className="text-white/90 text-lg mb-6">
                  Kami menerapkan prinsip produksi berkelanjutan dengan memanfaatkan limbah organik dan mengurangi emisi karbon. Setiap tahun kami menanam 10,000+ pohon untuk kompensasi karbon.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-2">100%</p>
                    <p className="text-white/80">Bahan Organik</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-2">-60%</p>
                    <p className="text-white/80">Emisi Karbon</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold mb-2">10K+</p>
                    <p className="text-white/80">Pohon/Tahun</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tertarik Mengunjungi Pabrik Kami?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Kami dengan senang hati menerima kunjungan untuk melihat langsung proses produksi dan fasilitas kami
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-lg">
              <Calendar className="h-5 w-5 mr-2" />
              Jadwalkan Kunjungan
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              onClick={() => navigate("/")}
            >
              Lihat Produk Kami
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Factory;
