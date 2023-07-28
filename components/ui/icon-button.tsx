import { ReactElement } from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"

interface IconButtonProps {
  onClick: () => void
  className?: string
  icon: ReactElement
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-100 transition",
          className
        )}
      >
        {icon}
      </Button>
    </>
  )
}

export default IconButton
