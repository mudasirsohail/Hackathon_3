import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/sanity";

type Product = { 
    productName: string;
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    status: string;
    colors: string;
    category:string
    inventory:string;
    slug: string; // Add this field
}

export default async function Products() {
    const products: Product[] = await sanityFetch({query: allProducts});

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-100 p-4">
                <h2 className="font-bold text-lg mb-4">Filter</h2>
                <div>
                    <h3 className="font-medium mb-2">Gender</h3>
                    <div className="space-y-2">
                        <label className="block">
                            <input type="checkbox" className="mr-2" /> Men
                        </label>
                        <label className="block">
                            <input type="checkbox" className="mr-2" /> Women
                        </label>
                        <label className="block">
                            <input type="checkbox" className="mr-2" /> Unisex
                        </label>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-3/4 p-4">
                <h1 className="text-xl font-bold mb-6">New ({products.length})</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Link href={`/Shoes/${product.id}`} key={product.id}>
                            <div className="border rounded-lg overflow-hidden shadow-sm">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.productName}
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                <p className="text-sm text-red-500">{product.status}</p>
                                    <h3 className="font-bold text-md">{product.productName}</h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                    <p className="text-sm text-gray-500">{product.colors}</p>
                                    
                                    <p className="font-bold text-lg">${product.price}</p>
                                </div>
                            </div>
                        </Link>

                        
                    ))}
                </div>
            </div>
        </div>
    );
}
