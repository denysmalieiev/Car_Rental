import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom"
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import Lottie from 'react-lottie';
import CarLogo from '../../assets/Car_Info.json';

const NavigationContainer = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CarLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='pb-12 lg:pb-16'>
      <div className='w-full h-auto fixed z-50 bg-white shadow-md shadow-gray-light float-start overflow-hidden'>
        <div className='w-2/12 h-12 lg:h-16 float-left text-black flex items-center justify-center' onClick={scrollToTop}>
          <Link to={`/`}>
            <Lottie
              options={defaultOptions}
              height={80}
              width={80}
            />
          </Link>
        </div>
        <div className='w-10/12 h-12 lg:h-16 float-left text-black'>
          {isBigScreen && <HorizontalMenu />}
          {!isBigScreen && <VerticalMenu />}
        </div>
        {/* <div className='w-full h-6 lg:h-8 float-left flex items-center justify-center bg-landing-page'>
          <p className='text-[0.6rem] lg:text-xs font-medium'>We have offering upto 20% discount on booking over 500 km range!🔥</p>
        </div> */}
      </div>
    </div>
  )
}

export default NavigationContainer