"use client"

import { useRouter, useSearchParams } from "next/navigation"
import qs from "query-string"

import { Color, Size } from "@/types/products"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FilterProps {
  valueKey: string
  data: Size[] | Color[]
  name: string
}

const Filter: React.FC<FilterProps> = ({ valueKey, data, name }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedValue = searchParams.get(valueKey)
  const onClick = (id: string) => {
    const currentQuerry = qs.parse(searchParams.toString())
    const query = {
      ...currentQuerry,
      [valueKey]: id,
    }
    if (currentQuerry[valueKey] === id) {
      query[valueKey] = null
    }
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )
    router.push(url)
  }
  return (
    <>
      <div className="mb-8">
        <h3 className="text-lg font-semibold">{name}</h3>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2">
          {data.map((filter) => (
            <div className="flex items-center" key={filter.id}>
              <Button
                onClick={() => onClick(filter.id)}
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  selectedValue === filter.id && "bg-black text-white"
                )}
              >
                {filter.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Filter
