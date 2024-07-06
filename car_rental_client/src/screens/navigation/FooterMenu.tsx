const FooterMenu = () => {
    return (
        <div className="w-full overflow-auto">
            <div className="w-full lg:w-11/12 lg:float-right h-auto p-8 lg:pl-16 lg:rounded-s-sm bg-home-theme">
                <div className="w-full h-auto mb-4 grid grid-cols-2 lg:grid-cols-3 place-items-start">
                    <div className='w-full h-auto my-2'>
                        <p className='text-2xl lg:text-3xl text-white font-extrabold hover:text-white-input-light'>Car Rental</p>
                    </div>
                    <div className='w-full h-auto my-2'>
                        <p className='text-2xl lg:text-3xl text-white font-extrabold hover:text-white-input-light'>Go Eco</p>
                    </div>
                    <div className='w-full h-auto my-2'>
                        <p className='text-2xl lg:text-3xl text-white font-extrabold hover:text-white-input-light'>Car Rental</p>
                    </div>
                </div>
                <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className='w-full h-auto my-2'>
                        <h1 className="text-white font-extrabold text-xl lg:text-2xl hover:text-white-input-light my-2">Vehicles</h1>
                        <p className="sm:text-sm text-white font-medium my-1">Small Car</p>
                        <p className="sm:text-sm text-white font-medium my-1">Large Car/ SUVs</p>
                        <p className="sm:text-sm text-white font-medium my-1">4 Wheel Drive</p>
                        <p className="sm:text-sm text-white font-medium my-1">Hybrid</p>
                        <p className="sm:text-sm text-white font-medium my-1">Electric Car</p>
                    </div>
                    <div className='w-full h-auto my-2'>
                        <h1 className="text-white font-extrabold text-xl lg:text-2xl hover:text-white-input-light my-2">Hot Deals</h1>
                        <p className="sm:text-sm text-white font-medium my-1">Hot Deals</p>
                        <p className="sm:text-sm text-white font-medium my-1">Location Deals</p>
                        <p className="sm:text-sm text-white font-medium my-1">Partner Deals</p>
                        <p className="sm:text-sm text-white font-medium my-1">Seasonal Deals</p>
                    </div>
                    <div className='w-full h-auto my-2'>
                        <h1 className="text-white font-extrabold text-xl lg:text-2xl hover:text-white-input-light my-2">Locations</h1>
                        <p className="sm:text-sm text-white font-medium my-1">Delhi NCR</p>
                        <p className="sm:text-sm text-white font-medium my-1">Mumbai</p>
                        <p className="sm:text-sm text-white font-medium my-1">Pune</p>
                        <p className="sm:text-sm text-white font-medium my-1">Goa</p>
                        <p className="sm:text-sm text-white font-medium my-1">Lucknow</p>
                        <p className="sm:text-sm text-white font-medium my-1">Bangalore</p>
                        <p className="sm:text-sm text-white font-medium my-1">Hyderabad</p>
                        <p className="sm:text-sm text-white font-medium my-1">Chennai</p>
                        <p className="sm:text-sm text-white font-medium my-1">Kochi</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto py-2 overflow-auto flex items-center justify-center">
                <p className="text-sm text-gray text-ellipsis">All right reserver to @Car_Rental</p>
            </div>
        </div>
    )
}

export default FooterMenu