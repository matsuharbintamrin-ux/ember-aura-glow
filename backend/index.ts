import express from "express";
import cors from "cors";
import path from "path";
import productsRouter from "./routes/products";
import chatRouter from "./routes/chat";

const app = express();

// ✅ CORS: izinkan domain frontend
app.use(cors({
  origin: ["https://farihul-server.space", "http://localhost:8080"], 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

// ✅ Parsing body JSON
app.use(express.json());

// ✅ Logging request
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ Mount router produk & chat di /api
app.use("/api/products", productsRouter);
app.use("/api/chat", chatRouter);

// ✅ Serve folder gambar
app.use("/images", express.static(path.join(__dirname, "images")));

// ✅ Default route
app.get("/api", (req, res) => {
  res.json({ message: "🔥 Backend API is running successfully!" });
});

// ✅ Jalankan server
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running at http://0.0.0.0:${PORT}`);
});
