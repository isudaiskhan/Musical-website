import About from "./Components/About/About";
import CountDown from "./Components/BuyTickets/CountDown";
import Contact from "./Components/Contact/Contact";
import Eventss from "./Components/Eventss/Eventss";
import Feed from "./Components/Feed/Feed";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Servicess from "./Components/Servicess/Servicess";
import Tracks from "./Components/Tracks/Tracks";


function App() {
  return (
   <>

     <Navbar />
     <Hero />
     <Eventss />
     <About />
     <Servicess />
     <Tracks />
     <Feed />
     <Contact />
     <CountDown />
     <Footer />
     <ScrollButton />
     
    
   </>
  );
}

export default App;
