import Database from "better-sqlite3";
import path from "path";

// Tentukan path database SQLite
const dbPath = path.resolve(__dirname, "db.sqlite");
const db = new Database(dbPath);

// 🧱 Buat tabel kalau belum ada
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

console.log("✅ Tabel products siap!");

// 🧹 Hapus hanya 8 data terbaru (biar 2 produk pertama tetap aman)
db.prepare(`
  DELETE FROM products
  WHERE id IN (SELECT id FROM products ORDER BY id DESC LIMIT 8)
`).run();
console.log("🧹 8 produk terbaru dihapus (produk lama tetap aman)!");

// 🧩 Data produk baru
const newProducts = [
  {
    slug: "arang-mangrove",
    name: "Arang Mangrove Premium",
    image: "/images/product-mangrove.jpg",
    shortDesc: "Arang dari kayu mangrove pilihan, pembakaran optimal",
    fullDesc:
      "Arang mangrove kami diproduksi dari kayu mangrove alami yang dipilih secara selektif dan melalui proses karbonisasi suhu tinggi. Menghasilkan arang dengan panas stabil, emisi rendah, dan daya bakar lama. Cocok untuk keperluan industri, restoran, maupun ekspor karena kualitasnya yang konsisten dan bersih.",
    features: JSON.stringify([
      "100% alami",
      "Bau minim",
      "Panas merata",
      "Kualitas ekspor",
    ]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 7%" },
      { label: "Kadar Abu", value: "< 4%" },
      { label: "Fixed Carbon", value: "> 78%" },
    ]),
    applications: JSON.stringify(["BBQ", "Industri makanan", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 25 kg", "Box 10 kg", "Custom"]),
  },
  {
    slug: "briket-kayu",
    name: "Briket Kayu Premium",
    image: "/images/product-wood-briquette.jpg",
    shortDesc: "Briket kayu alami, mudah dibakar dan tahan lama",
    fullDesc:
      "Briket kayu kami dibuat dari serbuk kayu alami tanpa bahan kimia tambahan, dipadatkan menggunakan tekanan tinggi. Hasilnya adalah briket dengan bentuk seragam, daya bakar lama, dan panas yang stabil. Ideal untuk kebutuhan rumah tangga, restoran, maupun kegiatan industri kecil.",
    features: JSON.stringify(["Kalori tinggi", "Bentuk seragam", "Minimal asap"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 8%" },
      { label: "Nilai Kalori", value: "6500-7000 kcal/kg" },
    ]),
    applications: JSON.stringify(["Rumah tangga", "BBQ", "Industri"]),
    packaging: JSON.stringify(["Karung 20 kg", "Box 10 kg"]),
  },
  {
    slug: "arang-bambu",
    name: "Arang Bambu Premium",
    image: "/images/product-bamboo.jpg",
    shortDesc: "Arang bambu berkualitas tinggi, panas optimal",
    fullDesc:
      "Arang bambu kami diproduksi dari bambu tua pilihan dengan proses karbonisasi tertutup untuk menjaga kemurnian dan kualitasnya. Memiliki panas pembakaran yang merata, rendah asap, dan ramah lingkungan. Cocok untuk BBQ, restoran, maupun kebutuhan ekspor ke berbagai negara.",
    features: JSON.stringify(["100% alami", "Panas stabil", "Asap rendah"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 6%" },
      { label: "Fixed Carbon", value: "> 75%" },
    ]),
    applications: JSON.stringify(["BBQ", "Industri makanan", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 25 kg", "Box 10 kg"]),
  },
  {
    slug: "briket-arang-kelapa",
    name: "Briket Arang Kelapa",
    image: "/images/product-coconut-briquette.jpg",
    shortDesc: "Briket arang dari tempurung kelapa, ramah lingkungan",
    fullDesc:
      "Briket arang kelapa ini dibuat dari tempurung kelapa alami melalui proses karbonisasi dan pemadatan modern. Memberikan panas tinggi yang stabil dan durasi bakar panjang tanpa menghasilkan asap berlebihan. Sangat direkomendasikan untuk BBQ, restoran, dan keperluan rumah tangga.",
    features: JSON.stringify([
      "Ramah lingkungan",
      "Minimal asap",
      "Bentuk seragam",
    ]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 7%" },
      { label: "Nilai Kalori", value: "6800-7200 kcal/kg" },
    ]),
    applications: JSON.stringify(["BBQ", "Restoran", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 20 kg", "Box 10 kg"]),
  },
  {
    slug: "arang-jati",
    name: "Arang Kayu Jati",
    image: "/images/product-teak.jpg",
    shortDesc: "Arang dari kayu jati pilihan, panas maksimal",
    fullDesc:
      "Arang kayu jati kami dibuat dari kayu jati tua yang dikeringkan dan dikarbonisasi dengan suhu tinggi. Menghasilkan arang dengan panas pembakaran tinggi, stabil, dan minim residu abu. Sangat cocok untuk penggunaan industri, restoran, hingga kebutuhan rumah tangga premium.",
    features: JSON.stringify(["Panas tinggi", "Asap rendah", "100% alami"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 6%" },
      { label: "Fixed Carbon", value: "> 80%" },
    ]),
    applications: JSON.stringify(["BBQ", "Industri makanan", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 25 kg", "Box 10 kg"]),
  },
  {
    slug: "briket-arang-mangrove",
    name: "Briket Arang Mangrove",
    image: "/images/product-mangrove-briquette.jpg",
    shortDesc: "Briket dari kayu mangrove, pembakaran optimal",
    fullDesc:
      "Briket arang mangrove ini dibuat dari serbuk kayu mangrove yang dikompresi menggunakan tekanan tinggi. Hasilnya briket padat dengan panas tinggi, pembakaran lama, dan asap minimal. Cocok untuk BBQ, industri makanan, serta keperluan ekspor yang memerlukan efisiensi pembakaran.",
    features: JSON.stringify(["Kalori tinggi", "Minimal asap", "Bentuk seragam"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 8%" },
      { label: "Nilai Kalori", value: "6500-7000 kcal/kg" },
    ]),
    applications: JSON.stringify(["BBQ", "Industri", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 20 kg", "Box 10 kg"]),
  },
  {
    slug: "arang-pinus",
    name: "Arang Kayu Pinus",
    image: "/images/product-pine.jpg",
    shortDesc: "Arang kayu pinus, panas optimal dan stabil",
    fullDesc:
      "Arang pinus kami berasal dari kayu pinus berkualitas tinggi yang diproses menggunakan sistem pembakaran tertutup untuk menjaga kadar karbon. Memberikan panas merata, stabil, dan emisi rendah, menjadikannya pilihan ideal untuk industri maupun rumah tangga yang ramah lingkungan.",
    features: JSON.stringify(["100% alami", "Panas stabil", "Asap rendah"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 6%" },
      { label: "Fixed Carbon", value: "> 78%" },
    ]),
    applications: JSON.stringify(["BBQ", "Industri", "Rumah tangga"]),
    packaging: JSON.stringify(["Karung 25 kg", "Box 10 kg"]),
  },
  {
    slug: "briket-arang-pinus",
    name: "Briket Arang Pinus",
    image: "/images/product-pine-briquette.jpg",
    shortDesc: "Briket dari kayu pinus, tahan lama dan mudah dibakar",
    fullDesc:
      "Briket arang pinus dibuat dari serbuk pinus alami yang dikeringkan dan dipadatkan menjadi bentuk seragam. Dikenal karena pembakarannya yang lama, panas stabil, dan asap yang sangat rendah. Cocok untuk keperluan BBQ, restoran, serta kegiatan rumah tangga sehari-hari.",
    features: JSON.stringify(["Kalori tinggi", "Bentuk seragam", "Minimal asap"]),
    specifications: JSON.stringify([
      { label: "Kadar Air", value: "< 8%" },
      { label: "Nilai Kalori", value: "6500-7000 kcal/kg" },
    ]),
    applications: JSON.stringify(["BBQ", "Rumah tangga", "Industri"]),
    packaging: JSON.stringify(["Karung 20 kg", "Box 10 kg"]),
  },
];

// 💾 Insert produk baru (skip kalau slug sudah ada)
newProducts.forEach((p) => {
  const exists = db.prepare("SELECT 1 FROM products WHERE slug = ?").get(p.slug);
  if (!exists) {
    db.prepare(`
      INSERT INTO products
      (slug, name, image, shortDesc, fullDesc, features, specifications, applications, packaging)
      VALUES (@slug, @name, @image, @shortDesc, @fullDesc, @features, @specifications, @applications, @packaging)
    `).run(p);
    console.log(`✅ Inserted: ${p.slug}`);
  } else {
    console.log(`⏩ Exists: ${p.slug}`);
  }
});

// 🔢 Tampilkan total produk
// 🔢 Tampilkan total produk
const result = db.prepare("SELECT COUNT(*) AS total FROM products").get() as { total: number };
console.log(`✅ Seeding selesai! Total produk sekarang: ${result.total}`);
