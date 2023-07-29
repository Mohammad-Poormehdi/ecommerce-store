import { Color } from "@/types/products"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL)
  return response.json()
}

export default getColors
