import React from 'react';

interface Suggestions {
    _id: string
    name: string
    image: string
    model: string
    bookingPrice: number
    rentalPrice: number
    currency: string
    transmission: string
    fuel: string
}

const VehiclesSuggestions = () => {
    const suggested: Suggestions[] = [
        {
            _id: "11",
            name: "Tata Nexon",
            image: "https://electricvehicleweb.in/wp-content/uploads/2020/01/Tata-Nexon-EV-official-image-1024x630.jpg",
            model: "New Model",
            bookingPrice: 2500,
            rentalPrice: 19,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "12",
            name: "Mahindra Thar",
            image: "https://cdni.autocarindia.com/ExtraImages/20210406061737_Mahindra_Thar_RT_lead.jpg",
            model: "New Model",
            bookingPrice: 2800,
            rentalPrice: 22,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "13",
            name: "Hyndai Venue",
            image: "https://images4.alphacoders.com/936/936081.jpg",
            model: "New Model",
            bookingPrice: 2600,
            rentalPrice: 20,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "14",
            name: "Tata Nexon",
            image: "https://electricvehicleweb.in/wp-content/uploads/2020/01/Tata-Nexon-EV-official-image-1024x630.jpg",
            model: "New Model",
            bookingPrice: 2500,
            rentalPrice: 19,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "15",
            name: "Mahindra Thar",
            image: "https://cdni.autocarindia.com/ExtraImages/20210406061737_Mahindra_Thar_RT_lead.jpg",
            model: "New Model",
            bookingPrice: 2800,
            rentalPrice: 22,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "16",
            name: "Hyndai Venue",
            image: "https://images4.alphacoders.com/936/936081.jpg",
            model: "New Model",
            bookingPrice: 2600,
            rentalPrice: 20,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "17",
            name: "Tata Nexon",
            image: "https://electricvehicleweb.in/wp-content/uploads/2020/01/Tata-Nexon-EV-official-image-1024x630.jpg",
            model: "New Model",
            bookingPrice: 2500,
            rentalPrice: 19,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "18",
            name: "Mahindra Thar",
            image: "https://cdni.autocarindia.com/ExtraImages/20210406061737_Mahindra_Thar_RT_lead.jpg",
            model: "New Model",
            bookingPrice: 2800,
            rentalPrice: 22,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
        {
            _id: "19",
            name: "Hyndai Venue",
            image: "https://images4.alphacoders.com/936/936081.jpg",
            model: "New Model",
            bookingPrice: 2600,
            rentalPrice: 20,
            currency: "INR",
            transmission: "Auto",
            fuel: "Petrol",
        },
    ]
    return (
        <div className='w-full h-auto overflow-hidden'>
            <div></div>
            <div className='w-full h-auto px-1 py-6 overflow-x-auto flex'>
                {
                    suggested.map((vehicle) => {
                        return (
                            <div key={vehicle._id} className='w-60 lg:w-80 h-full mr-8 rounded-md shadow shadow-gray-light flex-shrink-0 overflow-hidden'>
                                <div className='w-full h-40 lg:h-52 overflow-hidden'>
                                    <img className='w-full h-full' src={vehicle.image} alt={vehicle.name} />
                                </div>
                                <div className='w-full h-auto px-4'>
                                    <div className='w-full h-auto py-2'>
                                        <h1 className='text-sm lg:text-base font-semibold'>{vehicle.name}</h1>
                                        <p className='text-xs lg:text-sm font-light'>{vehicle.name}</p>
                                    </div>
                                    <div className='w-full h-auto pb-2 flex items-center justify-start'>
                                        <div className='w-3/5 h-auto'>
                                            <p className='text-home-theme text-xs lg:text-sm'>{"₹" + vehicle.bookingPrice}<i className='text-gray-light text-[0.5rem] lg:text-xs'>/ per day</i></p>
                                            <p className='text-home-theme text-xs lg:text-sm'>{"₹" + vehicle.rentalPrice}<i className='text-gray-light text-[0.5rem] lg:text-xs'>/ per km</i></p>
                                        </div>
                                        <div className='w-2/5 h-auto flex items-center justify-end'>
                                            <button className='w-auto h-auto px-2 py-1 rounded-md bg-home-theme hover:bg-home-theme-hover text-white text-xs lg:text-sm font-semibold'>Book</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-8 bg-white-input-light flex items-center justify-start'>
                                    <p className='w-3/12 px-4 text-xs lg:text-sm'>
                                        {vehicle.transmission}
                                    </p>
                                    <p className='w-3/12 px-4 text-xs lg:text-sm'>
                                        {vehicle.fuel}
                                    </p>
                                    <p className='w-6/12 px-4 text-xs lg:text-sm font-semibold text-navy text-end'>+&nbsp;info</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VehiclesSuggestions