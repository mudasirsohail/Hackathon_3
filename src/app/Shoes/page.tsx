"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/sanity"
import AddToCartButton from "../component/AddToCartButton"
import { Sidebar } from "../component/Sidebar"
import { FilterProvider, useFilters, type Product } from "../contexts/FilterContext"

function ProductGrid({ products }: { products: Product[] }) {
  const { filteredProducts } = useFilters()

  return (
    <div className="w-full md:w-3/4 p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">New ({filteredProducts.length})</h1>
        <div className="flex gap-4">
          <button className="text-sm font-medium">Hide Filters</button>
          <button className="text-sm font-medium">Sort By</button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products match the selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
              <Link href={`/Shoes/${product.id}`}>
                <div>
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.productName}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                  <div className="p-4">
                    {product.status && <p className="text-sm text-red-500">{product.status}</p>}
                    <h3 className="font-bold text-md">{product.productName}</h3>
                    {product.category && <p className="text-sm text-gray-500">{product.category}</p>}
                    {product.colors && <p className="text-sm text-gray-500">{product.colors}</p>}
                    <p className="font-bold text-lg">₹{product.price}</p>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4">
                {/* <AddToCartButton product={product} /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await sanityFetch({ query: allProducts })
      setProducts(fetchedProducts)
    }
    fetchProducts()
  }, [])

  return (
    <FilterProvider products={products}>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <ProductGrid products={products} />
      </div>
    </FilterProvider>
  )
}



