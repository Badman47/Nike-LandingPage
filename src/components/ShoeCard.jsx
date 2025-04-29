

//ShoeCard Component:
const ShoeCard = ({ bigShoeImg, imgURL, changeBigShoeImage }) => {
  //handleClick to change the main image on the bg
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={
      `border-2 rounded-xl
      ${bigShoeImg === imgURL.bigShoe ? "border-gray-600" : "border-transparent"}
      cursor-pointer transition-transform duration-300 hover:scale-120 max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-orange-500 sm:w-40 sm:h-40 rounded-xl max:sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          h={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard