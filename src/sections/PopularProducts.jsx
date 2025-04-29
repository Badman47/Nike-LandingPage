import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants/constants"


//Popular Products Section:
const PopularProducts = () => {
  return (
    <section id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-6xl font-bold">Our<span className="text-orange-400"> Popular</span> Products</h2>
        <p className="font-light text-black text-xl">Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14 font-mono">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts