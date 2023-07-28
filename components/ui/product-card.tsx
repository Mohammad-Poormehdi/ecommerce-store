"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types/products"

import Currency from "./currency"
import IconButton from "./icon-button"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* images and actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image
            alt="image"
            src={product.images?.[0].url}
            fill
            className="aspect-square object-cover rounded-md"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center items-center">
              <IconButton
                onClick={() => {}}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={() => {}}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-sm text-gray-500">{product.category.name}</p>
        </div>
        {/* price */}
        <div className="flex items-center justify-between">
          <Currency value={product.price} />
        </div>
      </div>
    </>
  )
}

export default ProductCard
