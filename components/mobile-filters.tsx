"use client"

import { relative } from "path"
import { use, useEffect, useState } from "react"
import { Dialog } from "@headlessui/react"
import { Plus } from "lucide-react"

import { Color, Size } from "@/types/products"
import Filter from "@/app/(routes)/category/[categoryId]/components/filter"

import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ colors, sizes }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Button
              onClick={onOpen}
              className="flex items-center gap-x-2 lg:hidden"
            >
              Filters
              <Plus size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex flex-col items-start">
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>what do you looking for ?</SheetDescription>
            </SheetHeader>
            <Filter valueKey="sizeId" data={sizes} name="Size" />
            <Filter valueKey="colorId" data={colors} name="Color" />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default MobileFilters
