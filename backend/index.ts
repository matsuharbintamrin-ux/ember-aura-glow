import express from "express";
import cors from "cors";
import path from "path";
import productsRouter from "./routes/products";
import chatRouter from "./routes/chat";

const app = express();

// ✅ CORS fix agar frontend lokal / ngrok bisa akses
app.use(cors({
  origin: "*", // kamu bisa ganti ke domain tertentu kalau sudah deploy
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Parsing body JSON
app.use(express.json());

// ✅ Logging request
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ Mount router produk
app.use("/products", productsRouter);
app.use("/chat", chatRouter);

// ✅ Serve folder gambar agar bisa diakses dari frontend
app.use("/images", express.static(path.join(__dirname, "images")));

// ✅ Default route (tes server)
app.get("/", (req, res) => {
  res.json({ message: "🔥 Backend API is running successfully!" });
});

// ✅ Jalankan server


const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running at http://0.0.0.0:${PORT}`);
});
