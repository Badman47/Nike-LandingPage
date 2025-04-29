import { star } from "../assets/icons"

//PopularProductsCard component
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max:sm-w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] cursor-pointer transition-transform duration-300 hover:scale-120" />
      <div className="mt-8 pl-2 flex justify-start gap-2.5">
        <img src={star} alt="star icon" width={24} height={24} />
        <p className="text-xl leading-normal text-black">[4.5]</p>
      </div>
      <h3 className="mt-2 pl-2 text-lg text-black leading-normal font-semibold">{name}</h3>
      <p className="mt-2 pl-2 text-xl text-orange-400 leading-normal font-semibold">{price}</p>
    </div>
  )
}

export default PopularProductCard