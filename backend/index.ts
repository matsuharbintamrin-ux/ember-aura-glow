import express from "express";
import cors from "cors";
import path from "path";
import productsRouter from "./routes/products";
import chatRouter from "./routes/chat";

const app = express();

// ✅ CORS fix agar frontend bisa akses
app.use(cors({
  origin: "*", // Bisa diganti ke domain tertentu setelah deploy
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Handle preflight request (OPTIONS)
app.options("*", cors());

// ✅ Parsing body JSON
app.use(express.json());

// ✅ Logging request
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ Mount router produk & chat
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
