"use client"

import type React from "react"
import { useCart } from "../contexts/cartContext"

type Product = {
  id: string
  productName: string
  imageUrl?: string
  price: number
}

const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      productName: product.productName,
      price: product.price,
      imageUrl: product.imageUrl || "",
      quantity: 1,
    })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-[250px] bg-black text-white py-2 rounded-full hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton

