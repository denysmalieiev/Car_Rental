import NavigationContainer from "./navigation/NavigationContainer";
import HomePage from "./Landing/HomePage";
import FooterMenu from "./navigation/FooterMenu";

const EntryPoint = () => {
  return (
    <div>
        <NavigationContainer/>
        <HomePage/>
        <FooterMenu/>
    </div>
  )
}

export default EntryPoint