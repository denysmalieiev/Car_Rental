import { Outlet } from "react-router-dom"
import NavigationContainer from "./navigation/NavigationContainer";
import FooterMenu from "./navigation/FooterMenu";

const EntryPoint = () => {
  return (
    <div>
      <NavigationContainer />
        <Outlet />
      <FooterMenu />
    </div>
  )
}

export default EntryPoint