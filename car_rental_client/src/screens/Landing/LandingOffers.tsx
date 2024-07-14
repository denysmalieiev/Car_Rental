
const LandingOffers = () => {
    return (
        <div className="w-full h-auto px-2 lg:px-16 lg:ml-[0.55rem] py-6 float-left overflow-hidden">
            <div className="w-full h-auto px-2 py-4 bg-home-theme flex items-center justify-center rounded-md overflow-hidden">
                <div className="w-9/12 h-full flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-start">
                        <div className="px-8 lg:px-16">
                            <p className="text-xs lg:text-2xl font-extrabold text-white break-words">Save 20% on your next adventure</p>
                            <p className="sm:text-[0.5rem] text-white break-words">Join out Car Rental newsletter for exclusive deals, travel tips, and inspiration!</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/12 h-full flex items-center justify-center overflow-hidden">
                    <button className="px-2 lg:px-6 py-1 lg:py-2 rounded-full border-2 border-white hover:bg-white hover:text-home-theme text-xs lg:text-xl text-white font-bold">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default LandingOffers