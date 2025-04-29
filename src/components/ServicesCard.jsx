


//ServicesCard Component:
const ServicesCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] lg:max-w-[330px] rounded-[20px] shadow-2xl justify-center items-center px-10 py-16
        border-2 border-orange-400 cursor-pointer transition-transform duration-300 hover:scale-110">
            <div className="h-11 w-11 flex rounded-full justify-center items-center bg-orange-400 transition-transform duration-300 hover:scale-145  ">
                <img
                    src={imgURL}
                    alt={label}
                    width={24}
                    height={24}
                />
                </div>
                <h3 className="mt-5 text-3xl font-bold leading-normal">{label}</h3>

                <p className="mt-3 text-lg break-words font-light leading-normal">{subtext}</p>
            </div>
    )
}

export default ServicesCard