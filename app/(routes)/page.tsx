import getBillboard from "@/actions/getBillboard"
import getProducts from "@/actions/getProducts"

import Container from "@/components/ui/container"
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list"

interface HomePageProps {}

export const revalidate = 0

const HomePage: React.FC<HomePageProps> = async ({}) => {
  const billboard = await getBillboard("c3ff7fe2-d59f-49b1-887b-5decaa0d8c76")
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
