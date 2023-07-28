import { Category } from "@/types/nav"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL)
  return response.json()
}

export default getCategories
