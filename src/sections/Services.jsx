import ServicesCard from "../components/ServicesCard"
import { services } from "../constants/constants"



//Services Section:
const Services = () => {
  return (
    <section className="max-container flex gap-13 justify-center flex-wrap ">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services