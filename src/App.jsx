import Nav from "./components/Nav"
import CustomerReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

//Main app:
const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      <main className="pl-30">
        <Hero />
      </main>
      <main className="pl-30 pt-30">
        <PopularProducts />
      </main>
      <main className=" pl-30 pt-20">
        <SuperQuality />
      </main>
      <main className="pl-2 pt-30 pr-2">
        <Services />
      </main>
      <main className="pl-30 pt-25 pr-10">
        <SpecialOffer />
      </main>
      <main className="pt-25 w-full">
        <CustomerReviews />
      </main>
      <main className="pl-30 pt-30 pr-15">
        <Subscribe />
      </main>
      <main className="bg-black pl-10 pt-4 pb-8 pr-10">
        <Footer />
      </main>
    </>
  )
}

export default App