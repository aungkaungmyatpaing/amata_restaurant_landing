import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Offers from "./components/Offers.jsx"
import Plan from "./components/Plan.jsx"
import Rooms from "./components/Rooms.jsx"
import Slider from "./components/Slider.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Offers/>
        <Plan/>
        <Rooms/>
        <Slider/>
        <Footer/>
    </div>
  );
}

export default App;
