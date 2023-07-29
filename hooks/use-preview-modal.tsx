import { create } from "zustand"

import { Product } from "@/types/products"

interface PreviewModalStore {
  isOpen: boolean
  product?: Product
  onOpen: (product: Product) => void
  onClose: () => void
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: (product: Product) => set({ isOpen: true, product: product }),
  product: undefined,
}))

export default usePreviewModal
