'use client';
import Image from "next/image";
import { Card, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/data/products";


interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const addToCart = useCartStore(state => state.addToCart);



    const handleAddToCart = () => {
        addToCart(product);
    };


    return (


        <Card 
            hoverable 
            className="h-full flex flex-col"
            cover={
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            }
        >
            <div className="flex flex-col h-full">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-xl font-bold text-blue-600 mb-2">Rs. {product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">{product.description}</p>
                <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />}
                    onClick={handleAddToCart}
                    className="w-full"
                >
                    Add to Cart
                </Button>
            </div>
        </Card>
    );
}