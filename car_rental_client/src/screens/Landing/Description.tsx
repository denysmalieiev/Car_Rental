import TravelGIF from "../../assets/tenor.gif"

const Description = () => {
  return (
    <div className="w-full h-auto px-2 lg:px-16 float-left overflow-auto">
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center overflow-auto float-left">
        <div className="w-full h-auto order-2 lg:order-1">
          <h1 className="text-5xl font-bold text-start break-words">Car Rental Made Easy</h1>
          <p className="text-black-light my-6 break-words">We make renting a car ridiculously simple. Apart from Car Rentals being one of the largest independent car rental companies, we also have brand new cars of all shapes and sizes to best suit the holiday you’ve got planned.</p>
          <p className="text-black-light my-6 break-words">With a fleet of some of the best rental cars, pop onto the vehicles page and check out our huge range of modern rental cars.</p>
          <p className="text-black-light my-6 break-words">And don’t worry, its not all about the techy car details – you can also explore some of our fantastic trip planning resources and discounts from our local experts.</p>
          <p className="text-black-light my-6 break-words">Once you’ve sorted out where you’re going and what you want to see along the way, booking your rental car is as simple as clicking a button.</p>
          <button className="px-4 py-2 bg-home-theme hover:bg-home-theme-hover text-white font-medium rounded-md">Explore Vehicles</button>
        </div>
        <div className="w-full h-auto order-1 lg:order-2">
          <img className="w-full h-auto" src={TravelGIF} alt="Travel GIF" />
        </div>
      </div>
    </div>
  )
}

export default Description