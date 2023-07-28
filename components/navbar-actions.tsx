"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"

import { Button } from "./ui/button"

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full px-4 py-2">
        <ShoppingBag className="w-4 h-4" size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  )
}

export default NavbarActions
