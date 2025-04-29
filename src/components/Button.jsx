

//Button Component:
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center mt-2 px-8 py-4 border leading-none 
            cursor-pointer transition-transform duration-300 hover:scale-110
            ${backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`

                : "bg-orange-500 border text-md text-white rounded-full border-red-500"}
         rounded-full ${fullWidth && "w-full"}
        `}>
            {label}
            {/*created a logic we only show iconURL we want to */}
            {iconURL && (
                <img src={iconURL}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    )
}

export default Button