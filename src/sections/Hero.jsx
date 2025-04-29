import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants/constants"


//Hero Section:
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-2">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full ml-10 max-xl: pr-10 pt-20">
                <p className="text-3xl text-orange-500">Our Summer Arrivals...</p>
                <h1 className="mt-9 text-8xl max:sm-[72px] max:sm-leading-[82] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-orange-500 inline-block mt-3">Nike
                    </span> Shoes
                </h1>
                <p className="text-lg text-gray-600 font-light leading-relaxed mt-2 mb-4"> Discover our stylish Nike arrival, quality comfort, and innovation for an active life.</p>
                <Button 
                label="Shop Now"
                iconURL={arrowRight}
                
                />
                <div className="flex flex-wrap justify-start items-start w-full mt-16 gap-16 font-mono">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className=" text-4xl text-black font-bold">{stat.value}</p>
                            <p className="leading-7 text-gray-600 ml-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url('assets/collection-background.svg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
                className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="Big Shoe Image"
                    width={700}
                    height={700}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[1%] pb-3">
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero