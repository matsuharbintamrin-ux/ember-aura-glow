import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "db.sqlite");
const db = new Database(dbPath);

// Buat table kalau belum ada
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

// Produk sample
const products = [
  {
    slug: "briket-arang",
    name: "Briket Arang Premium",
    image: "/images/product-briquette.jpg",
    shortDesc: "Briket arang berkualitas tinggi dengan bentuk seragam, tahan lama, dan panas stabil",
    fullDesc: "Briket arang premium kami diproduksi menggunakan teknologi modern dan bahan baku pilihan. Setiap briket dirancang untuk memberikan pembakaran yang optimal dengan panas yang konsisten, cocok untuk berbagai keperluan industri dan komersial.",
    features: JSON.stringify([
      "Pembakaran 3-4 jam",
      "Kalori tinggi 6500-7500 kcal/kg",
      "Minimal asap dan bau",
      "Ramah lingkungan",
      "Bentuk seragam",
      "Mudah dinyalakan"
    ]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 8%" },
      { label: "Kadar Abu", value: "< 5%" },
      { label: "Nilai Kalori", value: "6500-7500 kcal/kg" },
      { label: "Waktu Bakar", value: "3-4 jam" },
      { label: "Bentuk", value: "Hexagonal / Persegi" },
      { label: "Ukuran", value: "Custom sesuai pesanan" }
    ]),
    applications: JSON.stringify([
      "Restoran dan café",
      "Industri BBQ dan panggang",
      "Industri makanan",
      "Shisha lounge",
      "Rumah tangga"
    ]),
    packaging: JSON.stringify([
      "Karung 20 kg",
      "Karung 25 kg",
      "Box 10 kg",
      "Kemasan custom"
    ])
  },
  {
    slug: "arang-tempurung",
    name: "Arang Tempurung Kelapa",
    image: "/images/product-charcoal.jpg",
    shortDesc: "Arang dari tempurung kelapa pilihan dengan kualitas premium dan pembakaran optimal",
    fullDesc: "Arang tempurung kelapa kami diproduksi dari tempurung kelapa pilihan yang diproses melalui sistem karbonisasi modern. Menghasilkan arang berkualitas tinggi dengan daya bakar optimal dan emisi rendah, ideal untuk kebutuhan ekspor dan industri.",
    features: JSON.stringify([
      "100% alami",
      "Tanpa bahan kimia",
      "Panas merata dan stabil",
      "Kualitas ekspor",
      "Low ash content",
      "Fixed carbon tinggi"
    ]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 6%" },
      { label: "Kadar Abu", value: "< 3%" },
      { label: "Fixed Carbon", value: "> 80%" },
      { label: "Volatile Matter", value: "< 15%" },
      { label: "Nilai Kalori", value: "7000-8000 kcal/kg" },
      { label: "Ukuran", value: "2-8 cm (custom)" }
    ]),
    applications: JSON.stringify([
      "Industri activated carbon",
      "Industri metalurgi",
      "BBQ premium",
      "Water filtration",
      "Ekspor internasional"
    ]),
    packaging: JSON.stringify([
      "Karung jumbo 500 kg",
      "Karung 50 kg",
      "Karung 25 kg",
      "Kontainer ekspor"
    ])
  }
];

// Insert produk (skip kalau sudah ada)
products.forEach(p => {
  const exists = db.prepare("SELECT 1 FROM products WHERE slug = ?").get(p.slug);
  if (!exists) {
    db.prepare(`
      INSERT INTO products
      (slug, name, image, shortDesc, fullDesc, features, specifications, applications, packaging)
      VALUES (@slug, @name, @image, @shortDesc, @fullDesc, @features, @specifications, @applications, @packaging)
    `).run(p);
    console.log(`Inserted: ${p.slug}`);
  } else {
    console.log(`Exists: ${p.slug}`);
  }
});

console.log("Seeding done!");
