import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  options?: string[]; // tombol pertanyaan
}

// Data produk / info kategori
const categories = {
  "Info Produk": [
    "Briket Arang Premium",
    "Arang Mangrove Premium",
    "Arang Tempurung Kelapa",
    "Briket Kayu Premium",
  ],
  "Cara Pesan": ["Pesan Online", "Pesan via Telpon", "Pesan Grosir"],
  "Lokasi Pabrik": ["Alamat Pabrik 1", "Alamat Pabrik 2"],
  "Pengiriman": ["Jabodetabek", "Luar Pulau", "Ekspedisi Terkait"],
};

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Selamat datang di Pabrik Arang & Briket. Silakan pilih info yang ingin diketahui:",
      sender: "bot",
      timestamp: new Date(),
      options: Object.keys(categories),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (text?: string) => {
    const userText = text || inputValue;
    if (!userText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      // Jika kategori utama dipilih, tampilkan list sub-kategori / produk
      if (categories[userText]) {
        const botMessage: Message = {
          id: messages.length + 2,
          text: `Silakan pilih ${userText}:`,
          sender: "bot",
          timestamp: new Date(),
          options: categories[userText],
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // Kirim ke backend untuk jawaban detail
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userText }),
        });

        const data = await res.json();
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.response || "Maaf, bot tidak merespon.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (err) {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Terjadi kesalahan saat menghubungi server.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-96 h-[500px] flex flex-col shadow-xl z-50 animate-slide-up border-chat-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-[hsl(var(--chat-primary))] to-[hsl(var(--chat-hover))] text-chat-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-xs text-white/80">
                  {loading ? "Bot sedang mengetik..." : "Online - Siap membantu Anda"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-white/20 text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-chat-secondary/30">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.sender === "user" ? "bg-gradient-to-r from-[hsl(var(--chat-primary))] to-[hsl(var(--chat-hover))] text-chat-primary-foreground" : "bg-chat-secondary border border-chat-border text-foreground"}`}>
                  <p className="text-sm">{message.text}</p>
                  <span className={`text-xs mt-1 block ${message.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                    {message.timestamp.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                  </span>

                  {/* Render opsi pertanyaan */}
                  {message.options && !loading && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.options.map((option, idx) => (
                        <Button key={idx} size="sm" variant="outline" onClick={() => handleSendMessage(option)}>
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[50%] rounded-2xl px-4 py-2 bg-chat-secondary border border-chat-border text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></div>
                  <span className="text-xs text-muted-foreground">Bot sedang mengetik...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-chat-border bg-background">
            <div className="flex gap-2">
              <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} placeholder="Ketik pesan Anda..." className="flex-1 border-chat-border focus:ring-chat-primary" />
              <Button onClick={() => handleSendMessage()} size="icon" className="bg-gradient-to-r from-[hsl(var(--chat-primary))] to-[hsl(var(--chat-hover))] hover:opacity-90 text-chat-primary-foreground">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button onClick={() => setIsOpen(!isOpen)} size="icon" className={`fixed bottom-6 right-4 md:right-8 w-14 h-14 rounded-full shadow-xl z-40 bg-gradient-to-r from-[hsl(var(--chat-primary))] to-[hsl(var(--chat-hover))] hover:opacity-90 text-chat-primary-foreground transition-all duration-300 ${!isOpen && "animate-pulse-subtle"}`}>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>}
      </Button>
    </>
  );
};
