import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const BookingSearch = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const crDate = new Date();
    const tomorrowDate = new Date(crDate);
    tomorrowDate.setDate(crDate.getDate() + 1);
    const tomorrowFormatted = tomorrowDate.toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12:false});
    const [startDate, setStartDate] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endDate, setEndDate] = useState("")
    return (
        <div className="w-full h-auto">
            <div className="w-full float-left grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-auto my-2">
                <div className="w-full h-auto float-left overflow-auto">
                    <p className="font-semibold text-black-gray">Pickup Time</p>
                    <div className="w-auto h-10 overflow-hidden flex items-center justify-center">
                        <input
                            className="w-1/2 h-full bg-white text-sm px-4 py-2 outline-none mr-0.5 border border-gray-light rounded-md"
                            type="date"
                            value={startDate || currentDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <input
                            className="w-1/2 h-full bg-white text-sm px-4 py-2 outline-none ml-0.5 border border-gray-light rounded-md"
                            type="time"
                            value={startTime || currentTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full h-auto float-left overflow-auto">
                    <p className="font-semibold text-black-gray">Drop Time</p>
                    <div className="w-auto h-10 overflow-hidden flex items-center justify-center">
                        <input
                            className="w-1/2 h-full bg-white text-sm px-4 py-2 outline-none mr-0.5 border border-gray-light rounded-md"
                            type="date"
                            value={endDate || tomorrowFormatted}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <input
                            className="w-1/2 h-full bg-white text-sm px-4 py-2 outline-none ml-0.5 border border-gray-light rounded-md"
                            type="time"
                            value={startTime || currentTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                </div>

            </div>
            <div className="w-full float-left flex items-center justify-center overflow-auto my-2">
                <div className="w-full h-10 mr-4 lg:mr-28 rounded-md border border-gray-light overflow-hidden flex items-center justify-center">
                    <input className="w-full h-full bg-white text-sm px-4 py-2 outline-none" type="text" placeholder="Enter car..." />
                </div>
                <div className="w-min h-10 flex items-center justify-end">
                    <button className='h-full rounded-md px-4 bg-home-theme hover:bg-home-theme-hover text-lg font-medium text-white flex items-center justify-center'>Book&nbsp;<FaArrowRight className="text-sm animate-pulse z-10"/></button>
                </div>
            </div>
        </div>
    )
}

export default BookingSearch