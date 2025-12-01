# 🛍️ Shopzy - Modern E-Commerce Web Application

A full-featured e-commerce web application built with **Next.js 16**, **React**, **TypeScript**, **Ant Design**, **Tailwind CSS**, and **Zustand** for state management.

## ✨ Features

- 🏠 **Hero Section** - Eye-catching landing section with promotional content
- 📦 **Product Listing** - Browse 10+ products across multiple categories (Electronics, Fashion, Sports, Home)
- 🛒 **Shopping Cart** - Add, remove, and manage product quantities
- 🔢 **Real-time Cart Updates** - Badge showing item count updates instantly
- 💾 **Cart Persistence** - Cart items saved to localStorage (survives page refresh)
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean interface with Ant Design components and Tailwind CSS
- 🚀 **Fast Performance** - Optimized with Next.js App Router and React 19

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Library:** Ant Design
- **Styling:** Tailwind CSS v4
- **State Management:** Zustand
- **Icons:** Ant Design Icons
- **Image Hosting:** Unsplash

## 📁 Project Structure

```
shopzy/
├── src/
│   ├── app/
│   │   ├── cart/
│   │   │   └── page.tsx          # Cart page
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   ├── Header.tsx             # Navigation header with cart badge
│   │   ├── Hero.tsx               # Hero section
│   │   ├── ProductCard.tsx        # Product display card
│   │   └── CartItem.tsx           # Cart item with quantity controls
│   ├── data/
│   │   └── products.ts            # Product data
│   └── store/
│       └── cartStore.ts           # Zustand cart state management
├── public/                        # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shopzy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Functionalities

### Shopping Cart Operations

- ✅ **Add to Cart** - Click "Add to Cart" button on any product
- ✅ **Increase Quantity** - Click `+` button in cart
- ✅ **Decrease Quantity** - Click `-` button (auto-removes at 0)
- ✅ **Remove Item** - Click "Remove" button
- ✅ **View Total** - See calculated total price
- ✅ **Persistent Storage** - Cart survives page refresh using localStorage

### Navigation

- 🏠 Click "Shopzy" logo to return home
- 🛒 Click cart icon to view shopping cart
- 📦 "Start Shopping" button when cart is empty

## 🎨 UI Components

| Component | Description |
|-----------|-------------|
| `Header` | Sticky navigation bar with logo and cart badge |
| `Hero` | Landing section with promotional content |
| `ProductCard` | Displays product info with "Add to Cart" button |
| `CartItem` | Shows cart item with quantity controls |

## 📦 State Management

Uses **Zustand** for lightweight, efficient state management:

- Global cart state accessible from any component
- Automatic re-rendering on state changes
- localStorage persistence with middleware
- Type-safe with TypeScript interfaces

