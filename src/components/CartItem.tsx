'use client';
import React from "react";
import Image from "next/image";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const increaseQuantity = useCartStore(state => state.increaseQuantity);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    const handleIncrease = () => {
        increaseQuantity(item.id);

    };


    const handleDecrease = () => {
        decreaseQuantity(item.id);
    };

    const handleRemove = () => {

        removeFromCart(item.id);

    };

    return (
        <div className="flex gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded"
                unoptimized
            />
            


            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <p className="text-base text-gray-700 mt-1">Rs. {item.price.toFixed(2)} </p>
                </div>
                

                <div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <Button 
                                size="small"
                                icon={<MinusOutlined />}
                                onClick={handleDecrease}
                            />
                            <span className="text-sm text-black font-medium px-2">Qty: {item.quantity}</span>
                            <Button 
                                size="small"
                                icon={<PlusOutlined />}
                                onClick={handleIncrease}
                            />
                        </div>

                        <Button 
                            danger 
                            size="small"
                            icon={<DeleteOutlined />}
                            onClick={handleRemove}
                        >
                            Remove
                        </Button>


                    </div>
                    <p></p>
                    <p className="text-sm font-semibold text-gray-700 mt-2">
                        Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}
