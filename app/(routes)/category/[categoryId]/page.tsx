import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getSizes from "@/actions/get-sizes"
import getProducts from "@/actions/getProducts"

import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"

import Filter from "./components/filter"
import MobileFilters from "@/components/mobile-filters"

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export const revalidate = 0

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.colorId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)
  return (
    <>
      <div className="bg-white">
        <Container>
          {category.billboard && <Billboard billboard={category.billboard} />}
          <div className="px-4 sm:px-6 lg:px-8 pb-24 mt-6">
            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
              <MobileFilters sizes={sizes} colors={colors} />
              <div className="hidden lg:block">
                <Filter valueKey="sizeId" data={sizes} name="Size" />
                <Filter valueKey="colorId" data={colors} name="Color" />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 ? (
                  <NoResults />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                      <ProductCard product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CategoryPage