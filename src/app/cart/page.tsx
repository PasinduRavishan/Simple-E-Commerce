'use client';
import React from 'react';
import Link from 'next/link';
import { Button, Empty } from 'antd';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {

  const items = useCartStore(state => state.items);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);
  const total = getTotalPrice();

  const handleCheckout = () => {

    alert('Checkout functionality coming soon!');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
          


          {items.length === 0 ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Empty 
                description={
                  <span className="text-gray-500 text-lg">Your cart is empty</span>
                }
              >
                <Link href="/">
                  <Button type="primary" size="large">Start Shopping</Button>
                </Link>
              </Empty>
            </div>
          ) : (
            <>

              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>


              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
                  <span className="text-2xl font-bold text-blue-600">
                    Rs. {total.toFixed(2)} 
                  </span>
                </div>



                <Button 
                  type="primary" 
                  size="large"
                  onClick={handleCheckout}
                  className="w-full"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
