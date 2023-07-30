"use client"

import { useSearchParams } from "next/navigation"

import useCart from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import Currency from "@/components/ui/currency"

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = ({}) => {
  const searchParams = useSearchParams()
  const products = useCart((state) => state.products)
  const removeAll = useCart((state) => state.removeAll)
  const totalPrice = products.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)
  return (
    <>
      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:px-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">
              Order Total
            </div>
            <Currency value={totalPrice.toString()} />
          </div>
        </div>
        <Button className="w-full mt-6">Checkout</Button>
      </div>
    </>
  )
}

export default Summary
