import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const VerticalMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => { }, [openMenu])
    return (
        <div className='w-full overflow-auto'>
            {!openMenu && (
                <div className="w-full h-full flex items-center justify-end px-4">
                    <span className="text-black font-bold text-2xl p-2" onClick={() => setOpenMenu(true)}>=</span>
                </div>
            )}
            {openMenu && (
                <>
                    <div className="w-full h-auto top-0 left-0 fixed">
                        <div className="w-full h-screen bg-home-theme bg-opacity-90 backdrop-blur">
                            <div className="w-full h-16 flex items-center justify-center p-2">
                                <div className="w-1/2 flex items-center justify-start px-4">
                                    <span className="text-white font-bold text-2xl" onClick={() => setOpenMenu(false)}>H</span>
                                </div>
                                <div className="w-1/2 flex items-center justify-end">
                                    <div className="flex items-center justify-center rounded-full border border-white overflow-hidden">
                                        <div className="w-fit px-3 py-1.5 text-white font-bold hover:bg-white hover:text-home-theme">
                                            <Link to={`/sign-up`} onClick={() => setOpenMenu(false)}>Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 place-items-center mt-16">
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={`/all-vehicles`} onClick={() => setOpenMenu(false)}>Vehicles</Link></div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={`/go-eco`} onClick={() => setOpenMenu(false)}>Go Eco</Link></div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={`/locations`} onClick={() => setOpenMenu(false)}>Locations</Link></div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={`/bookings`} onClick={() => setOpenMenu(false)}>Booking</Link></div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={'/help'} onClick={() => setOpenMenu(false)}>Help</Link></div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2"><Link to={`/about-us`} onClick={() => setOpenMenu(false)}>About Us</Link></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default VerticalMenu