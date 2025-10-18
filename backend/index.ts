import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";

const app = express();
app.use(cors());
app.use(express.json());

// Mount products router
app.use("/products", productsRouter);

// Serve images folder agar bisa diakses dari frontend
import path from "path";
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(4000, () => console.log("Backend running at http://localhost:4000"));
