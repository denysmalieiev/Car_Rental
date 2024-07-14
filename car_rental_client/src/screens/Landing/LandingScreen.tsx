import HomePageCar from "../../assets/homeCarImage.png";
import BookingSearch from "../Bookings/BookingSearch";
// bg-gradient-to-r from-white to-white-input-light
const LandingScreen = () => {
  return (
    <>
      <div className="w-full h-auto overflow-auto float-left">
        <div className="w-full h-[45rem] lg:w-[96%] lg:rounded-s-lg float-right bg-home-theme" style={{ backgroundImage: `url(${HomePageCar})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "bottom right" }}>
          <div className="w-full pb-32 lg:pl-28 h-full px-4 flex items-center justify-center">
            <div className="w-full h-auto float-left overflow-auto">
              <h1 className="text-white text-4xl lg:text-6xl font-extrabold my-2 break-words">Unlock Your Next Adventure</h1>
              <h2 className="text-white text-xl lg:text-3xl font-extrabold my-2 break-words">Simple, Flexible Car Rentals</h2>
              <div className="w-full lg:w-8/12 h-auto bg-opacity-90 bg-gray-light p-6 rounded-xl my-6 overflow-auto">
                <h1 className="text-3xl font-extrabold">Book Now</h1>
                <div className="w-full">
                  <BookingSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingScreen