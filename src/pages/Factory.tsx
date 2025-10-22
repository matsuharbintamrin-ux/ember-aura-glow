import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import heroFactoryImage from "@/assets/hero-factory.jpg";
import factoryInteriorImage from "@/assets/factory-interior.jpg";
import processRawMaterialImage from "@/assets/process-raw-material.jpg";
import processCarbonizationImage from "@/assets/pembakaran.jpg";
import processMoldingImage from "@/assets/process-molding.jpg";
import processQualityControlImage from "@/assets/process-quality-control.jpg";
import processPackagingImage from "@/assets/process-packaging.jpg";

import {
  Factory as FactoryIcon,
  Users,
  Award,
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
      title: "Tungku Pembakaran Arang",
      description: "Lebih dari 10 tungku terawat yang digunakan untuk proses pembakaran tempurung kelapa secara teratur.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "Alat Pencetak Briket",
      description: "Mesin tekan berkapasitas besar untuk menghasilkan briket padat dan seragam setiap hari.",
      icon: <FactoryIcon className="h-6 w-6 text-secondary" />
    },
    {
      title: "Tempat Pemeriksaan Kualitas",
      description: "Setiap hasil produksi dicek secara teliti agar kualitas tetap terjaga sebelum dikemas.",
      icon: <Shield className="h-6 w-6 text-accent" />
    },
    {
      title: "Gudang Penyimpanan",
      description: "Area penyimpanan luas dan kering untuk menjaga arang tetap dalam kondisi baik sebelum dikirim.",
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
      <motion.section
        className="relative pt-24 pb-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Building2 className="h-4 w-4 mr-2" />
                Tentang Pabrik Kami
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fasilitas Pengolahan <span className="text-primary">Arang</span> yang Terjaga{" "}
                <span className="text-secondary">Mutunya</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Pabrik kami dijalankan dengan cara yang tertata dan dikelola oleh tenaga yang paham proses pembuatan arang.
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
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroFactoryImage}
                  alt="Pabrik Arang Modern"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white dark:bg-card p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">ISO Certified</p>
                    <p className="text-sm text-muted-foreground">Quality Assured</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Production Process */}
      <motion.section
        className="py-16 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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

          <motion.div
            className="max-w-6xl mx-auto space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {productionSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div
                    className={`grid md:grid-cols-2 gap-0 ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                  >
                    <div className={`${idx % 2 === 1 ? "md:col-start-2" : ""}`}>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                        <div className="bg-primary/10 p-3 rounded-full">{step.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-primary"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      <Footer />
    </div>
  );
};

export default Factory;
