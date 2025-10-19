import express from "express";
import cors from "cors";
import path from "path";
import productsRouter from "./routes/products";
import chatRouter from "./routes/chat";

const app = express();

// ✅ CORS
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Logging
app.use((req,res,next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ Routers
app.use("/products", productsRouter);
app.use("/chat", chatRouter);

// ✅ Serve images
app.use("/images", express.static(path.join(__dirname,"images")));

// ✅ Default route
app.get("/", (req,res) => {
  res.json({ message: "🔥 Backend API is running successfully!" });
});

// ✅ 404 fallback (AMAN)
app.use((req,res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Start server
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`✅ Backend running at http://0.0.0.0:${PORT}`);
});
