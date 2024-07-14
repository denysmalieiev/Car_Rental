import BookingSearch from "../Bookings/BookingSearch";
import VehiclesSuggestions from "./VehiclesSuggestions";
const AllVehicles = () => {

  const title: string = `Vehicles for Rent`;

  return (
    <div className="w-full h-auto overflow-auto py-12">
      <div className="w-auto h-auto px-2 lg:px-[5%] overflow-auto text-sm flex items-center justify-start"><span className="text-black">
      </span>Home&nbsp;&nbsp;<span className="text-xs">{`>`}</span>&nbsp;&nbsp;<span className="text-gray">Vehicles</span>
      </div>
      <div className="w-auto h-auto px-2 lg:px-[5%] overflow-auto my-16">
        <div className="w-full lg:w-9/12 h-auto bg-gray-light overflow-auto px-6 py-8 rounded-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-black-gray my-4 lg:my-8">{title}</h1>
          <BookingSearch/>
        </div>
      </div>
      <div className="w-full h-auto px-2 lg:px-[5%] float-left overflow-hidden my-12">
        <VehiclesSuggestions/>
      </div>
    </div >
  )
}

export default AllVehicles