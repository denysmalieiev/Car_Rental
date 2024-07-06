import { FaStarHalfStroke, FaStar, FaRegStar } from "react-icons/fa6";

const Testimonials = () => {
    const mapTill = [1, 2, 3, 4, 5]
    let ratings = [
        {
            name: "Small Car",
            rating: 4.5,
            totalReview: 1000
        },
        {
            name: "SUV",
            rating: 3.5,
            totalReview: 1200
        },
        {
            name: "4 Wheel Drive",
            rating: 4,
            totalReview: 2100
        },
        {
            name: "Hybrid",
            rating: 4.5,
            totalReview: 1000
        },
        {
            name: "Electric",
            rating: 3.5,
            totalReview: 1200
        }
    ];

    return (
        <div className="w-full h-auto overflow-auto px:2 lg:px-28">
            <h1 className="text-center text-3xl font-extrabold font-navy">Testimonials</h1>
            <div className="w-full h-auto flex flex-wrap items-center justify-center my-4">
                {ratings.map((item, index) => (
                    <div className="w-24 lg:w-44 h-auto m-2 py-2 px-1 border border-gray rounded-md text-center" key={index}>
                        <p className="text-sm lg:text-lg font-bold text-ellipsis overflow-hidden line-clamp-1">{item.name}</p>
                        <p className="text-xs lg:text-base font-semibold"><span className="text-home-theme-hover">{item.rating}</span> / 5</p>
                        <div className="flex items-center justify-center">
                            {mapTill.map((rate, index) => {
                                if (item.rating >= rate) {
                                    return <FaStar key={rate} className="text-xs lg:text-sm text-home-theme" />
                                } else if (item.rating > index && item.rating < rate) {
                                    return <FaStarHalfStroke key={rate} className="text-xs lg:text-sm text-home-theme" />
                                } else{
                                    return <FaRegStar key={rate} className="text-xs lg:text-sm text-home-theme" />
                                }
                            })}
                        </div>
                        <p className="text-xs lg:text-sm my-1 lg:my-2"><u>{item.totalReview}</u> reviews</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;