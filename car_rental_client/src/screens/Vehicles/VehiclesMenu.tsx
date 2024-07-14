interface cars {
    _id: number
    name: string
    image: string
}

const VehiclesMenu = ({closeCarMenu}: any) => {

    const carOptions: cars[] = [
        { _id: 1, name: `Small Car`, image: "https://www.automobilemag.com/uploads/sites/11/2010/10/34820193.jpeg1.jpg" },
        { _id: 2, name: `Large Car/SUV's`, image: "https://images4.alphacoders.com/936/936081.jpg" },
        { _id: 3, name: `4 Wheel Drive`, image: "https://cdni.autocarindia.com/ExtraImages/20210406061737_Mahindra_Thar_RT_lead.jpg" },
        { _id: 4, name: `Electric Car`, image: "https://electricvehicleweb.in/wp-content/uploads/2020/01/Tata-Nexon-EV-official-image-1024x630.jpg" },
        { _id: 5, name: 'Hybrid Cars', image: "https://s3-eu-west-1.amazonaws.com/eurekar-v2/uploads/images/original/i3front_1.jpg" },
        { _id: 5, name: 'Vans', image: "https://tractorsinfo.com/wp-content/uploads/2017/02/Force-Traveller-26-image-3.jpg" },
    ]
    return (
        <div className="w-auto h-auto overflow-auto grid grid-cols-1 place-items-center justify-center bg-white">
            <div className="w-full p-[2%] h-auto overflow-auto">
                <div className="grid grid-cols-6 gap-4">
                    {
                        carOptions.map((car) => {
                            return (
                                <div key={car._id} className="w-fit h-auto overflow-hidden p-1 m-2" onClick={()=>closeCarMenu()}>
                                    <img className="w-full h-auto rounded hover:shadow-md hover:shadow-gray-light" src={car.image} alt="car" />
                                    <h1 className="p-2 text-sm focus:text-home-theme hover:text-home-theme text-center">{car.name}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default VehiclesMenu