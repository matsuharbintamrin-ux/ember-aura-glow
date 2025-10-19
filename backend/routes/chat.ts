import { Router } from "express";
import Database from "better-sqlite3";
import path from "path";
import { Mistral } from "@mistralai/mistralai";

const router = Router();

// Path ke database
const dbPath = path.resolve(__dirname, "../db.sqlite");
const db = new Database(dbPath);

// 🔥 Hardcode API Key sementara untuk Mistral AI
const MISTRAL_API_KEY = "McDIzH9qAkfvfcQQLzfuK4lY1GmXFeaF";
const client = new Mistral({ apiKey: MISTRAL_API_KEY });

// POST /chat
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ response: "Pesan tidak boleh kosong." });
  }

  try {
    console.log("🔹 Pesan dari user:", message);

    // Cari produk di database berdasarkan nama
    const product: any = db.prepare("SELECT * FROM products WHERE name = ?").get(message);

    if (product) {
      // Parse semua JSON field menjadi array string
      const features = Array.isArray(product.features) ? product.features : JSON.parse(product.features);
      const specifications = Array.isArray(product.specifications) ? product.specifications : JSON.parse(product.specifications);
      const applications = Array.isArray(product.applications) ? product.applications : JSON.parse(product.applications);
      const packaging = Array.isArray(product.packaging) ? product.packaging : JSON.parse(product.packaging);

      const botReply = `
Halo! Ini info tentang produk **${product.name}**:

Deskripsi: ${product.shortDesc}
Fitur: ${features.join(", ")}
Spesifikasi: ${specifications.join(", ")}
Aplikasi: ${applications.join(", ")}
Kemasan: ${packaging.join(", ")}

Jika ingin memesan atau menanyakan stok, silakan hubungi pabrik atau admin.
`;

      console.log("🔹 Bot reply (database):", botReply);
      return res.json({ response: botReply });
    }

    // Jika produk tidak ditemukan, fallback ke Mistral AI
    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: message }],
    });

    const botReply = chatResponse.choices?.[0]?.message?.content || "Maaf, Mistral AI belum merespon.";
    console.log("🔹 Bot reply (Mistral):", botReply);

    res.json({ response: botReply });

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ response: "Terjadi kesalahan di server." });
  }
});

export default router;
