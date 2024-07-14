import BookingSearch from "../Bookings/BookingSearch"

const ServiceIntroduction = () => {
    return (
        <div className="w-full h-auto float-left overflow-auto grid grid-cols-1">
            <div className="w-full h-auto py-6 px-2 lg:px-28">
                <h1 className="text-4xl font-bold text-dark-blue text-center">Book Now</h1>
                <div className="lg:mx-12 px-4 py-8 lg:p-8 my-6 rounded-xl bg-gray-light overflow-auto">
                    <BookingSearch />
                </div>
            </div>
            <div className="w-full min-h-96 h-auto py-6">
                <div className="w-full h-auto py-6 float-left overflow-auto grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center lg:px-16">
                    <div className="w-11/12 min-h-44 h-auto p-4 rounded-xl border-[0.025rem] bg-white border-gray-light shadow-sm shadow-gray-light">
                        <div className="w-full h-auto">
                            <p className="w-14 h-14 float-left flex items-center justify-center p-1 rounded-full bg-white border border-gray-light text-5xl font-extrabold text-navy">1</p>
                            <p className="w-full float-left my-2 text-start text-3xl font-bold text-navy break-words">Pick Your Perfect Ride</p>
                            <p className="w-full float-left font-extralight">Browse our fleet and find the car that fuels your adventure.</p>
                        </div>
                    </div>
                    <div className="w-11/12 min-h-44 h-auto p-4 rounded-xl border-[0.025rem] bg-white border-gray-light shadow-sm shadow-gray-light">
                        <div className="w-full h-auto">
                            <p className="w-14 h-14 float-left flex items-center justify-center p-1 rounded-full bg-white border border-gray-light text-5xl font-extrabold text-navy">2</p>
                            <p className="w-full float-left my-2 text-start text-3xl font-bold text-navy break-words">Select Date & Go</p>
                            <p className="w-full float-left font-extralight">Find and Book the car that fuels your adventure!</p>
                        </div>
                    </div>
                    <div className="w-11/12 min-h-44 h-auto p-4 rounded-xl border-[0.025rem] bg-white border-gray-light shadow-sm shadow-gray-light">
                        <div className="w-full h-auto">
                            <p className="w-14 h-14 float-left flex items-center justify-center p-1 rounded-full bg-white border border-gray-light text-5xl font-extrabold text-navy">3</p>
                            <p className="w-full float-left my-2 text-start text-3xl font-bold text-navy break-words">Hit the Gas & Explore</p>
                            <p className="w-full float-left font-extralight">Book your ride, grab the keys, and zoom off on you journey!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceIntroduction