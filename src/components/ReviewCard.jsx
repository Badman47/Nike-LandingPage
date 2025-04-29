import { star } from "../assets/icons"


//ReviewCard Component:
const ReviewCard = ({ imgURL, customerReview, feedback, rating }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt="image"
                className="rounded-full object-cover w-[120px] h-[120px] border-3 border-orange-400"
            />
            <p className="text-center fold-light mt-6 max-w-sm">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    alt="star icon"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
            </div>
            <p className="mt-2 font-light text-xl text-black">{rating}</p>
            <h3 className="mt-2 font-bold text-3xl text-center font-mono">{customerReview}</h3>
        </div>

    )
}

export default ReviewCard