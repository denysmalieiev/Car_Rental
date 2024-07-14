import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import EntryPoint from "./screens/EntryPoint";
import HomePage from "./screens/Landing/HomePage";
import AllVehicles from "./screens/Vehicles/AllVehicles";
import GoEcoVehicles from "./screens/Vehicles/GoEcoVehicles";
import Locations from "./screens/Activity/Locations";
import Bookings from "./screens/Bookings/Bookings";
import FAQHelp from "./screens/Help/FAQHelp";
import AboutUs from "./screens/Activity/AboutUs";
import SignUp from "./screens/users/SignUp";
import SignIn from "./screens/users/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPoint />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "all-vehicles",
        element: <AllVehicles />,
      },
      {
        path: "go-eco",
        element: <GoEcoVehicles />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "help",
        element: <FAQHelp />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ]
  },

]);


function App() {
  return (
    <>
      <div className="select-false font-serif">
        <RouterProvider router={router} fallbackElement={<div>Error</div>} />
      </div>
    </>
  )
}

export default App
