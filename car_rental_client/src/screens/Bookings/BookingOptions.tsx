interface BookingOptionsProps {
    cars: object[];
}

const BookingOptions = ({ cars }: BookingOptionsProps) => {

    return (
        <>
            <select className="w-full h-full px-4 bg-white outline-none appearance-none">
                {
                    cars.map((car:any, index) => {
                        return <option key={index} value={car.id}>{car.name}</option>
                        })
                }
            </select>
        </>
    );
};
export default BookingOptions;