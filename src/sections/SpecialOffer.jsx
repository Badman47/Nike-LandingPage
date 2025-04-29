import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"



//SpecialOffer Section:
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap max-container w-full max-xl:flex-col-reverse gap-10">
      <div>
        <img src={offer} alt="offer image"
          width={400} height={200}
          className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col mt-30">
        <h2 className="text-5xl font-bold">
          <span className="text-orange-400">Special </span>
          Offer
        </h2>
        <p className="mt-5 text-black text-xl font-light">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-5 text-black text-xl font-light">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex flex-wrap gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More"
            backgroundColor="bg-white"
            textColor="text-black"
            borderColor='border-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer