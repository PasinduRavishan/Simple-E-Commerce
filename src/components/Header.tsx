'use client';
import Link from "next/link";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  // Subscribe to items array - component re-renders when it changes
  const items = useCartStore(state => state.items);
  // Calculate total on each render
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-gray-800">Shopzy</h1>
        </Link>
        <Link href="/cart">
          <Badge count={totalItems} showZero={false}>
            <ShoppingCartOutlined className="text-2xl text-gray-700" />
          </Badge>
        </Link>
      </div>
    </header>
  );
};