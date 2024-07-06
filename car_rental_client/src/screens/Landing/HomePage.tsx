import LandingScreen from "./LandingScreen";
import ServiceIntroduction from "./ServiceIntroduction";
import LandingOffers from "./LandingOffers";
import Description from "./Description";
import Testimonials from "../Utils/Testimonials";
import FAQ from "../Utils/FAQ";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-auto float-left overflow-hidden mb-16"><LandingScreen/></div>
      <div className="w-full h-auto float-left overflow-hidden mb-16"><LandingOffers/></div>
      <div className="w-full h-auto float-left overflow-hidden mb-16"><Testimonials/></div>
      <div className="w-full h-auto float-left overflow-hidden mb-16"><Description/></div>
      <div className="w-full h-auto float-left overflow-hidden mb-16"><ServiceIntroduction/></div>
      <div className="w-full h-auto float-left overflow-hidden mb-16 px-2 lg:px-28"><FAQ/></div>
    </div>
  )
}

export default HomePage