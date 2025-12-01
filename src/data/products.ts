export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}



export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 6990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3490,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 4990,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description: "Vintage leather backpack perfect for work and travel",
    category: "Fashion"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 12990,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    description: "Lightweight running shoes with advanced cushioning technology",
    category: "Sports"
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 24990,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    description: "Programmable coffee maker with thermal carafe",
    category: "Home"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 2990,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description: "Polarized sunglasses with UV protection and stylish design",
    category: "Fashion"
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 990,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description: "LED desk lamp with adjustable brightness and color temperature",
    category: "Home"
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 490,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    description: "Non-slip yoga mat with extra cushioning for comfort",
    category: "Sports"
  },
  {
    id: 9,
    name: "Wireless Keyboard",
    price: 1990,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    description: "Mechanical wireless keyboard with RGB backlighting",
    category: "Electronics"
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 8990,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours",
    category: "Sports"
  }
];