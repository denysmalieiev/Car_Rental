import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VehiclesMenu from "../Vehicles/VehiclesMenu";

const HorizontalMenu = () => {
  const [vehicleOpen, setVehicleOpen] = useState(false);

  const closeCarMenu = () => {
    setVehicleOpen(false);
  }
  const componentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        closeCarMenu();
      }
    };

    document.addEventListener('mousemove', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseOut);
    };
  }, [closeCarMenu]);
  return (
    <div ref={componentRef} className='w-full h-full'>
      <div className='w-9/12 h-full float-left flex items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center'>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red" onClick={() => setVehicleOpen(true)}>
            <Link to={`/all-vehicles`}>Vehicles</Link>
          </p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red"><Link to={`/go-eco`}>Go Eco</Link></p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red"><Link to={`/locations`}>Locations</Link></p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red"><Link to={`/bookings`}>Booking</Link></p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red"><Link to={`/help`}>Help</Link></p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red"><Link to={`/about-us`}>About Us</Link></p>
        </div>
      </div>
      <div className='w-3/12 h-full px-4 float-left'>
        <div className="w-auto h-full flex items-center justify-start">
          <button className="w-fit px-4 py-1 rounded-md border border-blue font-extrabold text-blue hover:border-blue_border hover:text-blue_border"><Link to={`sign-up`}>Sign Up</Link></button>
        </div>
      </div>
      <div className="w-12/12 h-auto">
        {vehicleOpen && (
          <div className="w-full fixed top-16 left-0 border-t border-gray-light border-b-[0.5rem] border-b-home-theme-hover rounded-b-lg">
            <VehiclesMenu closeCarMenu={closeCarMenu} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HorizontalMenu