const HorizontalMenu = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-9/12 h-full float-left flex items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center'>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">Vehicles</p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">Go Eco</p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">Locations</p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">Booking</p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">Help</p>
          <p className="text-lg font-extrabold px-2 text-navy hover:text-blue_border hover:border-b-[0.1rem] hover:border-b-red">About Us</p>
        </div>
      </div>
      <div className='w-3/12 h-full px-4 float-left'>
        <div className="w-auto h-full flex items-center justify-start">
          <button className="w-fit px-4 py-1 rounded-md border border-blue font-extrabold text-blue hover:border-blue_border hover:text-blue_border">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalMenu