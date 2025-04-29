import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants/constants"



//CustomerReviews Section:
const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-bold text-black text-5xl text-center mt-4">What Our
                <span className="text-orange-400"> Customers</span> Say?
            </h3>
            <p className="m-auto mt-4 max-w-lg text-black text-xl font-light text-center">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="mt-18 flex flex-1 justify-evenly max-lg:flex-col gap-14">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerReview={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>

        </section>
    )
}

export default CustomerReviews