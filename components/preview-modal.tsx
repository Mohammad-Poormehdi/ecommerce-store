"use client"

import { MouseEventHandler, ReactElement, useState } from "react"
import { Expand } from "lucide-react"

import { Product } from "@/types/products"
import usePreviewModal from "@/hooks/use-preview-modal"

import Gallery from "./gallery"
import Info from "./info"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog"

interface PreviewModalProps {}

const PreviewModal: React.FC<PreviewModalProps> = ({}) => {
  const { product, isOpen, onClose } = usePreviewModal()
  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open: boolean) => {
          if (!open) {
            onClose()
          }
        }}
      >
        <DialogContent>
          <DialogHeader></DialogHeader>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-9 sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-5">
              <Gallery images={product?.images!} />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <Info product={product!} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PreviewModal
