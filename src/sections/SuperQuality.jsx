import Button from "../components/Button"
import { shoe8 } from "../assets/images"



//SuperQuality Section:
const SuperQuality = () => {
  return (
    <section id="About-us"
      className=" flex justify-between items-center max-lg:flex-col gap-5 w-full max-container">

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold">
          We Provide You
          <span className="text-orange-400 text-6xl"> Super</span>
          <span className="text-orange-400 text-6xl">Quality</span> Shoes
        </h2>
        <p className="mt-5 text-xl font-light lg:max-w-lg text-info">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-5 lg:max-w-lg text-info font-light text-xl">
          Our attention to details and dedication ensures your satisfaction.
        </p>
        <div className="mt-7">
          <Button
            label="View Details"
          />
        </div>
      </div>
      <div className="flex-1 flex mt-10 justify-center items-center transition-transform duration-300 hover:scale-105">
        <img
          src={shoe8}
          alt="shoe image"
          width={447}
          height={250}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality