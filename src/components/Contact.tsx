import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      info: "+62 812-3991-1995",
      subInfo: "+62 821-9876-5432",
      color: "primary",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "info@suryagrisse.com",
      subInfo: "sales@suryagrisse.com",
      color: "secondary",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      info: "Cangaan, Kec. Ujungpangkah",
      subInfo: "Kabupaten Gresik, Jawa Timur 61154, Indonesia",
      color: "accent",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      info: "Senin - Sabtu: 08:00 - 17:00",
      subInfo: "Minggu: Libur",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami siap melayani kebutuhan arang dan briket Anda. Hubungi kami
            untuk konsultasi dan penawaran terbaik.
          </p>
        </div>

        {/* Info Kontak */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-${contact.color}/10 text-${contact.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                  {contact.title}
                </h3>
                <p className="font-semibold text-foreground">{contact.info}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {contact.subInfo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Siap Melayani Anda</h3>
                <p className="text-muted-foreground">
                  Dapatkan penawaran terbaik dan konsultasi gratis untuk
                  kebutuhan bisnis Anda.
                </p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark shadow-primary"
                  onClick={() =>
                    window.open(
                      "https://wa.me/6281239911995?text=Halo%20saya%20ingin%20memesan%20arang",
                      "_blank"
                    )
                  }
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Via WhatsApp
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                  onClick={() => navigate("/contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Email
                </Button>
              </div>

              {/* Footer Info */}
              <div className="mt-8 pt-8 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Pengiriman ke seluruh Indonesia
                  </span>{" "}
                  • Minimum order dan harga grosir tersedia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
