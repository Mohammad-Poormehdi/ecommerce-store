"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingBag } from "lucide-react"

import useCart from "@/hooks/use-cart"

import { Button } from "./ui/button"

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const cart = useCart()
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full px-4 py-2"
      >
        <ShoppingBag className="w-4 h-4" size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.products.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions
