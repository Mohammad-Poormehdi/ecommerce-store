import taost from "react-hot-toast"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

import { Product } from "@/types/products"

interface CartStore {
  products: Product[]
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addItem: (product: Product) => {
        const currentProducts = get().products
        const existingProduct = currentProducts.find(
          (item) => item.id === product.id
        )
        if (existingProduct) {
          return taost.error("Item already added to cart")
        }
        set({ products: [...currentProducts, product] })
        taost.success("item added to cart")
      },
      removeItem: (id: string) => {
        set({ products: [...get().products.filter((item) => item.id !== id)] })
        taost.success("item removed")
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart
