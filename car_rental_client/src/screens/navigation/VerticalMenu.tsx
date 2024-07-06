import { useState, useEffect } from "react"

const VerticalMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [render, setRender] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);
    useEffect(() => { setRender([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]) }, [openMenu])
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
                            <div className="w-full h-12 flex items-center justify-center px-4">
                                <div className="w-1/2 flex items-center justify-start px-4">
                                    <span className="text-white font-bold text-2xl" onClick={() => setOpenMenu(false)}>H</span>
                                </div>
                                <div className="w-1/2 flex items-center justify-end px-4">
                                    <div className="flex items-center justify-center rounded-full border border-white overflow-hidden">
                                        <span className="w-8 h-8 rounded-full overflow-hidden bg-blue"></span>
                                        <span className="px-1 pr-3 text-white font-bold text-lg" onClick={() => setOpenMenu(false)}>SK</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 place-items-center mt-16">
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">Vehicles</div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">Go Eco</div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">Locations</div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">Booking</div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">Help</div>
                                <div className="text-white text-xl font-bold hover:text-dark-blue my-2">About Us</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default VerticalMenu