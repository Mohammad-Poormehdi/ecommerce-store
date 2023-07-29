import { Billboard } from "@/types/nav"
import { Product } from "@/types/products"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`)
  return response.json()
}
export default getProduct
