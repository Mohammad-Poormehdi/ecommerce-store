import { url } from "inspector"

import { Billboard as BillboardType } from "@/types/nav"

interface BillboardProps {
  billboard: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ billboard }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl bg-center bg-cover relative aspect-[2.4/1] overflow-hidden"
        style={{ backgroundImage: `url(${billboard.imageUrl})` }}
      >
        {/* if you want label in the center of the billboard */}
        {/* <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboard.label}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Billboard
