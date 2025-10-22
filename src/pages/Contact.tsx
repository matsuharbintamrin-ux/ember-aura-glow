import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import contactHero from "@/assets/hero-factory.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative pt-24 pb-16 bg-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="mb-4">
              <MessageCircle className="h-4 w-4 mr-2" />
              Hubungi Kami
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mari <span className="text-primary">Terhubung</span> dan Bangun{" "}
              <span className="text-secondary">Kerjasama</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Tim kami siap membantu Anda untuk segala pertanyaan seputar
              produk, kerja sama bisnis, maupun kunjungan ke pabrik kami.
            </p>

            <Button size="lg" className="shadow-primary">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Sekarang
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeUp}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={contactHero}
                alt="Hubungi Kami"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        className="py-16 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-primary" />,
              title: "Alamat",
              text: "Kawasan Industri Jl. Raya Industri No.123, Kota Besar, Indonesia",
            },
            {
              icon: <Phone className="h-8 w-8 text-secondary" />,
              title: "Telepon",
              text: (
                <>
                  <p>+62 812-3456-7890</p>
                  <p>+62 21-555-4321 (Kantor)</p>
                </>
              ),
            },
            {
              icon: <Mail className="h-8 w-8 text-accent" />,
              title: "Email",
              text: (
                <>
                  <p>factory@charcoal-premium.com</p>
                  <p>sales@charcoal-premium.com</p>
                </>
              ),
            },
          ].map((info, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <div className="text-muted-foreground">{info.text}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kirim <span className="text-primary">Pesan</span> Kepada Kami
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Silakan isi formulir berikut, tim kami akan segera menghubungi
              Anda kembali.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form
                  className="grid md:grid-cols-2 gap-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2">
                    <label className="font-semibold" htmlFor="name">
                      Nama Lengkap
                    </label>
                    <Input id="name" placeholder="Masukkan nama Anda" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-semibold" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contoh@email.com"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-semibold" htmlFor="message">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tuliskan pesan atau pertanyaan Anda..."
                      required
                    />
                  </div>
                  <div className="md:col-span-2 text-right">
                    <Button type="submit" size="lg" className="shadow-primary">
                      <Send className="h-5 w-5 mr-2" />
                      Kirim Pesan
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="py-16 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Lokasi Pabrik Kami</h2>
            <p className="text-muted-foreground">
              Kunjungi pabrik kami dan lihat langsung proses produksi
            </p>
          </div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg h-[450px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9465239335797!2d110.40038587591605!3d-7.796566477641993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5837e3cbbcf5%3A0x1c5a3a7c84b97d1b!2sYogyakarta!5e0!3m2!1sen!2sid!4v1696957653123!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-gradient-primary text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Kami terbuka untuk kolaborasi jangka panjang dan kemitraan global.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="shadow-lg"
            onClick={() =>
              (window.location.href = "mailto:factory@charcoal-premium.com")
            }
          >
            Hubungi Kami
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;
