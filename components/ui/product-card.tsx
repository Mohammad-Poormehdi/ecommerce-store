"use client"

import { MouseEventHandler, useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Expand, ShoppingBagIcon, ShoppingCart } from "lucide-react"

import { Product } from "@/types/products"
import useCart from "@/hooks/use-cart"
import usePreviewModal from "@/hooks/use-preview-modal"

import PreviewModal from "../preview-modal"
import { Button } from "./button"
import Currency from "./currency"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useCart()
  const previewModal = usePreviewModal()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const router = useRouter()
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(product)
  }
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(product)
  }
  if (!isMounted) {
    return null
  }
  return (
    <>
      <div
        onClick={() => {
          router.push(`/product/${product.id}`)
        }}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      >
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
              <Button
                className="w-10 h-10 rounded-full p-0 max-md:hidden"
                variant="secondary"
                onClick={onPreview}
              >
                <Expand size={20} className="text-gray-600" />
              </Button>
              <Button
                className="w-10 h-10 rounded-full p-0 max-md:hidden"
                variant="secondary"
                onClick={onAddtoCart}
              >
                <ShoppingBagIcon size={20} className="text-gray-600" />
              </Button>
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
