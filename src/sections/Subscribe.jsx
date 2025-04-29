import Button from "../components/Button"



//Subscribe Section:
const Subscribe = () => {
    return (
        <section id="contact-us"
            className="max-container flex justify-center items-center max-lg:flex-col gap-20 pb-10">
            <h3 className="font-bold text-black text-4xl leading-[60px] lg:max-w-full">
                Sign Up For
                <span className="text-orange-400"> Updates</span> & Newsletter
            </h3>
            <div className="lg:max-w-[40%] w-[500px] flex justify-evenly items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-orange-400 rounded-full">
                <input type="text" placeholder="subsribe@nike.com" className="input text-2xl font-light" />
                <div className="flex max-sm:justify-end items-center max-sm:w-full pb-1">
                    <Button label="SignUp" fullWidth />

                </div>
            </div>
        </section>
    )
}
export default Subscribe