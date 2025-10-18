import { Router } from "express";
import Database from "better-sqlite3";
import path from "path";

const router = Router();
const dbPath = path.resolve(__dirname, "../db.sqlite");
const db = new Database(dbPath);

// CREATE TABLE kalau belum ada
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    name TEXT,
    image TEXT,
    shortDesc TEXT,
    fullDesc TEXT,
    features TEXT,
    specifications TEXT,
    applications TEXT,
    packaging TEXT
  )
`).run();

// GET all products
router.get("/", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products.map((p: any) => ({
    ...p,
    features: JSON.parse(p.features),
    specifications: JSON.parse(p.specifications),
    applications: JSON.parse(p.applications),
    packaging: JSON.parse(p.packaging),
  })));
});

// GET product by slug
router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const product: any = db.prepare("SELECT * FROM products WHERE slug = ?").get(slug);
  if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });

  res.json({
    ...product,
    features: JSON.parse(product.features),
    specifications: JSON.parse(product.specifications),
    applications: JSON.parse(product.applications),
    packaging: JSON.parse(product.packaging),
  });
});

export default router;
