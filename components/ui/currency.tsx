"use client"

import { useEffect, useState } from "react"

import { priceFormatter } from "@/lib/utils"

interface CurrencyProps {
  value: string
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return false
  }
  return (
    <>
      <div className="font-semibold">
        {priceFormatter.format(Number(value))}
      </div>
    </>
  )
}

export default Currency
