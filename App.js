// import './App.css';
import Navbar from "./newnav.js"
import Header from "./header.js"
import Caraousal from "./Caraousal"
import Text from "./Text"
// import Body from "./body"
import FootText from "./foottext"
import SurgeryCovered from './surgeriswecover';
import KnowUsBetter from './knowusbetter';
import WhySurgiCare from './whysurgicare';
import Benefits from './Benefit';
import Footer from './footer';
import StellerDoc from './stellardoc';
import Reviews from './Review';
import MiddleCard from "./middlecards.js";
// import Download from './Download';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Caraousal />
      {/* <MiddleCard/> */}
      <Text />
      <SurgeryCovered/>
      <FootText/>
      <KnowUsBetter/>
      <WhySurgiCare />
      <Benefits />
      <StellerDoc />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App;
