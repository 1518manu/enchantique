import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory seed datasets (can connect to MongoDB via MONGO_URI)
const products = [
  {
    id: "ench-001",
    name: "Padmavathi Grand Kundan & Pearl Choker Set",
    slug: "padmavathi-grand-kundan-pearl-choker-set",
    price: 6499,
    comparePrice: 7999,
    rating: 4.9,
    material: "Kundan",
    type: "Bridal Sets",
    occasion: "Bridal and Wedding",
    baseMetal: "Hypoallergenic brass & copper alloy core",
    plating: "24k Micron Gold Foil Jadau with protective anti-tarnish micro-lacquer",
    inStock: true
  },
  {
    id: "ench-002",
    name: "Kasavu Pearl Bell Jhumkas",
    slug: "kasavu-pearl-bell-jhumkas",
    price: 2450,
    comparePrice: 2890,
    rating: 5.0,
    material: "Pearl",
    type: "Earrings",
    occasion: "Onam and Vishu",
    baseMetal: "100% Recycled Brass Core",
    plating: "22k Antique Matte Gold Plating",
    inStock: true
  },
  {
    id: "ench-003",
    name: "Royal VVS Moissanite Oval Solitaire Ring",
    slug: "royal-vvs-moissanite-oval-solitaire-ring",
    price: 6200,
    comparePrice: 7500,
    rating: 4.8,
    material: "Moissanite",
    type: "Rings",
    occasion: "Bridal and Wedding",
    baseMetal: "Sterling Silver (925) & Surgical Stainless Steel with 18k Gold Vermeil",
    plating: "18k Heavy Gold Vermeil (3.0 Microns)",
    inStock: true
  },
  {
    id: "ench-004",
    name: "Mayura Peacock Temple Pendant & Chain",
    slug: "mayura-peacock-temple-pendant-chain",
    price: 3150,
    comparePrice: 3800,
    rating: 4.9,
    material: "Gemstone",
    type: "Pendant Sets",
    occasion: "Festive and Temple Wear",
    baseMetal: "Pure Jewellers Brass",
    plating: "22k South Indian Temple Matte Gold Wash",
    inStock: true
  }
];

let orders = [];
let bespokeEnquiries = [];
let contactMessages = [];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'Enchantique', motto: 'Made with love', location: 'Kochi, Kerala' });
});

// Products API
app.get('/api/products', (req, res) => {
  const { material, type, occasion, search } = req.query;
  let result = [...products];

  if (material && material !== 'All') {
    result = result.filter(p => p.material.toLowerCase() === material.toLowerCase());
  }
  if (type && type !== 'All') {
    result = result.filter(p => p.type.toLowerCase() === type.toLowerCase());
  }
  if (occasion && occasion !== 'All') {
    result = result.filter(p => p.occasion.toLowerCase() === occasion.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(q) || p.material.toLowerCase().includes(q));
  }

  res.json({ success: true, count: result.length, data: result });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

// Orders API
app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  const newOrder = {
    orderId: `ENC-${Math.floor(100000 + Math.random() * 900000)}`,
    createdAt: new Date().toISOString(),
    status: 'Order Placed • Kochi Atelier',
    ...orderData
  };
  orders.push(newOrder);
  res.status(201).json({ success: true, order: newOrder });
});

app.get('/api/orders/:id', (req, res) => {
  const order = orders.find(o => o.orderId === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, data: order });
});

// Bespoke Enquiries API
app.post('/api/bespoke', (req, res) => {
  const enquiry = {
    id: `BESPOKE-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...req.body
  };
  bespokeEnquiries.push(enquiry);
  res.status(201).json({ success: true, message: 'Bespoke enquiry received', enquiry });
});

// Contact API
app.post('/api/contact', (req, res) => {
  const message = {
    id: `MSG-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...req.body
  };
  contactMessages.push(message);
  res.status(201).json({ success: true, message: 'Message received', data: message });
});

app.listen(PORT, () => {
  console.log(`✨ Enchantique Atelier API running on http://localhost:${PORT}`);
});
